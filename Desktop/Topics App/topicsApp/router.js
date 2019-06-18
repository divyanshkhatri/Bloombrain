import React, {Component} from 'react';
import { Router, Scene } from 'react-native-router-flux'; 

import Form from './src/components/Form';
import LoggedIn from './src/components/Loggedin';
import Details from './src/components/Details';

class RouterComponent extends Component {

    render(){
        return(
            <Router {...sceneConfig}>
                <Scene key = "Root" hideNavBar>
                    <Scene key = "auth">
                        <Scene key = "Login" left={()=>null} component = {Form} title = "" navTransparent/>
                        <Scene key = "LoggedIn" left={()=>null} navBarButtonColor = 'white' component = {LoggedIn} title = "" hideNavBar/>
                        <Scene key = "Details" left={()=>null} navBarButtonColor = 'white' component = {Details} title = "" hideNavBar/>
                    </Scene>
                </Scene>
            </Router>
        )
    }

}
var sceneConfig = {
    cardStyle: {
      backgroundColor: 'white'
    }
}


export default RouterComponent;
