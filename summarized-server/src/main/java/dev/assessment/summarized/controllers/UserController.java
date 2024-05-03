package dev.assessment.summarized.controllers;

import dev.assessment.summarized.model.User;
import dev.assessment.summarized.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    //create put/get - cannot update user info so no need for push/delete
    @Autowired
    private UserService userService;

    @PostMapping("/new-user")
    public ResponseEntity<String> createUser(@RequestBody User user) {
        userService.addUser(user);
        return ResponseEntity.ok("User created successfully");
    }
}
