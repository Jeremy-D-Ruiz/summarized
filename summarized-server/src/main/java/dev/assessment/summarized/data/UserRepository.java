package dev.assessment.summarized.data;

import dev.assessment.summarized.model.User;

import java.util.HashMap;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {
    private final JdbcTemplate jdbcTemplate;
    public UserRepository(JdbcTemplate jdbcTemplate){this.jdbcTemplate=jdbcTemplate;}


    public void add(User user) {
        String sql = "INSERT INTO User (user_id, displayName) VALUES (?, ?)";
        jdbcTemplate.update(sql, user.getId(), user.getDisplayName());
    }
}
