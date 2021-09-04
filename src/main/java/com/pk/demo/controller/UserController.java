package com.pk.demo.controller;

import com.pk.demo.dao.UserDao;
import com.pk.demo.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;

@Controller
public class UserController {
    @RequestMapping("/")
    public String index(){
        return "index";
    }
    @RequestMapping("/OrgStru.html")
    public String orgStru(){
        return "OrgStru";
    }
    @RequestMapping("/addEmpl.html")
    public String add(){
        return "addEmpl";
    }
    @RequestMapping("editEmpl.html")
    public String edit(String id, Model model){
        User user = userDao.getById(id);
        model.addAttribute("user",user);
        return "editEmpl";
    }
    @Autowired
    UserDao userDao;

    @RequestMapping("/add")
    @ResponseBody
    public int add(User user){
        System.out.println(user);
        int i = userDao.addEmpl(user);
        return i;
    }

    @PostMapping("/delete")
    @ResponseBody
    public Integer delete(String id){
        System.out.println("ID"+id);
        Integer delete = userDao.delete(id);
        return delete;
    }

    @GetMapping("/findAll")
    @ResponseBody
    public List<User> findAll(){
        List<User> users = userDao.selectEmployees();
        return users;
    }

    /*多条件查寻*/
    @GetMapping("find")
    @ResponseBody
    public List<User> find(User user,Integer smallAge,Integer bigAge){
        HashMap<String, Object> map = new HashMap<>();
        map.put("name",user.getName());
        map.put("sex",user.getSex());
        map.put("phone",user.getPhone());
        map.put("depart",user.getDepart());
        map.put("ent_time",user.getEnt_time());

        map.put("smallAge",smallAge);
        map.put("bigAge",bigAge);
        return userDao.condition(map);
    }


    @PostMapping("/edit")
    @ResponseBody
    public int edit(User user){
        Integer res=userDao.update(user);
        System.out.println(res);
        return res;
    }
}
