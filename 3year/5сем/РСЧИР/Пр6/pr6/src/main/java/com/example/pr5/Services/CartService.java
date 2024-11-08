package com.example.pr5.Services;

import com.example.pr5.Models.Cart;
import com.example.pr5.Models.ProductType;
import com.example.pr5.Repos.CartRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartService {
    private final CartRepo repo;

    public void create(Cart cartItem) {
        int prod_id = cartItem.getProductId();
        Optional<Cart> optionalCartItem = repo.findByProductId(prod_id);
        if (!optionalCartItem.isEmpty()) {
            int base_quantity = optionalCartItem.get().getQuantity();
            int incr_quantity = cartItem.getQuantity();
            String type = String.valueOf(cartItem.getProductType());
            optionalCartItem.get().setProductType(ProductType.valueOf(type));
            optionalCartItem.get().setQuantity(base_quantity + incr_quantity);
            repo.save(optionalCartItem.get());
        }
        else {
            repo.save(cartItem);
        }
    }
    public List<Cart> readAll() {
        return repo.findAll();
    }
    public Optional<Cart> readOne(int id) {
        return repo.findById(id);
    }

    public void update(Cart cartItem, Integer id) {
        Optional<Cart> optionalCartItem = repo.findById(id);
        if (!optionalCartItem.isEmpty()) {
            cartItem.setId(id);
            repo.save(cartItem);
        }
    }

    public void delete(Integer id) {
        repo.deleteById(id);
    }
}
