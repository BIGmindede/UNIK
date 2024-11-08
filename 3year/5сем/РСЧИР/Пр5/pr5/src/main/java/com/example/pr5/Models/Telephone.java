package com.example.pr5.Models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "telephones")
public class Telephone {
    @Id
    @GeneratedValue
    private int id;
    private String name;
    @Enumerated(EnumType.STRING)
    private ProductType productType = ProductType.TELEPHONE;
    private String vendor_name;
    private int battery_capacity;
    private int seller_id;
    private int price;

}
