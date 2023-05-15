package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String nameProduct;
    private String date;
    private Integer amount;

    @ManyToOne
    @JoinColumn(name = "productType", referencedColumnName = "id")
    @JsonManagedReference
    private ProductType productType;

    public Product() {
    }

    public Product(String nameProduct, String date, int amount, ProductType productType) {
        this.nameProduct = nameProduct;
        this.date = date;
        this.amount = amount;
        this.productType = productType;
    }

    public Product(int id, String nameProduct, String date, int amount, ProductType productType) {
        this.id = id;
        this.nameProduct = nameProduct;
        this.date = date;
        this.amount = amount;
        this.productType = productType;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

    public Object getCode() {
        return null;
    }
}
