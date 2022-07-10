package lk.ijse.spring.controller;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.service.AdminService;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/admin")
@CrossOrigin
public class AdminController {

    @Autowired
    AdminService adminService;


    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllAdmins() {
        return new ResponseUtil(200,"Successfully returned !!",adminService.getAllAdmins());
    }

    @ResponseStatus(HttpStatus.CREATED) //201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveAdmin(@ModelAttribute AdminDTO admin) {
        adminService.saveAdmin(admin);
        return new ResponseUtil(200,"Successfully Saved !!",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateAdmin(@RequestBody AdminDTO admin) {
        adminService.updateAdmin(admin);
        return new ResponseUtil(200,"Successfully Updated !!",null);
    }

    @DeleteMapping(params = {"username"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCustomer(@RequestParam String username) {
        adminService.deleteAdmin(username);
        return new ResponseUtil(200,"Successfully Deleted !!",null);
    }

    @GetMapping(path = "/{username}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchCustomer(@PathVariable String username) {
        return new ResponseUtil(200,"Successfully Found !!",adminService.searchAdmin(username));
    }

    @GetMapping(path = "all")
    public ResponseUtil getAllAdminUsernames() {
        return new ResponseUtil(200,"Successfully Returned !!",adminService.getAllAdminUserNames());
    }

}
