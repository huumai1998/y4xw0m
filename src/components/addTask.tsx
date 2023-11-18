"use client";
import { FaPlus } from "react-icons/fa6";
import Modal from "./modal";
import React, { useState } from "react";

const AddTask = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)} className="btn btn-primary w-full">
        Add New Task <FaPlus className="ml-2" size={20} />
      </button>

      <Modal modalOpen={open} setOpen={setOpen} />
    </div>
  );
};

export default AddTask;
