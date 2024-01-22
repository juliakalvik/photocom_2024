import pb from "../../lib/pocketbase";

export default function Profile() {
  const isLoggedIn = pb.authStore.isValid;

  if (!isLoggedIn) {
    return <h1>Please log in to view your profile.</h1>;
  }

  const currentUser = pb.authStore.model;

  return (
    <>
      <h1>My profile</h1>
      <p>Name: {currentUser.name}</p>
      <p>Email: {currentUser.email}</p>
    </>
  );
}
