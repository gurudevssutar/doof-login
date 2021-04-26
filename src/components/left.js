import React from 'react'
import Header from './header'


const left = () => {
    return (
        <div>
        <Header/>
        <h3 style={{margin:'0 0 7% 0'}}>Login</h3>
        <h4>Email</h4>
        <input type="email" placeholder="Email" style={{background:'#F0F0F0',border:'none',width:'50%',height:'7%',padding:'1%'}}></input>
        <h4>Password</h4>
        <input type="password" placeholder="Password" style={{background:'#F0F0F0',border:'none',width:'50%',height:'7%',padding:'1%'}}></input><a href="#" style={{marginLeft:'2%'}}>Forgot password</a><br/>

        <br/><br/>
        <button style={{background: '#F7D832', border:'none', borderRadius: '5px',height:'10%',width:'52.5%',fontSize:'1.1rem'}} onClick={sayHello} type="submit">Login</button>
        <p>Dont have an account yet? <a href="#">Sign Up</a></p><br/><br/><br/>
        </div>
        
    )
}
function sayHello() {
    alert('You clicked me!');
  }

export default left
