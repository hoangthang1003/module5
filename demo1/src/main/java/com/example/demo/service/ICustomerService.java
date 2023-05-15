package com.example.demo.service;

import com.example.demo.dto.CustomerDTO;
import com.example.demo.model.Customer;
import org.springframework.data.domain.Page;

import java.awt.print.Pageable;
import java.util.List;

public interface ICustomerService {
    List<Customer> findAll();

    Customer findById(long id);

    Customer findByCustomer(String name);

    void create(Customer customer);

    void delete(Customer customer);

    void save(Customer customer);
}