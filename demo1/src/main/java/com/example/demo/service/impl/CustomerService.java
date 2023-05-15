package com.example.demo.service.impl;


import com.example.demo.dto.CustomerDTO;
import com.example.demo.model.Customer;
import com.example.demo.model.CustomerType;
import com.example.demo.repository.ICustomerRepository;
import com.example.demo.service.ICustomerService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private ICustomerRepository iCustomerRepository;
    @Autowired
    private ICustomerService customerTypeService;


    @Override
    public List<Customer> findAll() {
        return iCustomerRepository.findAll();
    }


    @Override
    public Customer findById(long id) {
        return iCustomerRepository.findById(id).get();
    }

    @Override
    public Customer findByCustomer(String name) {
        return iCustomerRepository.findByCustomer(name);
    }

    @Override
    public void create(Customer customer) {
        iCustomerRepository.save(customer);
    }

    @Override
    public void delete(Customer customer) {
        iCustomerRepository.delete(customer);
    }

    @Override
    public void save(Customer customer) {
        iCustomerRepository.save(customer);
    }


}

