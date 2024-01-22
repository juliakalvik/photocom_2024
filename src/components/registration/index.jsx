import { useState } from "react";
import PocketBase from "pocketbase";

export default function RegistrationForm() {
  const pb = new PocketBase("https://photocom.pockethost.io/");
  const [isRegistering, setRegistering] = useState(false);

  async function registerUser(data) {
    setRegistering(true);
    try {
      const record = await pb.collection("users").create(data);
      console.log(record);
    } catch (error) {
      console.error("Error during registration:", error);
    }
    setRegistering(false);
  }

  const submitRegisterForm = async (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = event.target.elements;
    const emailValue = email.value;
    const passwordValue = password.value;
    const nameValue = name.value;
    const passwordConfirmValue = confirmPassword.value;

    const userData = {
      email: emailValue,
      password: passwordValue,
      passwordConfirm: passwordConfirmValue,
      name: nameValue,
    };

    await registerUser(userData);
  };

  return (
    <form onSubmit={submitRegisterForm}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" required />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" required />
      </div>
      <div>
        <button type="submit" disabled={isRegistering}>
          {isRegistering ? "Registering..." : "Register"}
        </button>
      </div>
    </form>
  );
}
