package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Admin;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.repo.AdminRepo;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.service.AdminService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveAdmin(AdminDTO dto) {
        if (!repo.existsById(dto.getUserName())) {
            repo.save(mapper.map(dto, Admin.class));
        } else {
            throw new RuntimeException("Admin Already Exist..! Please Check Again..");
        }
    }

    @Override
    public void deleteAdmin(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("Please check the userName.. No Such Admin..!");
        }
    }

    @Override
    public void updateAdmin(AdminDTO dto) {
        if (repo.existsById(dto.getUserName())) {
            repo.save(mapper.map(dto, Admin.class));
        } else {
            throw new RuntimeException("No Such Admin To Update..! Please Check the UserName..!");
        }
    }

    @Override
    public AdminDTO searchAdmin(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), AdminDTO.class);
        } else {
            throw new RuntimeException("No Customer For " + id + " ..!");
        }
    }

    @Override
    public List<AdminDTO> getAllAdmins() {
        return mapper.map(repo.findAll(), new TypeToken<List<AdminDTO>>() {}.getType());
    }

    @Override
    public List<String> getAllAdminUserNames() {
        return mapper.map(repo.getAllAdminIds(), new TypeToken<List<String>>() {}.getType());
    }
}
