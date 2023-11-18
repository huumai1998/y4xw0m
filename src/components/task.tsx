"use client";
import { ITask } from "@/types/task";
import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import Modal from "./modal";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDeleted, setOpenModalDeleted] = useState(false);
  const [editTask, setEditTask] = useState(task.text);

  const handleSubmitEditTodo = () => {};
  return (
    <>
      <tr key={task.id}>
        <td className="w-full">{task.text}</td>
        <td className="flex gap-5">
          <BiSolidEdit
            onClick={() => setOpenModalEdit(true)}
            cursor="pointer"
            className="text-blue-500"
            size={20}
          />
          <Modal modalOpen={openModalEdit} setOpen={setOpenModalEdit}>
            <form onSubmit={handleSubmitEditTodo}>
              <h3 className="font-bold text-lg">Add New Task</h3>
              <div className="modal-action">
                <input
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
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
          <FaRegTrashAlt cursor="pointer" className="text-red-500" size={20} />
        </td>
      </tr>
    </>
  );
};

export default Task;
