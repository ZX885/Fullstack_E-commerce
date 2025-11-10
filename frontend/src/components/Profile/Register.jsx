import React, { useState } from "react";
import { registerNewUser } from "../../conf/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerNewUser(form.username, form.password, form.password2, form.email);
      setMsg("✅ Registration successful!");
      navigate("/login");
    } catch (err) {
      setMsg("❌ " + (err.response?.data?.error || "Error occurred"));
    }
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <input name="password2" type="password" placeholder="Confirm Password" onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}
