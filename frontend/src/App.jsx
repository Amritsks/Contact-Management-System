import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { useRef } from "react";

export default function App() {
  const refreshRef = useRef(null);

  return (
<div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-6 text-white relative overflow-hidden">
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute top-1/3 -right-20 w-96 h-96 bg-indigo-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>

      <h1 className="text-4xl font-bold text-center mb-6">
        Contact Manager
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        <ContactForm onSuccess={() => refreshRef.current()} />
        <ContactList refreshRef={refreshRef} />
      </div>
    </div>
  );
}
