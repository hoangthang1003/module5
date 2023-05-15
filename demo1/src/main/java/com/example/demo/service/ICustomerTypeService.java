package com.example.demo.service;

import com.example.demo.model.CustomerType;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ICustomerTypeService {
    CustomerType findById(long id);

    List<CustomerType> findAllCustomerType();
}
