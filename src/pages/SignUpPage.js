import React, { useState } from 'react';

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform login here
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <label>
          이름
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          전화번호
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default SignUpPage;
