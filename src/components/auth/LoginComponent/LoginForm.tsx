import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';

const LoginForm: React.FC = () => {
  const [fullName, setFullName] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const auth = useContext(AuthContext);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
      auth?.handleUser({ name: fullName ? fullName : "Default Name" });
      alert('Success');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={fullName!}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password!}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
