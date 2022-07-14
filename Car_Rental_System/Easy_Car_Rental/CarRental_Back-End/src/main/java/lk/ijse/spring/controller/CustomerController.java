package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;

@RestController
@RequestMapping("api/v1/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    CustomerService customerService;

    private static final ArrayList<String> allImages = new ArrayList<>();

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCustomers() {
        return new ResponseUtil(200,"Successfully returned !!",customerService.getAllCustomers());
    }

    @GetMapping(path = "download",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllImagesFromDatabase() {
        return new ResponseUtil(200,"Done",allImages);
    }

    @PostMapping(path = "upload",consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil uploadFileWithSpringWay(@RequestPart("myFile") MultipartFile myFile) {
        System.out.println("fuck youuu");
        try {
            //String projectPath = new File("C:\\Users\\JANITH\\Desktop\\Desktop All Here\\Web All\\Spring MVC cw\\Car_Rental_System\\Easy_Car_Rental\\CarRental_Front-End\\car-regs").getParentFile().getParentFile().getAbsolutePath();
            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            System.out.println(projectPath);
            uploadsDir.mkdir();
            myFile.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + myFile.getOriginalFilename()));

            allImages.add("uploads/" + myFile.getOriginalFilename());

            return new ResponseUtil(200,"Successfully returned !!",null);
        } catch (IOException | URISyntaxException e) {
            e.printStackTrace();
            return new ResponseUtil(500,e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @ResponseStatus(HttpStatus.CREATED) //201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCustomer(@ModelAttribute CustomerDTO customer) {
        customerService.saveCustomer(customer);
        return new ResponseUtil(200,"Successfully Saved !!",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCustomer(@RequestBody CustomerDTO customer) {
        customerService.updateCustomer(customer);
        return new ResponseUtil(200,"Successfully Updated !!",null);
    }

    @DeleteMapping(params = {"nic"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCustomer(@RequestParam String nic) {
        customerService.deleteCustomer(nic);
        return new ResponseUtil(200,"Successfully Deleted !!",null);
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchCustomer(@PathVariable String id) {
        return new ResponseUtil(200,"Successfully Found !!",customerService.searchCustomer(id));
    }

    @GetMapping(path = "all")
    public ResponseUtil getAllIds() {
        return new ResponseUtil(200,"Successfully Returned !!",customerService.getAllCustomerIDS());
    }
}
