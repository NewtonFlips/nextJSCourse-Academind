import { useRouter } from "next/router";
import { getEventById } from "./../../dummy-data";

function AllEventsPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  return (
    <div>
      <h1>All Events Page</h1>
    </div>
  );
}

export default AllEventsPage;
