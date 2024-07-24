import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuthToken } from '../Auth/auth'; 

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const status = useSelector((state) => state.user.status);
  const navigate = useNavigate();

  useEffect(() => {
    if (!getAuthToken()) {
      navigate('/login');
    }
  }, [navigate]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!user) {
    navigate('/login'); 
    return null; 
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {JSON.stringify(user)} </p>
    </div>
  );
};

export default Profile;
