package dev.assessment.summarized.service;

import dev.assessment.summarized.data.ChatRepository;
import dev.assessment.summarized.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatHistoryService {

    @Autowired
    private  ChatRepository  chatRepository;
    public void add(String id, String originalText, String summarizedText) {
        chatRepository.add(id,originalText,summarizedText);
    }

    public List<String> findOriginalTexts(String userId) {
        return chatRepository.findOriginalTextsByUserId(userId);
    }

    public List<String> findSummarizedTexts(String userId) {
        return chatRepository.findSummarizedTextsByUserId(userId);
    }
}
