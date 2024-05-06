package dev.assessment.summarized.data;

import dev.assessment.summarized.data.mappers.ChatMapper;
import dev.assessment.summarized.model.Chat;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ChatRepository {

    private final JdbcTemplate jdbcTemplate;
    public ChatRepository(JdbcTemplate jdbcTemplate){this.jdbcTemplate=jdbcTemplate;}


    public void add(String id, String originalText, String summarizedText) {
        String sql = "INSERT INTO User_History (user_id, originalText,summarizedText) VALUES (?, ?, ?)";
        jdbcTemplate.update(sql, id, originalText,summarizedText);
    }


    public List<Chat> findChatsByUserId(String userId) {
        String sql = "SELECT originalText, summarizedText, date FROM User_History WHERE user_id = ?";
        return jdbcTemplate.query(sql, new ChatMapper(), userId);
    }

    public void deleteChat(String userId, String date) {
        String sql = "DELETE FROM User_History WHERE user_id = ? AND date = ?";
        jdbcTemplate.update(sql, userId, date);
    }

}
