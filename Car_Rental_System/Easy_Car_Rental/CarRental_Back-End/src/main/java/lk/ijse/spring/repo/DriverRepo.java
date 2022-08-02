package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DriverRepo extends JpaRepository<Driver, String> {

    @Query(value = "select driverId from Driver", nativeQuery = true)
    List<String> getAllDriverIds();

    @Query(value = "select * from Driver where driverId='D-0001'", nativeQuery = true)
    Driver getRandomDriver();

    @Query(value = "SELECT driverId FROM driver ORDER BY driverId DESC LIMIT 1", nativeQuery = true)
    String getLastID();
}
