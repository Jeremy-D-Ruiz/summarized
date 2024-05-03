package dev.assessment.summarized.controllers;


import org.apache.catalina.User;
import org.springframework.ai.chat.ChatClient;
import org.springframework.ai.chat.Generation;
import org.springframework.ai.chat.messages.Message;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.ai.chat.prompt.SystemPromptTemplate;
import org.springframework.ai.openai.OpenAiChatClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ChatController {

    //create put to add chats to database
    //create put to add summarized chats to database


    private final OpenAiChatClient chatClient;

    public ChatController(OpenAiChatClient chatClient) {
        this.chatClient = chatClient;
    }


    @GetMapping("/summarized")
    public String getSummarizedText(@RequestParam(value = "text", defaultValue = "No Text Given") String text) {

        String message = """
                You are a summarization tool designed to simplify difficult text.
                Your response should never be longer than the given text.
                Focus on key concepts and their broader context.
                Limit your response to 25% of the original text or 100 words, whichever is less.
                Text to summarize: {text}
                """;

        PromptTemplate promptTemplate = new PromptTemplate(message);
        Prompt prompt = promptTemplate.create(Map.of("text", text));

        return chatClient.call(prompt).getResult().getOutput().getContent();
    }

    @GetMapping("/keyconcepts")
    public String getKeyConcepts(@RequestParam(value = "text", defaultValue = "No Text Given") String text) {

        String message = """
                You are a summarization tool designed to simplify difficult text.
                Your response should never be longer than the given text.
                Focus on key concepts and their broader context.
                Give me a list of the top three concepts.
                Text to summarize: {text}
                """;

        PromptTemplate promptTemplate = new PromptTemplate(message);
        Prompt prompt = promptTemplate.create(Map.of("text", text));

        return chatClient.call(prompt).getResult().getOutput().getContent();
    }

    @GetMapping("/likeimfive")
    public String likeImFive(@RequestParam(value = "text", defaultValue = "No Text Given") String text) {

        String message = """
                You are a summarization tool designed to simplify difficult text.
                Your response should never be longer than the given text.
                Focus on key concepts and their broader context.
                Explain these concepts to me like im five.
                Text to summarize: {text}
                """;

        PromptTemplate promptTemplate = new PromptTemplate(message);
        Prompt prompt = promptTemplate.create(Map.of("text", text));

        return chatClient.call(prompt).getResult().getOutput().getContent();
    }



}
