package com.example.pr5.Controllers;

import com.example.pr5.Models.Client;
import com.example.pr5.Models.Telephone;
import com.example.pr5.Services.ClientService;
import com.example.pr5.Services.TelephoneService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@Controller
@RequiredArgsConstructor
@RequestMapping("/telephones")
public class TelephoneController {
    private final TelephoneService service;
    @GetMapping
    public ResponseEntity<List<Telephone>> readAll() {
        return ResponseEntity.ok(service.readAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Telephone> read(@PathVariable("id") int id) {
        Optional<Telephone> optionalTelephone = service.readOne(id);
        return optionalTelephone.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
    @PostMapping(consumes = ("application/json"))
    public ResponseEntity<Void> createEntity(@RequestBody Telephone book) {
        service.create(book);
        return ResponseEntity.created(null).build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Integer id, @RequestBody Telephone book) {
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
