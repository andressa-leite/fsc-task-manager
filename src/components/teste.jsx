import './AddTaskDialog.css'

import PropTypes from 'prop-types';
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import { Button } from './Button';
import Input from './Input';

const AddTasksDialog = ({ isOpen, handleClose }) => {
  console.log('Dialog renderizado. isOpen =', isOpen);
  const nodeRef = useRef(null);

  return createPortal(
    <CSSTransition
      in={isOpen}
      timeout={200}
      classNames="add-task-dialog"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30"
      >
        <div className="rounded-xl bg-white p-5 text-center">
          <h2 className="text-xl font-semibold text-brand-dark-blue">New Task</h2>
          <p className="mb-4 mt-1 text-sm text-brand-text-grey">
            Enter the information below
          </p>

          <div className="flex w-[336px] flex-col space-y-4">
            <Input
              id="title"
              lable="Title"
              placeholder="Enter the task title"
            />
            <Input id="time" lable="Hour" placeholder="Hour" />
            <Input
              id="description"
              lable="Description"
              placeholder="Describe the task"
            />
            <div className="flex gap-3">
              <Button
                size="large"
                className="w-full"
                variant="secondary"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button size="large" className="w-full">
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.body
  );
};

AddTasksDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
export default AddTasksDialog;
