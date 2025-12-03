import './AddTaskDialog.css';

import PropTypes from 'prop-types';
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import { Button } from './Button';
import Input from './Input';

const AddTasksDialog = ({ isOpen, handleClose }) => {
  const nodeRef = useRef(null);

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
                <h2 className="text-xl font-semibold text-[#35383E]">
                  New Task
                </h2>
                <p className="mb-4 mt-1 text-sm text-[#9A9C9F]">
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
};

export default AddTasksDialog;
