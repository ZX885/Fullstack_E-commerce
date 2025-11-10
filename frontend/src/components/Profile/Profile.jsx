import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../conf/store.js";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access");
    if (!token) return;
    axios
      .get(`${BASE_URL}/api/users/profile/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-page">
      <h2>Profile</h2>
      <p><b>Username:</b> {user.username}</p>
      <p><b>Email:</b> {user.email}</p>
    </div>
  );
}
