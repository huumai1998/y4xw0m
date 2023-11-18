"use client";
import { FaPlus } from "react-icons/fa6";
import Modal from "./modal";
import React, { useState } from "react";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import generateUUID from "@/utils/generateUUID";

const AddTask = () => {
  let uuid = generateUUID();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuid,
      text: newTask,
    });
    setNewTask("");
    setOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button onClick={() => setOpen(true)} className="btn btn-primary w-full">
        Add New Task <FaPlus className="ml-2" size={20} />
      </button>

      <Modal modalOpen={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg">Add New Task</h3>
          <div className="modal-action">
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
