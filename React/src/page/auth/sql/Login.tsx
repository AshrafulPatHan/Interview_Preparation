import { TextField } from "@mui/material";
import { useState } from "react";

const Login = () => {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    const loginData = { Name, Password };

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("✅ Login Success:", result);
        alert("Login Success!");
        // 👉 এখানে টোকেন save বা রিডাইরেক্ট করতে পারো
      } else {
        console.warn("❌ Login failed:", result.message);
        alert(result.message);
      }
    } catch (error) {
      console.error("🚨 Error during login:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col items-center gap-2 bg-blue-200 p-6 rounded-2xl"
    >
      <TextField
        label="Name"
        name="Name"
        variant="outlined"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Password"
        name="Password"
        type="password"
        variant="outlined"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
