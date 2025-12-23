import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ContactList({ refreshRef }) {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await axios.get(import.meta.env.VITE_API_URL);
    setContacts(Array.isArray(res.data) ? res.data : []);
  };

  const deleteContact = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/${id}`);
    fetchContacts();
  };

  useEffect(() => {
    fetchContacts();
    refreshRef.current = fetchContacts;
  }, []);

  return (
    <motion.div className="bg-white text-black p-6 rounded-xl shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Contacts</h2>

      {contacts.map((c) => (
        <div key={c._id} className="border p-3 mb-2 rounded flex justify-between items-center">
          <div>
            <p className="font-bold">{c.name}</p>
            <p className="text-sm">{c.email}</p>
          </div>
          <button
            onClick={() => deleteContact(c._id)}
            className="bg-red-500 text-white px-3 py-1 rounded text-sm"
          >
            Delete
          </button>
        </div>
      ))}
    </motion.div>
  );
}
