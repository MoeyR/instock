import './DeleteModal.scss';
import close from '../../assets/icons/close-24px.svg';

function DeleteModal({ name, isOpen, onCancel, onConfirm }) {
  if (!isOpen) return null; // 如果isOpen为false，不渲染模态
  return (
    <div className="deletemodal">
      <img src={close} alt="close" className="deletemodal__close" onClick={onCancel}/>
      <h1>Delete {name} warehouse?</h1>
      <p className="p1 deletemodal__text">
        Please confirm that you’d like to delete the {name} from the list of
        warehouses. You won’t be able to undo this action.
      </p>
      <button className="secondary-button deletemodal__cancel"
        onClick={() => {
          onCancel(); // 关闭模态
        }}
      >
        Cancel
      </button>
      <button className="delete-button deletemodal__delete"
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
