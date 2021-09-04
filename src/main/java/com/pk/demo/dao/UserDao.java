package com.pk.demo.dao;


import com.pk.demo.entity.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

/**
 * 接口操作表
 */
@Mapper
public interface UserDao {
    //查询soft_dev表的所有数据
    public List<User> selectEmployees();

    /*
     * 向soft_dev表插入数据
     * 参数：Soft_Dev，表示要插入到数据库的数据
     * 返回值：insertDate，表示执行insert操作后影响数据库的行数
     */
    public int addEmpl(User insertData);

    public Integer delete(String id);

    public User getById(String id);

    Integer update(User user);

    List<User> condition(Map<String,Object> map);
}
