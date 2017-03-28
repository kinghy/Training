package com.train.dao;
import java.util.Date;
import java.util.List;


import com.train.vo.UserVO;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.loader.custom.Return;

/**
 * Created by rjt on 16/8/10.
 */
public class UsersDAO  extends BaseDAO{

    public UserVO getUser(UserVO vo){
        Session session = sessionFactory.getCurrentSession();
        String hql = "from users where username = :username";
        Query query = session.createQuery(hql);
        query.setProperties(vo);
        List<UserVO> list = query.list();
        if (list!=null && list.size()>0){
            return list.get(0);
        }else{
            return null;
        }
    }

}
