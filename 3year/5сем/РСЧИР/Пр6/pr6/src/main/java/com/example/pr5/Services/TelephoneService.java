package com.example.pr5.Services;

import com.example.pr5.Models.Telephone;
import com.example.pr5.Repos.TelephoneRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class TelephoneService {
    private final TelephoneRepo repo;

    public void create(Telephone Telephone) {
        repo.save(Telephone);
    }
    public List<Telephone> readAll() {
        return repo.findAll();
    }
    public Optional<Telephone> readOne(int id) {
        return repo.findById(id);
    }
    public boolean update(Telephone newTelephone, Integer id) {
        Optional<Telephone> optionalTelephone = repo.findById(id);
        if (optionalTelephone.isEmpty())
            return false;
        newTelephone.setId(id);
        repo.save(newTelephone);
        return true;
    }
    public boolean delete(Integer id) {
        Optional<Telephone> optionalTelephone = repo.findById(id);
        if (optionalTelephone.isEmpty())
            return false;
        repo.deleteById(id);
        return true;
    }
}
