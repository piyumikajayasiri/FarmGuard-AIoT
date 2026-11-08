import SecondaryPage from "../components/SecondaryPage";

export default function SettingsScreen() {
  return (
    <SecondaryPage
      title="Settings"
      subtitle="Manage your FarmGuard app preferences."
      icon="settings-outline"
      description="Notification preferences, refresh settings, and other application options can be configured here."
    />
  );
}
