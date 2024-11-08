package com.example.pr5.Repos;

import com.example.pr5.Models.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepo extends JpaRepository<Client, Integer> {
}
