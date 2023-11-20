// components/Popup.js
import { useState, useEffect } from "react";
import SubscriptionForm from "@/components/subscription";
// import Popup from "reactjs-popup";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if the user has already subscribed (stored in local storage)
    const hasSubscribed = localStorage.getItem("hasSubscribed");
    if (!hasSubscribed) {
      // Set a timer to show the popup after a certain time (e.g., 10 seconds)
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, process.env.SUBSCRIPTION_POPUP_DELAY * 1000); // Adjust the time as needed

      // Clean up the timer on component unmount or when the popup is closed
      return () => clearTimeout(timer);
    } else {
      console.log("user prompted about subscription already..");
    }
  }, []);

  const handleClose = () => {
    // Mark the user as subscribed (store in local storage)
    localStorage.setItem("hasSubscribed", "true");
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && <SubscriptionForm onClose={handleClose} />}
    </div>
  );
};

export default Popup;
