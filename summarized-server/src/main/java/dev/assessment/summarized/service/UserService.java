package dev.assessment.summarized.service;

import dev.assessment.summarized.data.UserRepository;
import dev.assessment.summarized.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {


    @Autowired
    private UserRepository repository;

    public void addUser(User user) {
        repository.add(user);
    }
}
