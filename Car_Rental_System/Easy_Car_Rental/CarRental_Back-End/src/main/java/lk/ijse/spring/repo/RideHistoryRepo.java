package lk.ijse.spring.repo;

import lk.ijse.spring.entity.RideHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RideHistoryRepo extends JpaRepository<RideHistory,String> {

    @Query(value = "select referenceNo from rideHistory", nativeQuery = true)
    List<String> getAllRefNos();

}
