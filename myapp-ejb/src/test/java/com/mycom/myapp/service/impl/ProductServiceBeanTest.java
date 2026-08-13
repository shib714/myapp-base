package com.mycom.myapp.service.impl;

import com.mycom.myapp.entity.Product;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ProductServiceBeanTest {

    @Mock
    private EntityManager em;

    @Mock
    private TypedQuery<Product> typedQuery;

    @InjectMocks
    private ProductServiceBean service;

    @Test
    void testCreate() {
        Product p = new Product();

        Product result = service.create(p);

        verify(em).persist(p);
        assertEquals(p, result);
    }

    @Test
    void testFind() {
        Product p = new Product();
        when(em.find(Product.class, 1L)).thenReturn(p);

        Product result = service.find(1L);

        assertNotNull(result);
        verify(em).find(Product.class, 1L);
    }

    @Test
    void testFindByCategory() {
        List<Product> products = Arrays.asList(new Product(), new Product());

        when(em.createQuery("SELECT p FROM Product p WHERE p.category = :category", Product.class))
                .thenReturn(typedQuery);
        when(typedQuery.setParameter("category", "Electronics")).thenReturn(typedQuery);
        when(typedQuery.getResultList()).thenReturn(products);

        List<Product> result = service.findByCategory("Electronics");

        assertEquals(2, result.size());
        verify(typedQuery).setParameter("category", "Electronics");
        verify(typedQuery).getResultList();
    }

    @Test
    void testFindAll() {
        List<Product> products = Arrays.asList(new Product(), new Product(), new Product());

        when(em.createQuery("SELECT p FROM Product p", Product.class))
                .thenReturn(typedQuery);
        when(typedQuery.getResultList()).thenReturn(products);

        List<Product> result = service.findAll();

        assertEquals(3, result.size());
        verify(typedQuery).getResultList();
    }

    @Test
    void testUpdate() {
        Product p = new Product();
        Product merged = new Product();

        when(em.merge(p)).thenReturn(merged);

        Product result = service.update(p);

        assertEquals(merged, result);
        verify(em).merge(p);
    }

    @Test
    void testDelete_existingProduct() {
        Product p = new Product();
        when(em.find(Product.class, 10L)).thenReturn(p);

        service.delete(10L);

        verify(em).remove(p);
    }

    @Test
    void testDelete_nonExistingProduct() {
        when(em.find(Product.class, 99L)).thenReturn(null);

        service.delete(99L);

        verify(em, never()).remove(any());
    }
}
