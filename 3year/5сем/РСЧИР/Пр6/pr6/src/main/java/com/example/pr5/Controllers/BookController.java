package com.example.pr5.Controllers;

import com.example.pr5.Models.Book;
import com.example.pr5.Services.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/books")
public class BookController {
    private final BookService service;

    @GetMapping
    public ResponseEntity<List<Book>> readAll() {
        return ResponseEntity.ok(service.readAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> read(@PathVariable("id") int id) {
        var optionalBook = service.readOne(id);
        return optionalBook.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping()
    public void createEntity(@RequestBody Book book) {
        service.create(book);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable("id") Integer id, @RequestBody Book book) {
        service.update(book, id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        service.delete(id);
    }
}
