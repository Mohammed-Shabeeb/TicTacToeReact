// src/Modal.jsx
import React from 'react';
import { FaCirclePlay } from "react-icons/fa6";

const StartModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-filter backdrop-blur-sm flex items-center justify-center">
      <div className="bg-teal-600 p-4 rounded shadow-lg w-1/3 h-1/5 md:w-1/4 h-1/6 ">
        <h2 className="text-2xl mb-2 md:my-3 text-white">Start Playing</h2>
        <div className="flex justify-center ">
            <FaCirclePlay className='mx-10 w-16 h-16 md:w-8 h-8 cursor-pointer ' onClick={onClose}/>
        </div>
      </div>
    </div>
  );
};

export default StartModal;