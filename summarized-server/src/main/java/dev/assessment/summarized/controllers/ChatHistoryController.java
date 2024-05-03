package dev.assessment.summarized.controllers;


import dev.assessment.summarized.model.User;
import dev.assessment.summarized.service.ChatHistoryService;
import dev.assessment.summarized.service.UserService;
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

    @GetMapping("/original-texts/{userId}")
    public ResponseEntity<List<String>> getOriginalTexts(@PathVariable String userId) {
        List<String> originalTexts = chatService.findOriginalTexts(userId);
        return ResponseEntity.ok(originalTexts);
    }

    @GetMapping("/summarized-texts/{userId}")
    public ResponseEntity<List<String>> getSummarizedTexts(@PathVariable String userId) {
        List<String> summarizedTexts = chatService.findSummarizedTexts(userId);
        return ResponseEntity.ok(summarizedTexts);
    }




}
