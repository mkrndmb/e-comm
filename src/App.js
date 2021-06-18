import React from 'react'
import './App.css';
import HomePage from './pages/homepage/HomePage';
import {Route, Switch} from 'react-router-dom'
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUpPage from './pages/signInsignup/SignInSignUp';
import {auth,createUserProfileDoc} from './firebase/firebase.utils.js'

class App extends React.Component {
  constructor(){
    super()

    this.state={
      currentUser : null
    }

  }

  unsubscribeFromAuth = null ;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      // console.log(user)
      if(userAuth){
        const userRef = await createUserProfileDoc(userAuth)
        // this.setState({ currentUser : userAuth })
        userRef.onSnapshot(snap=>{
          // console.log(snap.data())
  
          this.setState({ 
            currentUser : {
              id: snap.id,
              ...snap.data()
            } 
          },()=>console.log(this.state.currentUser))
          // console.log(this.state.currentUser)
        })
      }else  this.setState({ currentUser : userAuth })
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  
  render(){

    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
      </div>
  );

  }
  }

export default App;
