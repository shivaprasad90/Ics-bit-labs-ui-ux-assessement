import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = ({ onShowToast }) => {
  return (
    <div className="py-12 sm:py-24 relative z-10 px-4">
      <LoginForm onSuccessToast={onShowToast} />
    </div>
  );
};

export default Login;

