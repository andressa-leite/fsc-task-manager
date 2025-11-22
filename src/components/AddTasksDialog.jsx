import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const AddTasksDialog = ({ isOpen }) => {
  console.log('Dialog renderizado. isOpen =', isOpen);
  if (!isOpen) return null;
  return createPortal(
    <div className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center">
      <div className="rounded-xl p-5 text-center">
        <h2 className="bg-white text-xl font-semibold text-[#35383E]">
          Nova Tarefa
        </h2>
        <p className="text-[#9A9C9F] mt-1">Insira as informações abaixo</p>
      </div>
    </div>,
    document.body
  );
};
AddTasksDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
export default AddTasksDialog;
