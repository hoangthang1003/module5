package com.example.demo.repository;

import com.example.demo.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {

    @Query(value = "select * from product ", nativeQuery = true)
    List<Product> showList();

    @Query(value = "select * from product where id = :id", nativeQuery = true)
    Product findById(@Param("id") Long id);

    @Query("select p from Product p where p.nameProduct like %:name%")
    List<Product> findByName(@Param("name") String name);

    @Modifying
    @Transactional
    @Query(value = "insert into book (id, name,date, amount,product_type) " +
            "values (:id, :name, :date, :amount, :product_type)", nativeQuery = true)
    Product addProduct(@Param("id") int id,
                    @Param("name") String name,
                    @Param("date") String date,
                    @Param("amount") Integer amount,
                    @Param("product_type") int product_type);

    @Modifying
    @Transactional
    @Query(value = "delete from book where id = :id", nativeQuery = true)
    Product deleteProduct(@Param("id") long id);

    @Modifying
    @Transactional
    @Query(value = "update product set id = :id, name = :name, date = :date, " +
            "quantity = :quantity, product_type_id = :product_type_id where id = :id", nativeQuery = true)
    void updateProduct(
                       @Param("date") String date,
                       @Param("name") String name,
                       @Param("quantity") Integer quantity,
                       @Param("product_type_id") Integer productType,
                       @Param("id") Integer id);

}
