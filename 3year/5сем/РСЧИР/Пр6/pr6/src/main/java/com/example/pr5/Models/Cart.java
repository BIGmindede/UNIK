package com.example.pr5.Models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "cart_items")
public class Cart {
    @Id
    @GeneratedValue
    private int id;
    private int productId;
    private String name;
    @Enumerated(EnumType.STRING)
    private ProductType productType;
    private int price;
    private int quantity;
}
