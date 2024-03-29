package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.DriverDTO;

import java.util.List;

public interface DriverService {

    void saveDriver(DriverDTO dto);
    void deleteDriver(String id);
    void updateDriver(DriverDTO dto);
    DriverDTO SearchDriver(String id);
    DriverDTO SearchRandomDriver();
    List<DriverDTO> getAllDrivers();
    List<String> getAllDriverIDs();
    String getLastID();
}
