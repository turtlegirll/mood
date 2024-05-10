package com.example.springapi.service;

import com.example.springapi.api.model.User;
import com.example.springapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  private final UserRepository userRepository;

  @Autowired
  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public User getUser(Integer id) {
    return userRepository.findById(id).orElse(null);
  }
  public User saveUser(User user){
    return userRepository.save(user);
  }
}
