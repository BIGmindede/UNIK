package com.example.pr5.Controllers;

import com.example.pr5.Models.WashingMachine;
import com.example.pr5.Services.WashingMachineService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
@RequestMapping("/washing_machines")
public class WashingMachineController {
    private final WashingMachineService service;
    @GetMapping
    public ResponseEntity<List<WashingMachine>> readAll() {
        return ResponseEntity.ok(service.readAll());
    }
    @GetMapping("/{id}")
    public ResponseEntity<WashingMachine> read(@PathVariable("id") int id) {
        Optional<WashingMachine> optionalWashingMachine = service.readOne(id);
        return optionalWashingMachine.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
    @PostMapping(consumes = ("application/json"))
    public ResponseEntity<Void> createEntity(@RequestBody WashingMachine book) {
        service.create(book);
        return ResponseEntity.created(null).build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Integer id, @RequestBody WashingMachine book) {
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
