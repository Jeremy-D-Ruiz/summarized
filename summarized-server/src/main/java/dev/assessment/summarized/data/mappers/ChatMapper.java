package dev.assessment.summarized.data.mappers;

import dev.assessment.summarized.model.Chat;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Stack;

public class ChatMapper implements RowMapper<Chat> {

    @Override
    public Chat mapRow(ResultSet resultSet, int rowNum) throws SQLException {
        Chat chat = new Chat();
        chat.setOriginalText(resultSet.getString("originalText"));
        chat.setSummarizedText(resultSet.getString("summarizedText"));
        java.sql.Timestamp timestamp = resultSet.getTimestamp("date");

        if (timestamp != null) {
            chat.setDate(timestamp.toLocalDateTime());
        }
        return chat;
    }


}
