import React, { useState, useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../../conf/store.js";
import { useNavigate } from "react-router-dom";
import { context } from "../../conf/store.js";
import './style.scss'

export default function Login() {
  const {dispatch} = useContext(context);
  const [form, setForm] = useState({ username: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/users/token/`, form);
      
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      
      //авторизован
      dispatch({ type: "Auth" });

      //определение admin
      if (res.data.is_admin === true){
        dispatch({ type: "SetAdmin" });
      } else{
        dispatch({ type: "NotAdmin"})
      }
      
      setMsg("Успешно вход в профиль");
      navigate("/profile");
    } catch {
      setMsg("Неправильный логин или пароль");
    }
  };

  return (
    <div className="login-page">
      <h2>Войти в профиль</h2>
      <form onSubmit={handleSubmit}>
        <input className="username" name="username" placeholder="Username" onChange={handleChange} />
        <input className="password" name="password" type="password" placeholder="Password" onChange={handleChange} />
        <a href="/">Забыли пароль</a>
        <button className="button" type="submit">Войти</button>
        <p>Или с помощью </p>

      </form>
      <p>{msg}</p>
    </div>
  );
}
