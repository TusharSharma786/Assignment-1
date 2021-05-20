import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleSignin } from '../../redux/sign-in/sign-in.actions';

import './header.styles.scss';

const Header = ({dispatch,signedIn}) => {
    // const dispatch = this.props;
    return (
    <div className='header'>
        <div className='content'>
            {
                signedIn ? (
                    <Link className='link' to='/'>Homepage</Link>
                ): (null)
            }
            {
                signedIn ? (
                    <Link className='link' to='/list'>Listpage</Link>
                ): (null)
            }
            {
                signedIn ? (
                    <div className='signout' onClick={() => dispatch(toggleSignin())}>
                        Sign out
                    </div>
                ) : (
                    <Link className='link' to='/signin'>Sign in</Link>
                )
            }
        </div>
    </div>
)
}

const mapStateToProps = state => ({
  signedIn : state.signin.signIn
});

export default connect(mapStateToProps)(Header);