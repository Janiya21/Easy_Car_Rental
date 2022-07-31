package lk.ijse.spring.service;

import lk.ijse.spring.dto.RideDTO;
import lk.ijse.spring.dto.VehicleDTO;

import java.util.List;

public interface RideService {

    void saveOrder(RideDTO dto);
    void deleteOrder(String id);
    void updateOrder(RideDTO dto);
    RideDTO searchOrder(String id);
    List<RideDTO> getAllOrders();
    List<String> getAllRefs();
    String getLastID();
    void updateStatus(String status);

}
