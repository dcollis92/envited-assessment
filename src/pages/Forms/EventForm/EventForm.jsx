import "./EventForm.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Services
import { getOne } from "../../services/events";

// Components
import EventInput from "./EventInput";

function EventForm(props) {
  const { id } = useParams();
  const [form, setForm] = useState({
    isAttending: "yes",
    location: "home",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // formData is modeled after SQL backend structure
    const formData = {
      id: form.id,
      title: form.title,
      host: form.host,
      date: form.date,
      location: form.location,
      link: form.link,
      description: form.description,
      comments: form.comments,
      is_attending: form.isAttending === "yes" ? "yes" : "no",
    };
    id ? props.updateEvent(formData) : props.addEvent(formData);
  };

  const handleChange = (e) => {
    if (e.target.name === "isAttending") {
      e.target.value = form[e.target.name] === "yes" ? "yes" : "no";
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id);
      const eventData = data.event;
      setForm({
        id: eventData.id,
        title: eventData.title,
        host: eventData.host,
        date: eventData.date,
        location: eventData.location,
        link: eventData.link,
        description: eventData.description,
        comments: eventData.comments,
      });
    };
    id
      ? fetchOne()
      : setForm({
          isAttending: "yes",
        });
    return () => setForm({});
  }, [id]);

  return (
    <>
      <div className="page-header">
        {id ? (
          <h1>Edit Event</h1>
        ) : (
          <>
            <h1>Add Event</h1>
          </>
        )}
      </div>
      <section className="form-container mx-auto">
        <form onSubmit={handleSubmit}>
          <EventInput form={form} handleChange={handleChange} />
          <button type="submit" className="btn submit">
            Submit
          </button>
        </form>

      </section>
    </>
  );
}

export default EventForm;
