import React from 'react';

const Modal = ({ show, message }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-6 rounded shadow">
        <p className="text-center text-xl font-bold mb-4">{message}</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => setShow(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};


export default Modal;