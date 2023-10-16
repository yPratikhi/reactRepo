import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const { serUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefult();
    serUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
      />
      {"  "}
      <input
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        type="text"
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
