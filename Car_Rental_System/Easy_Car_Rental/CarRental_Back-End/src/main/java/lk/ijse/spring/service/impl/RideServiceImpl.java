package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.RideDTO;
import lk.ijse.spring.dto.VehicleDTO;
import lk.ijse.spring.entity.Ride;
import lk.ijse.spring.entity.Vehicle;
import lk.ijse.spring.repo.RideRepo;
import lk.ijse.spring.repo.VehicleRepo;
import lk.ijse.spring.service.RideService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class RideServiceImpl implements RideService {

    @Autowired
    private RideRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveOrder(RideDTO dto) {
        if (!repo.existsById(dto.getReferenceNo())) {
            repo.save(mapper.map(dto, Ride.class));
        } else {
            throw new RuntimeException("This Reference No Already Exists !!");
        }
    }

    @Override
    public void deleteOrder(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("Can't proceed ! Please Check the ref No !");
        }
    }

    @Override
    public void updateOrder(RideDTO dto) {
        if (repo.existsById(dto.getReferenceNo())) {
            repo.save(mapper.map(dto, Ride.class));
        } else {
            throw new RuntimeException("Please Check the Ref No !!");
        }
    }

    @Override
    public RideDTO searchOrder(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), RideDTO.class);
        } else {
            throw new RuntimeException("No Order For " + id + " ..!");
        }
    }

    @Override
    public List<RideDTO> getAllOrders() {
        return mapper.map(repo.findAll(), new TypeToken<List<RideDTO>>() {}.getType());
    }

    @Override
    public List<String> getAllRefs() {
        return mapper.map(repo.getAllRideRefs(), new TypeToken<List<String>>() {}.getType());
    }
}
