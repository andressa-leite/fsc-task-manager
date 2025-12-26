import './AddTaskDialog.css';

import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CiRedo } from 'react-icons/ci';
import { CSSTransition } from 'react-transition-group';
import { toast } from 'sonner';
import { v4 } from 'uuid';

import { Button } from './Button';
import Input from './Input';
import TimeSelect from './TimeSelect';

const AddTasksDialog = ({ isOpen, handleClose, onSubmitSuccess }) => {
  const [time, setTime] = useState('morning');
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const nodeRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTime('morning');
    }
  }, [isOpen]);

  const handleSaveClick = async () => {
    const newErrors = [];
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    console.log(title);

    if (!title.trim()) {
      newErrors.push({ field: 'title', message: 'Title is required' });
    }
    if (!time.trim()) {
      newErrors.push({ field: 'time', message: 'Time is required' });
    }
    if (!description.trim()) {
      newErrors.push({
        field: 'description',
        message: 'Description is required',
      });
    }

    setErrors(newErrors);

    if (newErrors.length > 0) {
      return;
    }

    console.log(errors);

    setIsLoading(true);

    const task = {
        title,
        time,
        description,
        status: 'not_started',
        id: v4(),
      }
    const response = await fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      setIsLoading(false);
      toast.error('Failed to add task');
      return;
    }
    onSubmitSuccess(task);
    setIsLoading(false);
    handleClose();
  };

  const titleError = errors.find((error) => error.field === 'title');
  //const timeError = errors.find((error) => error.field === 'time');
  const descriptionError = errors.find(
    (error) => error.field === 'description'
  );

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={300}
      classNames="add-task-dialog"
      unmountOnExit
    >
      <div ref={nodeRef}>
        {createPortal(
          <>
            {/* Overlay com blur */}
            <div
              className={`dialog-overlay ${
                isOpen ? 'dialog-overlay-active' : ''
              }`}
            />

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center">
              <div className="z-10 rounded-xl bg-white p-5 text-center">
                <h2 className="text-brand-dark-blue text-xl font-semibold">
                  New Task
                </h2>
                <p className="mb-4 mt-1 text-sm-text-grey">
                  Enter the information below
                </p>
                <div className="flex w-[336px] flex-col space-y-4">
                  <Input
                    id="title"
                    label="Title"
                    placeholder="Enter the task title"
                    error={titleError}
                    ref={titleRef}
                    disabled={isLoading}
                  />

                  <TimeSelect
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    disabled={isLoading}
                  />
                  <Input
                    id="description"
                    label="Description"
                    placeholder="Describe the task"
                    ref={descriptionRef}
                    error={descriptionError}
                    disabled={isLoading}
                  />

                  <div className="flex gap-3">
                    <Button
                      size="large"
                      className="w-full"
                      variant="ghost"
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="large"
                      className="w-full"
                      onClick={() => handleSaveClick()}
                      disabled={isLoading}
                    >
                      {isLoading && (
                        <CiRedo className="animate-spin text-lg text-white" />
                      )}
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
      </div>
    </CSSTransition>
  );
};

AddTasksDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmitSuccess: PropTypes.func.isRequired,
};

export default AddTasksDialog;
