import pb from "./lib/pocketbase";

import { useForm } from "react-hook-form";
import useLogin from "./hooks/useLogin";
import useLogout from "./hooks/useLogout";

export default function Auth() {
  const { isLoading, login } = useLogin();
  const { logout } = useLogout();
  const { register, handleSubmit, reset } = useForm();
  const isLoggedIn = pb.authStore.isValid;

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
      <form onSubmit={handleSubmit((data) => login(data, reset))}>
        <input type="text" placeholder="email" {...register("email")} />
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading" : "Login"}
        </button>
      </form>
    </>
  );
}
