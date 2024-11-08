package com.example.pr5.Models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "washing_machines")
public class WashingMachine {
    @Id
    @GeneratedValue
    private int id;
    private String name;
    @Enumerated(EnumType.STRING)
    private ProductType productType = ProductType.WASHING_MACHINE;
    private String vendor_name;
    private int tank_volume;
    private int seller_id;

}
