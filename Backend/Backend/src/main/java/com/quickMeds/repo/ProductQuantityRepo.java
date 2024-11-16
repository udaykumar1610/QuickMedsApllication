package com.quickMeds.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quickMeds.entities.ProductQuantity;

@Repository
public interface ProductQuantityRepo extends JpaRepository<ProductQuantity, Long>{

}
