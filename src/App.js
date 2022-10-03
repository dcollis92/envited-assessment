import logo from "./logo.svg";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

// Components
import Landing from "./pages/Landing/Landing";
import EventForm from "./pages/EventForm/EventForm";
import EventDetails from "./pages/EventDetails/EventDetails";

// Services

function App() {

  useEffect(() => {
    const fetchData = async () => {
      const data = await ampService.getAll();
      setAmps(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create" element={<EventForm />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/event/:id/edit" element={<EventForm />} />
      </Routes>
    </>
  );
}

export default App;
