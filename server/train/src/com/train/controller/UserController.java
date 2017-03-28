package com.train.controller;

import com.train.service.UserService;
import com.train.vo.UserVO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

/**
 * Created by kinghy on 2017/3/22.
 */
@Controller
@CrossOrigin(origins = "*", maxAge = 3600)//设置跨域访问
public class UserController {
    @Resource(name="userService")
    private UserService service;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public UserVO saveUser(@RequestBody UserVO user) {
        System.out.println(user);
        UserVO retEntity = service.login(user.getUsername(), user.getPassword());
        return retEntity;
    }

    @RequestMapping(value = "/login2", method = RequestMethod.POST)
    public UserVO saveUser2( HttpServletRequest request) {
        System.out.println(request);
        return null;
    }
}


//
//
//    @ResponseBody
//    @RequestMapping(value="/register",method = RequestMethod.POST)
//    public LoginEntity register(@RequestBody UserVO user){
//
//        LoginEntity retEntity = service.addUser(user.getEmail(), user.getPwd(), user.getFullname(), user.getQq(), null);
//        return retEntity;
//    }
//
//    @ResponseBody
//    @RequestMapping(value="/modifyqq",method = RequestMethod.POST)
//    public ReturnEntity register(@RequestHeader("let_come_uid") String  uid,
//                                 @RequestBody UserVO user){
//        ReturnEntity retEntity = service.modifyQQ(Integer.valueOf(uid), user.getQq());
//        return retEntity;
//    }
//
//
//
//    @RequestMapping(value = "/sso", method = RequestMethod.GET)
//    @ResponseBody
//    public LoginEntity sso(@RequestParam("openid") String  openid,@RequestParam("accesstoken") String accesstoken) {
//        LoginEntity retEntity = service.sso(openid,accesstoken);
//        return retEntity;
//    }
//
//    @ResponseBody
//    @RequestMapping(value="/remove",method = RequestMethod.POST)
//    public ReturnEntity remove(
//            @RequestParam("uid") String uid){
//        ReturnEntity retEntity = service.removeUser(uid);
//        return retEntity;
//    }
//
//}
