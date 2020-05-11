package com.oeco.controllers;

import com.oeco.controllers.dto.auth.UserDTO;
import com.oeco.controllers.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/v1/api/user-controller/")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("signUpUser")
    public UserDTO signUpUser(@RequestBody UserDTO userDTO) {
        return userRepository.save(userDTO);
    }
}
