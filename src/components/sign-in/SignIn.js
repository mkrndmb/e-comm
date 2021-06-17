import React from 'react'
import CustomButton from '../custom-button/CustomButton'
import CustomInput from '../custom-input/CustomInput'
import { signInWithGoogle } from '../../firebase/firebase.utils.js'
import './sign-in.css'


class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = e =>{
        e.preventDefault()
        this.setState({ email: '', password: '' });
    }

    handleChange = e =>{
        const {name,value} = e.target
        this.setState({
            [name]:value
        })
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>Already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>

                    {/* <input 
                    name='email'
                    type='email'
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    required/> */}

                    <CustomInput
                    name='email'
                    type='email'
                    label='EMAIL'
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    required />
                    
                    {/* <input 
                    name='password' 
                    type='password' 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    required/> */}

                    <CustomInput 
                    name='password'
                    type='password'
                    label='PASSWORD'
                    value={this.state.password} 
                    handleChange={this.handleChange} 
                    required />
                
                    {/* <input type='submit' value='Sign in'/> */}
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} style={{background:'#4285f4',border:'none'}}>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>   
        )
    }
}

export default SignIn