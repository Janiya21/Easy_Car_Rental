package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Admin;
import lk.ijse.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AdminRepo extends JpaRepository<Admin, String> {

    @Query(value = "select userName from Admin", nativeQuery = true)
    List<String> getAllAdminIds();

}
