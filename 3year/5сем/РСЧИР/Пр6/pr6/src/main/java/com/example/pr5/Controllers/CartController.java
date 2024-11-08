package com.example.pr5.Controllers;

import com.example.pr5.Models.Cart;
import com.example.pr5.Services.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/cart")
public class CartController {
    private final CartService service;

    @GetMapping
    public ResponseEntity<List<Cart>> readAll() {
        return ResponseEntity.ok(service.readAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cart> read(@PathVariable("id") int id) {
        var optionalCart = service.readOne(id);
        return optionalCart.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping()
    public void createEntity(@RequestBody Cart cartItem) {
        service.create(cartItem);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable("id") Integer id, @RequestBody Cart cartItem) {
        service.update(cartItem, id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        service.delete(id);
    }
}
