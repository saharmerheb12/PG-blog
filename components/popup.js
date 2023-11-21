// components/Popup.js
import { useState, useEffect } from "react";
import SubscriptionForm from "@/components/subscription";
// import Popup from "reactjs-popup";

const Popup = ({ alert, delay }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if the user has already been prompted (stored in local storage)
    const hasBeenPrompted = localStorage.getItem("hasBeenPrompted");

    if (!hasBeenPrompted) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, delay * 1000); // to show the popup after after delay(seconds)

      // Clean up the timer on component unmount or when the popup is closed
      return () => clearTimeout(timer);
    } else {
      console.log("user prompted about subscription already..");
    }
  }, [delay]);

  const handleClose = () => {
    // Mark the user as prompted (store in local storage)
    localStorage.setItem("hasBeenPrompted", "true");
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && (
        <SubscriptionForm onClose={handleClose} alert={alert} />
      )}
    </div>
  );
};

export default Popup;
