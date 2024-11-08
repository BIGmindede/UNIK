package com.example.pr5.Services;

import com.example.pr5.Models.WashingMachine;
import com.example.pr5.Repos.WashingMachineRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class WashingMachineService {
    private final WashingMachineRepo repo;

    public void create(WashingMachine WashingMachine) {
        repo.save(WashingMachine);
    }
    public List<WashingMachine> readAll() {
        return repo.findAll();
    }
    public Optional<WashingMachine> readOne(int id) {
        return repo.findById(id);
    }
    public boolean update(WashingMachine newWashingMachine, Integer id) {
        Optional<WashingMachine> optionalWashingMachine = repo.findById(id);
        if (optionalWashingMachine.isEmpty())
            return false;
        newWashingMachine.setId(id);
        repo.save(newWashingMachine);
        return true;
    }
    public boolean delete(Integer id) {
        Optional<WashingMachine> optionalWashingMachine = repo.findById(id);
        if (optionalWashingMachine.isEmpty())
            return false;
        repo.deleteById(id);
        return true;
    }
}
