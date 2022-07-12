package lk.ijse.spring.service;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.RideHistoryDTO;

import java.util.List;

public interface RideHistoryService {
    void saveHistory(RideHistoryDTO dto);
    void deleteHistory(String id);
    void updateHistory(RideHistoryDTO dto);
    RideHistoryDTO searchHistory(String id);
    List<RideHistoryDTO> getAllHistory();
    List<String> getAllRefs();
}
