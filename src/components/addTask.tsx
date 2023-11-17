import { FaPlus } from "react-icons/fa6";

const AddTask = () => {
  return (
    <div>
      <button className="btn btn-primary w-full">
        Add New Task <FaPlus className="ml-2" size={20} />
      </button>
    </div>
  );
};

export default AddTask;
