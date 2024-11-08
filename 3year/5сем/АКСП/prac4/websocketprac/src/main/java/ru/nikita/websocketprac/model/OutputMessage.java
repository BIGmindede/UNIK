package ru.nikita.websocketprac.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class OutputMessage {
    private final String from;
    private final String text;
    private final String time;
}

