import { create } from "zustand";

interface EventItem {
  id: number;
  name: string;
  date: string;
}

interface EventStore {
  events: EventItem[];
  addEvent: (event: EventItem) => void;
  deleteEvent: (id: number) => void;
  loadEvents: () => void;
}

export const useEventStore = create<EventStore>((set) => ({
  events: [],

  addEvent: (event) =>
    set((state) => {
      const updated = [...state.events, event];
      localStorage.setItem("events", JSON.stringify(updated));
      return { events: updated };
    }),

  deleteEvent: (id) =>
    set((state) => {
      const updated = state.events.filter((ev) => ev.id !== id);
      localStorage.setItem("events", JSON.stringify(updated));
      return { events: updated };
    }),

  loadEvents: () => {
    const saved = localStorage.getItem("events");
    if (saved) {
      set({ events: JSON.parse(saved) });
    }
  },
}));
