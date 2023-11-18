"use client";
import { ITask } from "@/types/task";
import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import Modal from "./modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDeleted, setOpenModalDeleted] = useState(false);
  const [editTask, setEditTask] = useState(task.text);

  const handleSubmitEditTodo: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: editTask,
    });
    setEditTask("");
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDeleted(false);
    router.refresh();
  };
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
              <h3 className="font-bold text-lg">Edit Task</h3>
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
          <FaRegTrashAlt
            onClick={() => setOpenModalDeleted(true)}
            cursor="pointer"
            className="text-red-500"
            size={20}
          />
          <Modal modalOpen={openModalDeleted} setOpen={setOpenModalDeleted}>
            <h3>Are you sure, You want to delete this task? </h3>
            <div className="modal-action">
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="btn bg-red-500"
              >
                Yes
              </button>
            </div>
          </Modal>
        </td>
      </tr>
    </>
  );
};

export default Task;
