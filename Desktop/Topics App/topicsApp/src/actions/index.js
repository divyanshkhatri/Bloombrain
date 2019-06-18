import axios from 'axios';
import { Actions }  from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

export const login = (email,password) => { 

    let user  = {email,password};
    user = JSON.stringify(user);
    return((dispatch) => {
      axios.post('https://test-bcp.codepark.in/auth/verifyUser',user, {headers: {'Content-Type' : 'application/json'}})
      .then((res) => {
        dispatch({type:'loginData', payload:res.data.cookies.CP})
        AsyncStorage.setItem('token', res.data.cookies.CP)
        Actions.LoggedIn({user: res.data.userData});
      }) 
    })
  }

export const details = (token) => {

    const Token = token.token;
    const headerParams = { 
    'Authorization': "Bearer " + Token,
    'Content-Type': 'application/json'
    }
    var config = {
    headers: headerParams
    }
    return((dispatch) => {
    axios.get('https://test-bcp.codepark.in/topic/mod/dashboard?node=0&sub=all&order=-1', config )
        .then((response) => {
        console.log(Token, config)
        dispatch( { type: 'apiCallDashboard', payload: response.data } )
        console.log(response.data)
        })
    })
}

export const textChange = (name, can_accept, uid, token, description, avatar) => {

    const headerParams = {
      'Authorization': "Bearer " + token,
      'Content-Type': 'application/json'
    } 
    return( (dispatch) => {
      var config = {
        headers: headerParams
      };
      console.log(token)
      var params = {};
      params.uid = uid
      params.name = name
      params.description = description
      params.avatar = avatar
      params.acceptSubscription = can_accept
  
      axios.post('https://test-bcp.codepark.in/topic/mod/update', params, config)
        .then((response) => {
          console.log(response)
          dispatch({ type: 'textChanged', payload: response.data})
          })
        .catch(error => {
          console.log(error.response)
        })
    } )
  
  }