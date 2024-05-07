package dev.assessment.summarized.controllers;


import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.ai.openai.OpenAiChatClient;
import org.springframework.web.bind.annotation.*;
import java.util.Map;


@RestController
@CrossOrigin(origins = {"http://localhost:5173", "chrome-extension://${CHROME_ID}"})
public class ChatController {
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

    @PostMapping("/summarize-code")
    public String getSummarizedCode(@RequestBody String code) {
        // Construct prompt template
        String message = """
            You are a code summarization tool.
            Please summarize the provided code snippet.
            First tell the user what language the code is in, what tools,frameworks,or other technology the code
            appears to be using. Then summarize what the code is doing. If no code is given respond with - "I am a code summary tool
            please enter code to continue."
            Code snippet: {code}
            """;
        PromptTemplate promptTemplate = new PromptTemplate(message);
        Prompt prompt = promptTemplate.create(Map.of("code", code));

        return chatClient.call(prompt).getResult().getOutput().getContent();
    }



}
