package com.example.pr5.Models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String author_name;
    private int seller_id;
    @Enumerated(EnumType.STRING)
    private ProductType productType = ProductType.BOOK;
    private int price;

}
