package com.example.springapi.api.controller;

import com.example.springapi.api.model.User;
import com.example.springapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Logger;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

  private final UserService userService;
  private static final Logger logger = Logger.getLogger(UserController.class.getName());

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping
  public User getUser(@RequestParam Integer id) {
    logger.info("GET /api/v1/event");
    return userService.getUser(id);
  }

  @PostMapping("/users")
  @ResponseStatus(HttpStatus.CREATED)
  public ResponseEntity<User> createUser(@RequestBody User user) {
    logger.info("Received request to create user: " + user);
    User createdUser = userService.saveUser(user);
    return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
  }
}
