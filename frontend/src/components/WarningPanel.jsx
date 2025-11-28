
import React from 'react';

const WarningPanel = ({ show, message, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto">
        <div className="text-center">
          <div className="text-red-500 text-4xl mb-4">
            <i className="fas fa-times-circle"></i>
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">Oops!</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6" id="warningMessage">
            {message}
          </p>
          <button
            className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg w-full flex items-center justify-center hover:bg-red-600"
            onClick={onClose}
          >
            <i className="fas fa-check mr-2"></i>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarningPanel;
