import pb from "./lib/pocketbase";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Auth() {
  const [isLoading, setLoading] = useState(false);
  const [dummy, setDummy] = useState(0);
  const { register, handleSubmit, reset } = useForm();

  const isLoggedIn = pb.authStore.isValid;

  async function login(data) {
    setLoading(true);
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(data.email, data.password);
    } catch (e) {
      alert(e);
    }
    setLoading(false);
    reset();
  }

  function logout() {
    pb.authStore.clear();
    setDummy(Math.random());
  }

  if (isLoggedIn) {
    return (
      <>
        <h1>Logged in: {isLoggedIn && pb.authStore.model.email}</h1>
        <button onClick={logout}>Log out</button>
      </>
    );
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <h1>Please log in</h1>
      <form onSubmit={handleSubmit(login)}>
        <input type="text" placeholder="email" {...register("email")} />
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />

        <button
          type="submit"
          disabled={isLoading}
          {...(isLoading ? "Loading" : "Login")}
        >
          Log in
        </button>
      </form>
    </>
  );
}
