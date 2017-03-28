package com.springapp.mvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.train.vo.EntityVO;
import com.train.vo.UserVO;
import org.junit.*;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static org.hamcrest.Matchers.greaterThan;
import static org.junit.Assert.assertThat;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

/**
 * Created by rjt on 17/3/28.
 */

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(locations = {"file:web/WEB-INF/dispatcher-servlet.xml","classpath:spring-bean.xml" ,"classpath:spring-hibernate.xml"} )
@Transactional
@TransactionConfiguration(transactionManager = "transactionManager", defaultRollback = false)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)//按照字母升序顺序执行测试方法
public class LoginTests {

    static String username ;
    static String pwd;

    private MockMvc mockMvc;

    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    protected WebApplicationContext wac;

    @Before
    public void setup() {
        this.mockMvc = webAppContextSetup(this.wac).build();
    }
    @BeforeClass
    public static void initParam(){
        pwd = "123456";
        username = "admin";
    }
    @Test
    public void test_B_Login() throws Exception {
        //登录测试
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.post("/login");
        requestBuilder.header("Content-Type", "application/json");

        Map<String,String> param = new HashMap<String,String>();
        param.put("username", username);
        param.put("password", pwd);

        ObjectMapper pMapper = new ObjectMapper();
        String pStr = pMapper.writeValueAsString(param);

        requestBuilder.content(pStr);

        MvcResult result = mockMvc.perform(requestBuilder).andReturn();

        String str = result.getResponse().getContentAsString();
        ObjectMapper mapper = new ObjectMapper();

        UserVO l2 = mapper.readValue(str, UserVO.class);
        Assert.assertEquals(l2.getResult(), EntityVO.RETURN_SUCCESS);

        assertThat(Long.valueOf(l2.getId()), greaterThan(0l));
    }
}
