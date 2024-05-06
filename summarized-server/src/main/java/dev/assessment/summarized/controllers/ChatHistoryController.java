package dev.assessment.summarized.controllers;


import dev.assessment.summarized.model.Chat;
import dev.assessment.summarized.service.ChatHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ChatHistoryController {


    @Autowired
    private ChatHistoryService chatService;

    @PostMapping("/addHistory")
    public ResponseEntity<String> addHistory(@RequestParam("id") String id,
                                             @RequestParam("originalText") String originalText,
                                             @RequestParam("summarizedText") String summarizedText) {
        chatService.add(id, originalText, summarizedText);

        return ResponseEntity.ok("Added to chat history");
    }

    @GetMapping("/chats/{userId}")
    public ResponseEntity<List<Chat>> getChats(@PathVariable String userId) {
        List<Chat> chats = chatService.findChatsByUserId(userId);
        return ResponseEntity.ok(chats);
    }

    @DeleteMapping("/chats/{userId}/{date}")
    public ResponseEntity<String> deleteChat(@PathVariable String userId, @PathVariable String date) {
        chatService.deleteChat(userId, date);
        return ResponseEntity.ok("Chat deleted successfully");
    }


}
