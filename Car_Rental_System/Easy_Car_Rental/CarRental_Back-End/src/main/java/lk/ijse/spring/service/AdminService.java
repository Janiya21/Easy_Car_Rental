package lk.ijse.spring.service;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.dto.CustomerDTO;

import java.util.List;

public interface AdminService {

    void saveAdmin(AdminDTO dto);
    void deleteAdmin(String id);
    void updateAdmin(AdminDTO dto);
    AdminDTO searchAdmin(String id);
    List<AdminDTO> getAllAdmins();
    List<String> getAllAdminUserNames();

}
