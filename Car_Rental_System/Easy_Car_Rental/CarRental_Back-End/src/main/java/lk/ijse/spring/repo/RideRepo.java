package lk.ijse.spring.repo;

import lk.ijse.spring.dto.RideDTO;
import lk.ijse.spring.entity.Ride;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RideRepo extends JpaRepository<Ride,String> {

    @Query(value = "select referenceNo from Ride", nativeQuery = true)
    List<String> getAllRideRefs();

    @Query(value = "update ride set reqStatus='Approved' where referenceNo=?1", nativeQuery = true)
    void updateReqStatus(String status);

    @Query(value = "SELECT referenceNo FROM ride ORDER BY referenceNo DESC LIMIT 1", nativeQuery = true)
    String getLastID();
}
