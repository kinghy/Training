/**
 * Created by rjt on 17/3/27.
 */
import React, { Component } from 'react';

import {connect} from 'react-redux';
import {changeUserName} from '../../actions/user'
import './login.css';

class Login extends Component {
    constructor(props){
        super(props)
    }

    handleUserNameChanged(event){
        this.props.changeUserName(event.target.value);
    }
    render(){
        return(
            <div className="wrapper">
                <div className="topbanner">培训管理系统</div>
                <div><input value={this.props.username} onChange={this.handleUserNameChanged.bind(this)} placeholder="邮箱/手机号"/></div>
                <div><input type="password" placeholder="密码"/></div>
                <button>登录</button>
            </div>
        )
    }
}


function  select(store) {
    return {
        username: store.userStore.username,
    }
}

export default connect(select,{changeUserName})(Login)