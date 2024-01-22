import Auth from "../Auth";
import RegistrationForm from "../components/registration";

export default function HomePage() {
  return (
    <>
      <h1>This is the homepage</h1>
      <Auth />
      <RegistrationForm />
    </>
  );
}
