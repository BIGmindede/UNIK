package example.com.prakt6.view;

import example.com.prakt6.DTO.BookDTO;
import example.com.prakt6.model.Book;
import example.com.prakt6.model.Contact;
import example.com.prakt6.model.Product;

import java.util.ArrayList;
import java.util.List;

public class BookViewer {
    public static BookDTO createBookView(Book book, List<Contact> contactList, List<Product> productList){
        BookDTO result = new BookDTO();
        result.author = book.getAuthor();
        result.bookId = book.getId();
        result.productId = book.getProductId();
        result.sellerId = book.getSellerId();

        for (Contact contact : contactList){
            if (contact.getId().equals(book.getSellerId()))
                result.sellerName = contact.getName() + " " + contact.getLastname();
        }

        for (Product product : productList){
            if (product.getId().equals(book.getProductId())){
                result.name = product.getName();
                result.price = product.getPrice();
                result.type = product.getType();
            }
        }
        return result;
    }

    public static ArrayList<BookDTO> createBooksView(List<Book> bookList, List<Contact> contactList, List<Product> productList){
        ArrayList<BookDTO> result = new ArrayList<>();
        for (Book book : bookList){
            BookDTO subResult = createBookView(book, contactList, productList);
            result.add(subResult);
        }

        return result;
    }
}
