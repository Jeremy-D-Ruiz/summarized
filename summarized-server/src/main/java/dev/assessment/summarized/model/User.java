package dev.assessment.summarized.model;

import java.util.List;

public class User {

    String id;
    String displayName;
    List<String> originalTexts;
    List<String> summarizedTexts;

    public User(String id, String displayName, List<String> originalTexts, List<String> summarizedTexts) {
        this.id = id;
        this.displayName = displayName;
        this.originalTexts = originalTexts;
        this.summarizedTexts = summarizedTexts;
    }

    public List<String> getOriginalTexts() {
        return originalTexts;
    }

    public void setOriginalTexts(List<String> originalTexts) {
        this.originalTexts = originalTexts;
    }

    public List<String> getSummarizedTexts() {
        return summarizedTexts;
    }

    public void setSummarizedTexts(List<String> summarizedTexts) {
        this.summarizedTexts = summarizedTexts;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public User(String id, String displayName) {
        this.id = id;
        this.displayName = displayName;
    }

    //also tracking passwords - every user has admin position/can update/create/view/delete history
}
