package dev.assessment.summarized.controllers;


import org.springframework.ai.chat.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class ChatController {

    private final ChatClient chatClient;

    public ChatController(ChatClient chatClient) {
        this.chatClient = chatClient;
    }

    @GetMapping("/summarized")
    public Map<String, String> getSummarizedText(@RequestParam(value = "text", defaultValue = "No Text Given") String text) {
        // If no text is given, respond accordingly
        if ("No Text Given".equals(text)) {
            return Map.of("summarizedText", "Please enter text to summarize.");
        }
        String message = """
           Summarize this text. Limit your response to only the minimum required or 100 words.
           Focus on key concepts and their broader context.
           """;
        PromptTemplate promptTemplate = new PromptTemplate(message);
        Prompt prompt = promptTemplate.create(Map.of("text", text));
        String summarizedText = chatClient.call(prompt).getResult().getOutput().getContent();
        return Map.of("summarizedText", summarizedText);
    }

}
