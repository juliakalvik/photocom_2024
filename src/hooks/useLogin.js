import pb from "../lib/pocketbase";
import { useState } from "react";

export default function useLogin() {
  const [isLoading, setLoading] = useState(false);

  async function login(data, reset) {
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

  return { isLoading, login };
}
