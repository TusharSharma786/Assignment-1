import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../../component/form-input/form-input.component';
import CustomButton from '../../component/custom-button/custom-button.component';
import { toggleSignin } from '../../redux/sign-in/sign-in.actions';

import './sign-in-and-sign-out.styles.scss';

class SignInAndSignOut extends React.Component {
    constructor() {
        super();
        this.state = {
            email :'',
            password :'',
            signedIn : false
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const { dispatch } = this.props;
        const {email, password} = this.state;
        this.setState({ email: '', password: '', signedIn: true });
        {
            email == 'admin' ?
                (password == 'admin' ?
                    (dispatch(toggleSignin()))
                    : (alert('wrong password')))
                : (alert('wrong email'))
        }
    }
    
    handleChange = event => {
        const {name,value} = event.target;
        this.setState({[name]:value})
    }

    render() {
        return (
            <div>
                <form className='form' onSubmit={this.handleSubmit}>
                    <FormInput type='input' name='email' onChange={this.handleChange} value= {this.state.email} label='Email' required/>
                    <FormInput type='password' name='password' onChange={this.handleChange} value= {this.state.password} label='Password' required/>
                    <div className='button'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(SignInAndSignOut);