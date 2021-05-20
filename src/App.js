// import logo from './logo.svg';
import './App.css';
import {Route,Switch,Link,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import Homepage from './page/homepage/homepage.component';
import SignInAndSignOut from './page/sign-in-and-sign-out/sign-in-and-sign-out.component';
import Header from './component/header/header.component';
import AlbumItemInfo from './component/album-item-info/album-item-info.component';
import Listpage from './page/listpage/listpage.component';

const App = ({signedIn}) => {
  return (
    <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' render={()=>!signedIn ? (<Redirect to='/signin'/>):(<Homepage/>)}/>
          <Route exact path='/list' render={()=>!signedIn ? (<Redirect to='/signin'/>):(<Listpage/>)}/>
          <Route exact path='/signin' render={()=>signedIn ? (<Redirect to='/'/>):(<SignInAndSignOut/>)}/>
          {
            signedIn ? (
              <Route exact path='/detail/:id' component= {AlbumItemInfo}/>
            ) : (
              <Redirect to='/signin'></Redirect>
            )
          }
          
        </Switch>
        {/* <Homepage/> */}

    </div>
  );
}

const mapStateToProps = state => ({
  signedIn : state.signin.signIn
});

export default connect(mapStateToProps)(App);
