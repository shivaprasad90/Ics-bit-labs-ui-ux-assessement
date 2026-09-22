import React from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = ({ onShowToast }) => {
  return (
    <div className="py-12 sm:py-24 relative z-10 px-4">
      <RegisterForm onSuccessToast={onShowToast} />
    </div>
  );
};

export default Register;

