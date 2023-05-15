package com.example.demo.service;

import com.example.demo.dto.ProductDTO;
import com.example.demo.model.Product;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {
    List<Product> showList();

    Product findById(long id);
    Product updateProduct(Product product);

    void addProduct(ProductDTO productDTO);

    Product deleteProduct(long id);

    List<Product> findProductByName(Pageable pageable, String name);
}
