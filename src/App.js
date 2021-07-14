import React from 'react'
import './App.css';
import HomePage from './pages/homepage/HomePage';
import {Redirect, Route, Switch} from 'react-router-dom'
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUpPage from './pages/signInsignup/SignInSignUp';
import {auth,createUserProfileDoc} from './firebase/firebase.utils.js'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user-action'
import {selectCurrentUser} from './redux/user/user-selector'
import {createStructuredSelector} from 'reselect'
import Checkout from './pages/checkout/Checkout'
import Collection from './pages/collection/Collection';



class App extends React.Component {
    //-----before redux----
  // constructor(){
  //   super()

  //   // this.state={
  //   //   currentUser : null
  //   // }

  // }

  unsubscribeFromAuth = null ;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      // console.log(user)
      if(userAuth){
        const userRef = await createUserProfileDoc(userAuth)
        // this.setState({ currentUser : userAuth })
        userRef.onSnapshot(snap=>{
          // console.log(snap.data())
          
          this.props.setCurrentUser({ 
            
              id: snap.id,
              ...snap.data()
             
          },()=>console.log(this.state.currentUser))
          // console.log(this.state.currentUser)
        })
      }else  this.props.setCurrentUser(userAuth)
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  
  render(){

    return (
      <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/shop/:collectionId' component={Collection}/>
      <Route exact path='/checkout' component={Checkout}/>
      <Route exact path='/signin' render={()=>this.props.currentUser ? (<Redirect to='/'/>): (<SignInAndSignUpPage/>)}/>
      {/* instead of component={SignInAndSignUpPage} we have used render */}
      </Switch>
      </div>
  );

  }
  }

// const mapStateToProps = ({user}) =>({
//       currentUser : user.currentUser
// })

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
      setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
