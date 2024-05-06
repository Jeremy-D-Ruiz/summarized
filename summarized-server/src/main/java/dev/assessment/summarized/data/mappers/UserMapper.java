package dev.assessment.summarized.data.mappers;

import dev.assessment.summarized.data.ChatRepository;
import dev.assessment.summarized.model.Chat;
import dev.assessment.summarized.model.User;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;


public class UserMapper implements RowMapper<User> {
     private ChatRepository chatRepository;
    @Override
    public User mapRow(ResultSet resultSet, int i) throws SQLException {
        User user = new User();
        user.setId(resultSet.getString("user_id"));
        user.setDisplayName(resultSet.getString("displayName"));

        List<Chat> allChats = chatRepository.findChatsByUserId(user.getId());
        user.setChats(allChats);

        return user;
    }


}
