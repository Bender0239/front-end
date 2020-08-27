import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import Login from './components/Login'
import SignUp from './components/Register'
import PrivateRoute from './components/PrivateRoute'
import MarketPage from './components/MarketPage'
import AddPost from './components/AddPost'
import UserProfile from './components/UserProfile'



const H2 = styled.h2` 

   border: 1px solid ghostwhite;
    text-align: center;
    display: flex;
    justify-content: center;
    padding: 10px;
   width: 250px;
    color:  ghostwhite;
    font-size: 12px;
    text-transform: uppercase;
    overflow: hidden;
    letter-spacing: 4px;

    .link {
      &:hover {
        color: darkslategray;
        
      }
      text-decoration: none;
      color: ghostwhite;
    }

      
`

const H3 = styled.h2` 
   
    text-align: center;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-content: center;
       
    color:  ghostwhite;
    font-size: 12px;
    text-transform: uppercase;
    overflow: hidden;
    letter-spacing: 4px;

    .link {
     ${'' /* margin-left: 400px; */}
      text-decoration: none;
      color: darkslategray;
      &:hover {
        color: ghostwhite;
      }
      ${'' /* border: 1px solid ghostwhite; */}
    }

      
`

const StyledNav = styled.nav`
  

 margin-left: 1100px;
 margin-bottom: 200px;
  padding: 30px;
  
 




  
  margin: 30px;
  margin-left: 100px;
  width: 600px;
  
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
  


`

function App() {

  return (
    <div className="App">
      <H2><Link className ='link' to='/market'>African Marketplace</Link></H2>

    
     
        
        <H3>
          <Link className='link' to='/register'>Sign Up</Link>
       
        
          <Link className='link' to='/login'>Login</Link>
       
        
        <Link className='link' to='/market'>Market</Link>
       
        
        <Link className='link' to='/add'>Add Post</Link>
       
        
        <Link className='link' to='/profile'>User Profile</Link>
        </H3>
     
      
     
      
      <Switch>
        <PrivateRoute exact path="/market" component={MarketPage}/>
        <PrivateRoute exact path="/add" component={AddPost}/>
        <PrivateRoute exact path="/profile" component={UserProfile}/>
        <Route path="/register">
          <SignUp />
        </Route>
        <Route>
          <Login />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
