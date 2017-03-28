package com.train.vo;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by rjt on 16/8/10.
 */

@Entity(name="users")
public class UserVO extends EntityVO{

    public UserVO(){
        super();
    }

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name="id")
    private Integer id;

    @Column(name="firstname",length=16,nullable = false)
    private String firstname;

    @Column(name="lastname",length=16,nullable = false)
    private String lastname;

    @Column(name="companyid",nullable = true)
    private String companyid;

    @Column(name="username",length=100,nullable = false)
    private String username;

    @Column(name="password",length=50,nullable = false)
    private String password;

    @Column(name="roll",length=50,nullable = false)
    private String roll;

    @Column(name="note",length=100,nullable = true)
    private String note;

    @Column(name="creattime",nullable = true)
    private long creattime;

    @Column(name="lasetupdatetime",nullable = true)
    private long lasetupdatetime;

//    @Transient
//    private Integer access_token;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getCompanyid() {
        return companyid;
    }

    public void setCompanyid(String companyid) {
        this.companyid = companyid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRoll() {
        return roll;
    }

    public void setRoll(String roll) {
        this.roll = roll;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public long getCreattime() {
        return creattime;
    }

    public void setCreattime(long creattime) {
        this.creattime = creattime;
    }

    public long getLasetupdatetime() {
        return lasetupdatetime;
    }

    public void setLasetupdatetime(long lasetupdatetime) {
        this.lasetupdatetime = lasetupdatetime;
    }
}