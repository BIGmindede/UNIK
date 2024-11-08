package ru.nikita.websocketprac.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import ru.nikita.websocketprac.model.Message;
import ru.nikita.websocketprac.model.OutputMessage;

import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
@RequestMapping("/")
public class WebsController {

    @GetMapping("/")
    @ResponseBody
    public String index() {
        return "Для подписки на топик перейдите по эндпоинту /webs";
    }

    @GetMapping("/webs")
    public ModelAndView webs() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("webs.html");
        return modelAndView;
    }

    @MessageMapping("/webs")
    @SendTo("/topic/messages")
    public OutputMessage send(Message message) {
        String time = new SimpleDateFormat("HH:mm").format(new Date());
        return new OutputMessage(message.getFrom(), message.getText(), time);
    }
}

