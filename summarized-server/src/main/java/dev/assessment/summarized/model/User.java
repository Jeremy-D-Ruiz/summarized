package dev.assessment.summarized.model;

import java.util.List;

public class User {

    String id;
    String displayName;
    List<Chat> chats;


    public User(String id, String displayName, List<Chat> chats) {
        this.id = id;
        this.displayName = displayName;
        this.chats=chats;
    }

    public User() {

    }

    public List<Chat> getChats() {
        return chats;
    }

    public void setChats(List<Chat> chats) {
        this.chats = chats;
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
