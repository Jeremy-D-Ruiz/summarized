package dev.assessment.summarized.data.mappers;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

public class SummarizedTextMapper implements RowMapper<String> {

    @Override
    public String mapRow(ResultSet resultSet, int rowNum) throws SQLException {
        return resultSet.getString("summarizedText");
    }
}