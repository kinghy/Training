package com.train.service;

import com.fasterxml.jackson.databind.util.JSONPObject;

import com.train.dao.UsersDAO;
import com.train.vo.EntityVO;
import com.train.vo.UserVO;
import org.springframework.transaction.annotation.Transactional;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Date;
import java.util.Map;

/**
 * Created by rjt on 16/8/10.
 */
@Transactional
public class UserService {
    private UsersDAO userDao;

    static private String DES_KEY = "www.letcome.com";


    public UsersDAO getUserDao() {
        return userDao;
    }

    public void setUserDao(UsersDAO userDao) {
        this.userDao = userDao;
    }


    public UserVO login(String username,String pwd){
        UserVO user = new UserVO();
        user.setUsername(username);
        UserVO ret = userDao.getUser(user);
        if(ret==null || !ret.getUsername().equals(username) || !ret.getPassword().equals(pwd)){
            ret = new UserVO();
            ret.setResult(EntityVO.RETURN_FAILED);
            ret.setErrorCode("110006");
            ret.setErrorMsg("用户名或密码错误");
        }
        return ret;
    }



}