package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.RideDTO;
import lk.ijse.spring.dto.RideHistoryDTO;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.entity.Ride;
import lk.ijse.spring.entity.RideHistory;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.repo.RideHistoryRepo;
import lk.ijse.spring.service.RideHistoryService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class RideHistoryServiceImpl implements RideHistoryService {

    @Autowired
    private RideHistoryRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveHistory(RideHistoryDTO dto) {
        if (!repo.existsById(dto.getReferenceNo())) {
            repo.save(mapper.map(dto, RideHistory.class));
        } else {
            throw new RuntimeException("Record Already Exist..! Please Check Again..");
        }
    }

    @Override
    public void deleteHistory(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("Please check the RefNo.. No Such a Record..!");
        }
    }

    @Override
    public void updateHistory(RideHistoryDTO dto) {
        if (repo.existsById(dto.getReferenceNo())) {
            repo.save(mapper.map(dto, RideHistory.class));
        } else {
            throw new RuntimeException("Please Check the Ref No !!");
        }
    }

    @Override
    public RideHistoryDTO searchHistory(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), RideHistoryDTO.class);
        } else {
            throw new RuntimeException("No Order For " + id + " ..!");
        }
    }

    @Override
    public List<RideHistoryDTO> getAllHistory() {
        return mapper.map(repo.findAll(), new TypeToken<List<RideHistoryDTO>>() {}.getType());
    }

    @Override
    public List<String> getAllRefs() {
        return mapper.map(repo.getAllRefNos(), new TypeToken<List<String>>() {}.getType());
    }
}
