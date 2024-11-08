package com.example.pr5.Services;

import com.example.pr5.Models.Client;
import com.example.pr5.Repos.ClientRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class ClientService {
    private final ClientRepo repo;

    public void create(Client Client) {
        repo.save(Client);
    }
    public List<Client> readAll() {
        return repo.findAll();
    }
    public Optional<Client> readOne(int id) {
        return repo.findById(id);
    }
    public boolean update(Client newClient, Integer id) {
        Optional<Client> optionalClient = repo.findById(id);
        if (optionalClient.isEmpty())
            return false;
        newClient.setId(id);
        repo.save(newClient);
        return true;
    }
    public boolean delete(Integer id) {
        Optional<Client> optionalClient = repo.findById(id);
        if (optionalClient.isEmpty())
            return false;
        repo.deleteById(id);
        return true;
    }
}
