import logo from "./logo.svg";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

// Components
import Landing from "./pages/Landing/Landing";
import EventForm from "./pages/EventForm/EventForm";
import EventDetails from "./pages/EventDetails/EventDetails";
import EventDeleteConfirmation from "./pages/EventDeleteConfirmation/EventDeleteConfirmation";

// Services
import * as eventService from "./services/events";

function App() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await eventService.getAll();
      setEvents(data);
    };
    fetchData();
  }, []);

  // handleAddEvent
  const addEvent = async (eventData) => {
    const event = await eventService.create(eventData);
    setEvents([...events, event]);
    const newId = event.id;
    navigate(`/event/${newId}`);
  };

  // handleUpdateEvent
  const updateEvent = async (eventData) => {
    const updatedEvent = await eventService.update(eventData);
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
    const newId = updatedEvent.id;
    navigate(`/event/${newId}`);
  };

  // handleDeleteEvent
  const deleteEvent = async (id) => {
    await eventService.deleteOne(id);
    setEvents(events.filter((event) => event.id !== parseInt(id)));
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create" element={<EventForm addEvent={addEvent} />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route
          path="/event/:id/edit"
          element={<EventForm updateEvent={updateEvent} />}
        />
        <Route
          path="/event/:id/delete"
          element={<EventDeleteConfirmation deleteEvent={deleteEvent} />}
        />
      </Routes>
    </>
  );
}

export default App;
