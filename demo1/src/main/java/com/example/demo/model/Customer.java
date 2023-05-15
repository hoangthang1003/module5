package com.example.demo.model;



import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String customer;
    private String dateOfBirth;
    private String address;
    private String idCard;
    private String phoneNumber;

    @ManyToOne
    @JoinColumn(name = "customerTypeId", referencedColumnName = "id")
    @JsonManagedReference
    private CustomerType customerType;

    public Customer() {
    }

    public Customer(long id, String customer, String dateOfBirth, String address, String idCard, String phoneNumber, CustomerType customerType) {
        this.id = id;
        this.customer = customer;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.idCard = idCard;
        this.phoneNumber = phoneNumber;
        this.customerType = customerType;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public CustomerType getCustomerType() {
        return customerType;
    }

    public void setCustomerType(CustomerType customerType) {
        this.customerType = customerType;
    }
}
