package com.example.pr5.Controllers;

import com.example.pr5.Models.Client;
import com.example.pr5.Services.ClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
@RequestMapping("/clients")
public class ClientController {
    private final ClientService service;
    @GetMapping
    public ResponseEntity<List<Client>> readAll() {
        return ResponseEntity.ok(service.readAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Client> read(@PathVariable("id") int id) {
        Optional<Client> optionalClient = service.readOne(id);
        return optionalClient.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
    @PostMapping(consumes = ("application/json"))
    public ResponseEntity<Void> createEntity(@RequestBody Client book) {
        service.create(book);
        return ResponseEntity.created(null).build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Integer id, @RequestBody Client book) {
        if (service.update(book, id))
            return ResponseEntity.ok().build();
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) {
        if (service.delete(id))
            return ResponseEntity.ok().build();
        return ResponseEntity.notFound().build();
    }
}
