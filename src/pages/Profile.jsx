import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';

const Profile = ({ onShowToast }) => {
  return <Dashboard onShowToast={onShowToast} />;
};

export default Profile;

