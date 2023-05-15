package com.example.demo.service.impl;

import com.example.demo.dto.ProductDTO;
import com.example.demo.model.Product;
import com.example.demo.repository.IProductRepository;
import com.example.demo.repository.IProductTypeRepository;
import com.example.demo.service.IProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;
    @Autowired
    private IProductTypeRepository productTypeRepository;
    @Override
    public List<Product> showList() {
        return productRepository.showList();
    }

    @Override
    public Product findById(long id) {
        return productRepository.findById(id);
    }

    @Override
    public Product updateProduct(Product product) {
//        Product product = new Product();
//        BeanUtils.copyProperties(productDTO, product);
//        productRepository.updateProduct(product.getCode(),
//                product.getDate(),
//                product.getNameProduct(),
//                product.getAmount(),
//                product.getProductType().getId(),
//                product.getId());\
        return null;
    }




    @Override
    public void addProduct(ProductDTO productDTO) {
        Product product = new Product();
        BeanUtils.copyProperties(productDTO, product);
        productRepository.addProduct(product.getId(),
                product.getDate(),
                product.getNameProduct(),
                product.getAmount(),
                product.getProductType().getId());
    }

    @Override
    public Product deleteProduct(long id) {
        return productRepository.deleteProduct(id);
    }

    @Override
    public List<Product> findProductByName(Pageable pageable, String name) {
        return productRepository.findByName(name);
    }
}
