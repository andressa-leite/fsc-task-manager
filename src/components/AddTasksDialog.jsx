import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { Button } from './Button';
import Input from './Input';

const AddTasksDialog = ({ isOpen, handleClose }) => {
  console.log('Dialog renderizado. isOpen =', isOpen);
  if (!isOpen) return null;
  return createPortal(
    <div className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center">
      <div className="rounded-xl p-5 text-center bg-white">
        <h2 className=" text-xl font-semibold text-[#35383E]">
          New Task
        </h2>
        <p className="mt-1 mb-4 text-sm text-[#9A9C9F]">Enter the information below</p>

        <div className="flex flex-col space-y-4 w-[336px]">
          <Input id ="title" lable="Title" placeholder = "Enter the task title" />
          <Input id="time" lable="Hour" placeholder = "Hour"/>
          <Input id="description" lable="Description" placeholder = "Describe the task"/>
          <div className="flex gap-3">
            <Button size="large" className='w-full' variant='secondary' onClick={handleClose}>Cancel</Button>
            <Button size="large" className='w-full' >Save</Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
AddTasksDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
export default AddTasksDialog;
