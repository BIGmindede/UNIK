package com.example.pr5.Services;

import com.example.pr5.Models.Book;
import com.example.pr5.Repos.BookRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BookService {
    private final BookRepo repo;

    public void create(Book book) {
        repo.save(book);
    }
    public List<Book> readAll() {
        return repo.findAll();
    }
    public Optional<Book> readOne(int id) {
        return repo.findById(id);
    }
    public void update(Book newBook, Integer id) {
        newBook.setId(id);
        repo.save(newBook);
    }
    public void delete(Integer id) {
        repo.deleteById(id);
    }
}
