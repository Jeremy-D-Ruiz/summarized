package dev.assessment.summarized.data;

import dev.assessment.summarized.data.mappers.OriginalTextMapper;
import dev.assessment.summarized.data.mappers.SummarizedTextMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ChatRepository {

    private final JdbcTemplate jdbcTemplate;
    public ChatRepository(JdbcTemplate jdbcTemplate){this.jdbcTemplate=jdbcTemplate;}


    public void add(String id, String originalText, String summarizedText) {
        String sql = "INSERT INTO User_History (user_id, originalText,summarizedText) VALUES (?, ?, ?)";
        jdbcTemplate.update(sql, id, originalText,summarizedText);
    }


    public List<String> findOriginalTextsByUserId(String userId) {
        String sql = "SELECT originalText FROM User_History WHERE user_id = ?";
        return jdbcTemplate.query(sql, new OriginalTextMapper(), userId);
    }


    public List<String> findSummarizedTextsByUserId(String userId){
        List<String> summarizedTexts = new ArrayList<>();
        String sql = "Select summarizedText FROM " +
                "User_History where user_id =?;";
        summarizedTexts = jdbcTemplate.query(sql, new SummarizedTextMapper(), userId);
        return summarizedTexts;
    }

}
