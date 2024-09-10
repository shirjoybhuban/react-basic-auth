import React, { useContext } from 'react';
import '../style.css';
import { AuthContext } from '../../../context/AuthContext';

const UserCard: React.FC = () => {
  const auth = useContext(AuthContext);

  const handleLogout = () => {
    auth?.logout();
  };

  if(!auth?.user){
    return (
      <div className='card'>
        <h3>Please Login First!</h3>
      </div>
    );
  }

  return (
    <div className='card'>
      <img src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/10.png" alt="user" />
      <h3>Hi, {auth?.user?.username}</h3>
      <button onClick={handleLogout}> Logout </button>
    </div>
  );
};

export default UserCard;