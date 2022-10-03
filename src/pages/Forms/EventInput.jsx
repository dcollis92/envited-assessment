import { Form } from "react-bootstrap";

function EventInput({ form, handleChange }) {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="host">Event Title</Form.Label>
        <Form.Control
          value={form.title ? form.title : ""}
          onChange={handleChange}
          id="title"
          required
          name="title"
          type="text"
          placeholder="My Amazing Event"
          autoComplete="off"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="host">Hosted By</Form.Label>
        <Form.Control
          value={form.host ? form.host : ""}
          onChange={handleChange}
          id="host"
          required
          name="host"
          type="text"
          placeholder="Me!"
          autoComplete="off"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="date">Date</Form.Label>
        <Form.Control
          value={form.date ? form.date : ""}
          onChange={handleChange}
          id="date"
          required
          name="date"
          type="text"
          placeholder="01-01-2023"
          autoComplete="off"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="location">Location</Form.Label>
        <Form.Control
          value={form.location ? form.location : ""}
          onChange={handleChange}
          id="location"
          required
          name="location"
          type="text"
          placeholder="home"
          autoComplete="off"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="link">Link</Form.Label>
        <Form.Control
          value={form.link ? form.link : ""}
          onChange={handleChange}
          id="link"
          required
          name="link"
          type="text"
          placeholder="www.google.com"
          autoComplete="off"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="description">Description</Form.Label>
        <Form.Control
          value={form.description ? form.description : ""}
          onChange={handleChange}
          id="description"
          required
          name="description"
          type="text"
          placeholder="This Event is gonna rule!"
          autoComplete="off"
        />
      </Form.Group>
    </>
  );
}

export default EventInput;
