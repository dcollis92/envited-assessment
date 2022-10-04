import { useNavigate } from "react-router-dom";

const EventActions = ({ event, user }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button className="btn danger" onClick={() => navigate(`/event`)}>
        Return
      </button>
      {user ? (
        <>
          {event.profile_id === user.id ? (
            <>
              <button
                className="btn warn"
                onClick={() =>
                  navigate(`/event/${event.id}/edit`, { state: event })
                }
              >
                Edit
              </button>
              <button
                className="btn danger"
                onClick={() =>
                  navigate(`/event/${event.id}/confirmation`, { state: event })
                }
              >
                Delete
              </button>{" "}
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default EventActions;
