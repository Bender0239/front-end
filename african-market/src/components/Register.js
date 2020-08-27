import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { registerUser } from '../actions/marketActions'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

const LoginBox = styled.div`
    position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
  .message{
      color: white;
      margin-top: 20px;
      font-weight: light;
      font-size: .8rem;
      text-align: center;
      color: grey;   
  }
  .messageLink {
      color: ghostwhite;
  }
`

const P = styled.p`
    margin-left: 20px;
    ${'' /* margin-top: 10px; */}
    margin-bottom: 10px;
    color: red;
    text-align: center;
    display: inline-block;
    letter-spacing: 1px;
`

const UserBox = styled.div`
position: relative;
`
const H2 = styled.h2` 
   border: 1px solid ghostwhite;
    text-align: center;
    display: inline-block;
    padding: 10px;
    color:  ghostwhite;
    font-size: 12px;
    text-transform: uppercase;
    overflow: hidden;
    letter-spacing: 4px;
    text-align: center;
    
`

const Input = styled.input`
 width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  
  `

const Button = styled.button`
    
    margin-left: 80px;
    text-align: center;
    display: inline-block;
    padding: 10px 20px;
    color:  black;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 40px;
    letter-spacing: 4px;
    &:hover {
        
        
     
        box-shadow: 0 0 5px #99bbff,
                    0 0 5px #99bbff,
                    0 0 15px #99bbff,
                    0 0 25px #99bbff;
                    
    }
`


const SignUp = (props) => {
    const { register, handleSubmit, errors, setValue } = useForm()
    
    const history = useHistory()

    const onSubmit = (data) => {

        const newUser = {
            username: data.username,
            email: data.email,
            password: data.password
        }
        props.registerUser(newUser)
        history.push('/login')
        setValue('username', '')
        setValue('password', '')
        setValue('email', '')
    }

    return (
        <LoginBox>
            <form onSubmit={handleSubmit(onSubmit)}>

                <UserBox className="user-box">
                    <label htmlFor="name"><H2>Name:</H2> </label>
                    <Input type='text' placeholder='Enter your first and last name' name='username' ref={register} />

                </UserBox>

                <UserBox>
                    <label htmlFor="email"><H2>Email:</H2> </label>
                    <Input type='text'
                        placeholder='Enter a valid e-mail address'
                        name='email'
                        ref={register({ required: true, pattern: /^\S+@\S+\.\S+$/ })} />
                </UserBox>
                {errors.email && <P>Please enter a valid email address</P>}
                <UserBox className="UserBox">
                    <label htmlFor="password"><H2>Password:</H2> </label>

                    <Input type='password' placeholder='Enter a password'
                        name='password'
                        ref={register({ required: true, minLength: 8 })} />
                    {errors.password && <P>Password must be at least 8 characters</P>}
                    <Button type='submit'>

                        Register
                    </Button>
                </UserBox>

            </form>
            <div className='message'>Do you already have an account? <Link className='messageLink' to='/login'>Login here</Link></div>
        </LoginBox>
        
    
    )

}

export default connect(null, { registerUser })(SignUp);