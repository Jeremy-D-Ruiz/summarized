package dev.assessment.summarized.data;

import dev.assessment.summarized.model.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ChatRepository {

    private final JdbcTemplate jdbcTemplate;
    public ChatRepository(JdbcTemplate jdbcTemplate){this.jdbcTemplate=jdbcTemplate;}


    public void add(String id, String originalText, String summarizedText) {
        String sql = "INSERT INTO User_History (user_id, originalText,summarizedText) VALUES (?, ?, ?)";
        jdbcTemplate.update(sql, id, originalText,summarizedText);
    }
}
