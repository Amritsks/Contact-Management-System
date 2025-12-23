import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm({ onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [success, setSuccess] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(import.meta.env.VITE_API_URL, form);
      setForm({ name: "", email: "", phone: "", message: "" });
      setSuccess("Contact saved successfully!");
      onSuccess();
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
    }
  };

  return (
    <motion.form
      onSubmit={submit}
      className="bg-white text-black p-6 rounded-xl shadow-xl"
    >
      <h2 className="text-2xl font-semibold mb-4">Add Contact</h2>

      {success && (
        <div className="mb-3 text-sm text-green-700 bg-green-100 border border-green-300 px-3 py-2 rounded">
          {success}
        </div>
      )}

      {["name", "email", "phone"].map((field) => (
        <input
          key={field}
          required
          value={form[field]}
          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          placeholder={field}
          className="w-full mb-3 p-2 border rounded"
        />
      ))}

      <textarea
        required
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        placeholder="Message"
        className="w-full mb-3 p-2 border rounded"
      />

      <button className="bg-indigo-600 text-white w-full py-2 rounded">
        Submit
      </button>
    </motion.form>
  );
}
