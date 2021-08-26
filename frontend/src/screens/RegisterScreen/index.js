import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from 'react-icons/ai';

import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { register } from '../../actions/userActions';
import styles from './RegisterScreen.module.scss';

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(register(name, email, password));
    }
    console.log('Submitted');
  };

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      {message && <Message>{message}</Message>}
      {error && <Message>{error}</Message>}
      {loading && <Loader />}
      <form onSubmit={submitHandler}>
        <div className={styles.inputContainer}>
          <AiOutlineUser />
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <AiOutlineMail />
          <input
            type='text'
            id='email'
            name='email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <AiOutlineLock />
          <input
            type='text'
            id='password'
            name='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <AiOutlineLock />
          <input
            type='text'
            id='confirmPassword'
            name='confirmPassword'
            placeholder='Confirm Password'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <input className={styles.submit} type='submit' value='Sign Up' />
      </form>
      <div className={styles.login}>
        Already have an account?{' '}
        <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default RegisterScreen;
