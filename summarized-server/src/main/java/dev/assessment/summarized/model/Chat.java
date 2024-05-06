package dev.assessment.summarized.model;
import java.time.LocalDateTime;

public class Chat {

    private String originalText;
    private String summarizedText;
    private LocalDateTime date;

    public Chat(String originalText, String summarizedText, LocalDateTime date) {
        this.originalText = originalText;
        this.summarizedText = summarizedText;
        this.date = date;
    }

    public Chat() {

    }

    public String getOriginalText() {
        return originalText;
    }

    public void setOriginalText(String originalText) {
        this.originalText = originalText;
    }

    public String getSummarizedText() {
        return summarizedText;
    }

    public void setSummarizedText(String summarizedText) {
        this.summarizedText = summarizedText;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}
