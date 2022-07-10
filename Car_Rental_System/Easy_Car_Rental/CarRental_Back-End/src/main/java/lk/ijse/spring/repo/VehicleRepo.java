package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface VehicleRepo extends JpaRepository<Vehicle,String> {

    @Query(value = "select regNo from Vehicle", nativeQuery = true)
    List<String> getAllVehicleIds();

}
