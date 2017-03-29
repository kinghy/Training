/**
 * Created by rjt on 17/3/27.
 */
import React, { Component } from 'react';

import {connect} from 'react-redux';
import {changeUserName,login} from '../../actions/user'
import './login.css';

class Login extends Component {
    constructor(props){
        super(props)
    }

    handleUserNameChanged(event){
        this.props.changeUserName(event.target.value);
    }

    handleLoginClicked(event){
        if(this.username.value==""){
            alert("请填写用户名")
            this.username.focus()
            return
        }
        if(this.password.value==""){
            alert("请填写用户名")
            this.password.focus()
            return
        }
        this.props.login(this.username.value,this.password.value)
    }

    render(){
        return(
            <div className="wrapper">
                <div className="topbanner">培训管理系统</div>
                <div><input ref={(input) => this.username = input} value={this.props.username} onChange={this.handleUserNameChanged.bind(this)} placeholder="邮箱/手机号"/></div>
                <div><input ref={(input) => this.password = input} type="password" placeholder="密码"/></div>
                <button onClick={this.handleLoginClicked.bind(this)}>登录</button>
            </div>
        )
    }
}


function  select(store) {
    return {
        username: store.userStore.username,
    }
}

export default connect(select,{changeUserName,login})(Login)