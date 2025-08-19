"use client";

import { useState, useEffect } from "react";
import { Calendar, Search, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEventStore } from "./useEventStore"; // adjust path if needed

export default function EventsPage() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [search, setSearch] = useState("");

  const { events, addEvent, deleteEvent, loadEvents } = useEventStore();

  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !date) return;
    addEvent({ id: Date.now(), name, date });
    setName("");
    setDate("");
  };

  const filteredEvents = events.filter((ev) =>
    ev.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=" bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center px-6 py-10">
      {/* Header */}
      <h1 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg">
        ✨ Events
      </h1>

      {/* Form */}
      <form
        onSubmit={handleAdd}
        className="w-full max-w-md backdrop-blur-md bg-white/60 shadow-xl rounded-2xl p-6 border border-white/40 mb-8"
      >
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Event Name
          </label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-indigo-400 text-gray-800"
            placeholder="Enter Event Name"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Date
          </label>
          <input
            type="date"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded-xl px-3 py-2 text-gray-800 focus:ring-2 focus:ring-indigo-400 custom-date"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-xl font-semibold shadow-md hover:scale-[1.02] hover:shadow-lg transition-transform"
        >
          + Add Event
        </button>
      </form>

      {/* Search */}
      <div className="relative w-full max-w-md mb-6">
        <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search events..."
          className="w-full border rounded-xl pl-10 pr-3 py-2 text-gray-800 focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* Events List */}
      <ul className="w-full max-w-md space-y-4">
        <AnimatePresence>
          {filteredEvents.map((ev) => (
            <motion.li
              key={ev.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="flex justify-between items-center backdrop-blur-md bg-white/70 border border-white/40 shadow-lg px-5 py-3 rounded-xl hover:scale-[1.01] transition-transform"
            >
              <div>
                <p className="font-semibold text-gray-900">{ev.name}</p>
                <p className="text-sm text-gray-500">{ev.date}</p>
              </div>
              <button
                onClick={() => deleteEvent(ev.id)}
                className="p-2 rounded-full hover:bg-red-100 transition"
                title="Delete"
              >
                <Trash2 className="w-5 h-5 text-red-500" />
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {filteredEvents.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500 mt-10 italic"
        >
          🌸 No events yet — start by adding one!
        </motion.p>
      )}
    </div>
  );
}
