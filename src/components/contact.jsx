// src/components/Contact.jsx
import React, { useState } from "react";
import { useContactStore } from "../storeg/contact.js";

export default function Contact() {
  const user = useContactStore((state) => state.user);
  const updateContact = useContactStore((state) => state.updateContact);

  const [contactInfo, setContactInfo] = useState(user?.contact || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(contactInfo);
    alert("Contact info updated!");
  };

  if (!user) {
    return (
      <div className="p-6 bg-black text-gold rounded-lg shadow-lg font-serif">
        <p className="text-center text-lg">
          You must be logged in to view or update contact information.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-black via-gray-900 to-black text-white shadow-xl rounded-lg p-8 border border-gold font-serif">
      <h2 className="text-3xl font-bold mb-6 text-gold tracking-widest text-center">
        Dior Contact Information
      </h2>

      <p className="mb-6 text-center text-gray-300">
        Logged in as: <span className="text-gold">{user.name}</span> ({user.email})
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <label className="block">
          <span className="text-gold text-lg">Phone / Contact:</span>
          <input
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            className="mt-2 block w-full border border-gold rounded-md p-3 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
            placeholder="Enter your contact number"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-800 text-gold border border-gold px-6 py-3 rounded-sm font-serif tracking-wide hover:bg-gold hover:text-black transition-all duration-300"
        >
          Save Contact
        </button>
      </form>
    </div>
  );
}
