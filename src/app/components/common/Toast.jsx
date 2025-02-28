import { useEffect, useState } from "react";

const Toast = ({ message, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(onClose, 500);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    <div
        className={`fixed top-5 right-0 z-50 shadow-lg transform transition-transform duration-500 
            ${visible ? "translate-x-0" : "translate-x-full"} 
            bg-red-500 text-white rounded-l-lg 
            text-sm sm:text-base md:text-lg lg:text-xl 
            px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-5
            max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg`
        }
    >
      {message}
    </div>
  );
};

export default Toast;