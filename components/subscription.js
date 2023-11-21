// components/SubscriptionForm.js
import { useState } from "react";

const SubscriptionForm = ({ onClose, alert }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        console.log("Subscription successful!");
        // TODO: You might want to redirect the user or show a success message
      } else {
        console.error("Subscription failed.");
        // TODO: Handle error scenarios
      }
    } catch (error) {
      console.error("Error during subscription:", error);
    }
    onClose();
  };

  return (
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-y-8 border-gray-50 bg-white px-10 py-8 shadow-2xl dark:bg-black">
      <div className="absolute right-0 top-0 flex h-0 w-8 justify-between">
        <button className="font-bold" onClick={onClose}>
          X
        </button>
      </div>
      <div className="flex w-full items-center justify-between">
        <span className="text-center text-2xl font-semibold">
          {alert}
        </span>
      </div>
      <form onSubmit={handleSubmit} className="my-10">
        <div className="mb-5">
          <label htmlFor="email_address" className="sr-only">
            Email Address
          </label>
          <input
            id="email_address"
            type="email"
            placeholder="Email Address"
            name="email"
            autoComplete="false"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full rounded-md border-2 border-gray-300 px-4 py-3 outline-none ring-gray-100 placeholder:text-gray-800 focus:border-gray-600   focus:ring-4 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:ring-0 dark:placeholder:text-gray-200 dark:focus:border-white"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-gray-900 px-7 py-4 font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-offset-2 dark:bg-white dark:text-black ">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscriptionForm;
