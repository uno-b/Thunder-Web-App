import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { login } from '../../actions/userActions';
import styles from './LoginScreen.module.scss';

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className={styles.container}>
      <h1>Sign In</h1>
      {error && <Message>{error}</Message>}
      {loading && <Loader />}
      <form onSubmit={submitHandler}>
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
        <input type='submit' value='Sign In' className={styles.submit} />
      </form>
      <div className={styles.register}>
        No account?{' '}
        <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
          Register here
        </Link>
      </div>
    </div>
  );
};

export default LoginScreen;
