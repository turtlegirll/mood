package com.example.springapi.service;

import com.example.springapi.api.controller.UserController;
import com.example.springapi.api.model.User;
import com.example.springapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.logging.Logger;

@Service
public class UserService {

  private final UserRepository userRepository;

  private static final Logger logger = Logger.getLogger(UserController.class.getName());

  @Autowired
  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public User getUser(Integer id) {
    logger.info("Service: Retrieving user from database with id: " + id);

    return userRepository.findById(id).orElse(null);
  }
  public User saveUser(User user){
    logger.info("Service: Saving user to database: " + user);
    return userRepository.save(user);
  }
}
