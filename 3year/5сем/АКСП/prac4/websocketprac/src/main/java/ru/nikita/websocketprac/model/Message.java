package ru.nikita.websocketprac.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Message {
    private String from;
    private String text;
}
