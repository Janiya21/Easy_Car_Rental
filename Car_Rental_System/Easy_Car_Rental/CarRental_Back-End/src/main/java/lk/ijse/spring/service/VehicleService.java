package lk.ijse.spring.service;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.VehicleDTO;

import java.util.List;

public interface VehicleService {

    void saveVehicle(VehicleDTO dto);
    void deleteVehicle(String id);
    void updateVehicle(VehicleDTO dto);
    VehicleDTO searchVehicle(String id);
    List<VehicleDTO> getAllVehicles();
    List<VehicleDTO> getRevVehicle(String com);
    List<VehicleDTO> getOrderedVehicle(String regNo);
    List<String> getAllRegNos();

}
