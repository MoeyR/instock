import "./DeleteModal.scss";
import close from "../../assets/icons/close-24px.svg";
import axios from "axios";

function DeleteModal({ name, id, isOpen, onCancel, onConfirm }) {
  if (!isOpen) return null; // 如果isOpen为false，不渲染模态
  const handleDelete = async (event) => {
    try {
      await axios.delete(`http://localhost:8080/api/warehouses/${id}`);
      onConfirm();
    } catch (error) {
      console.log(`error is ${error}`);
    }
  };

  return (
    <div className="deletemodal__backdrop">
      <div className="deletemodal">
        <img
          src={close}
          alt="close"
          className="deletemodal__close"
          onClick={onCancel}
        />
        <h1 className="deletemodal__header">Delete {name} warehouse?</h1>
        <p className="p1 deletemodal__text">
          Please confirm that you’d like to delete the {name} from the list of
          warehouses. You won’t be able to undo this action.
        </p>
        <button
          className="secondary-button deletemodal__cancel"
          onClick={() => {
            onCancel(); //close modal
          }}
        >
          Cancel
        </button>
        <button
          className="delete-button deletemodal__delete"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default DeleteModal;
