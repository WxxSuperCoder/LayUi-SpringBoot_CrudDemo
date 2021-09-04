package com.pk.demo.entity;

/**
 * 实体类
 * 推荐和表名一致
 */
public class User {
    //定义属性:推荐和字段名一致
    private Integer id;
    private String name;
    private String sex;
    private String age;
    private String phone;
    private String depart;
    private String ent_time;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getDepart() {
        return depart;
    }

    public void setDepart(String depart) {
        this.depart = depart;
    }

    public String getEnt_time() {
        return ent_time;
    }

    public void setEnt_time(String ent_time) {
        this.ent_time = ent_time;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", sex='" + sex + '\'' +
                ", age='" + age + '\'' +
                ", phone='" + phone + '\'' +
                ", depart='" + depart + '\'' +
                ", ent_time='" + ent_time + '\'' +
                '}';
    }
}



