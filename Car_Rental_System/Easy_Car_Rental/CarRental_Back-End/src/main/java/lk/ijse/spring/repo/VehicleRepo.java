package lk.ijse.spring.repo;

import lk.ijse.spring.dto.VehicleDTO;
import lk.ijse.spring.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface VehicleRepo extends JpaRepository<Vehicle,String> {

    @Query(value = "select regNo from Vehicle", nativeQuery = true)
    List<String> getAllVehicleIds();

    @Query(value = "select * from Vehicle where comfortability=?1 ", nativeQuery = true)
    List<Vehicle> getRevVehicle(String com);

    @Query(value = "select * from Vehicle where regNo=?1 ", nativeQuery = true)
    List<Vehicle> getOrderedVehicle(String regNo);
}
