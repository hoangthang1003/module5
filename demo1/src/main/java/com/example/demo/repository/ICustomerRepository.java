package com.example.demo.repository;


import com.example.demo.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface ICustomerRepository extends JpaRepository<Customer,Long> {



    Customer findByCustomer(String name);

    Page<Customer> findCustomerByCustomerContaining( String name, Pageable pageable);


}

