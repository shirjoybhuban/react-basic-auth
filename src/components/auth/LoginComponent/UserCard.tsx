import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

const UserCard: React.FC = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      {auth?.user?.name ? (
        <h1>{auth?.user?.name}!</h1>
      ) : (
        <h2></h2>
      )}
    </div>
  );
};

export default UserCard;