import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';

import logo from '../../images/logo.png';
import { logout } from '../../actions/userActions';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div className={styles.container}>
        <Link
          to='/'
          style={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div>
            <img src={logo} className={styles.logo} alt='Logo' />
          </div>
          <div className={styles.title}>Empty Platform</div>
        </Link>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/cardboard'>Get Cardboard</Link>
            </li>
            <li>
              <Link to='/news'>News</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/forum'>Forum</Link>
            </li>
            <li>
              <Link to='/#'>日本語</Link>
            </li>
            {userInfo ? (
              <button
                type='button'
                onClick={logoutHandler}
                className={styles.loginoutBtn}
              >
                Log out
              </button>
            ) : (
              <li className={styles.loginoutBtn}>
                <Link to='/login'>
                  Login{' '}
                  <span className={styles.icon}>
                    <BiUserCircle />
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
