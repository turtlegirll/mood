package com.example.springapi.api.controller;

import com.example.springapi.api.model.User;
import com.example.springapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private UserService userService;
    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }
    /*
    @GetMapping
    public User getUser(@RequestParam Integer id){
        return userService.getUser(id);
    }

     */
}
