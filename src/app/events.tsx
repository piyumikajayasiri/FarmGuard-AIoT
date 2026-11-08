import SecondaryPage from "../components/SecondaryPage";

export default function EventsScreen() {
  return (
    <SecondaryPage
      title="Farm Events"
      subtitle="Review important farm activities and system events."
      icon="calendar-outline"
      description="Farm activities, sensor events, and system records will be displayed here when connected to the backend."
    />
  );
}
