import './DeleteModal.scss';

function DeleteModal({ name, isOpen, onCancel, onConfirm }) {
  if (!isOpen) return null; // 如果isOpen为false，不渲染模态
  return (
    <div className="deletemodal">
      <h1>Delete {name} warehouse?</h1>
      <p>
        Please confirm that you’d like to delete the {name} from the list of
        warehouses. You won’t be able to undo this action.
      </p>
      <button
        onClick={() => {
          onCancel(); // 关闭模态
        }}
      >
        Cancel
      </button>
      <button
        onClick={() => {
          onConfirm(); // 处理确认动作，比如导航
        }}
      >
        Delete
      </button>
    </div>
  );
}
export default DeleteModal;
