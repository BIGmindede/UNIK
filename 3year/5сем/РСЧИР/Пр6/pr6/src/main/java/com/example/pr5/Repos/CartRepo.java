package com.example.pr5.Repos;

import com.example.pr5.Models.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CartRepo extends JpaRepository<Cart, Integer> {
    Optional<Cart> findByProductId(int productId);
}
