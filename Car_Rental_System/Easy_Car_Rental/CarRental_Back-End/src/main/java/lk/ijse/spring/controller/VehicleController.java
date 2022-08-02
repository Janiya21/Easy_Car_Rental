package lk.ijse.spring.controller;


import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.VehicleDTO;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.service.VehicleService;
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
@RequestMapping("api/v1/vehicle")
@CrossOrigin
public class VehicleController {

    @Autowired
    VehicleService vehicleService;

    private static final ArrayList<String> vehiclePhotos = new ArrayList<>();

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllVehicles() {
        return new ResponseUtil(200,"Successfully returned !!",vehicleService.getAllVehicles());
    }

    @GetMapping(path = "orderVeh/{regNo}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getOrderVehicle(@PathVariable String regNo){
        System.out.println("avo");
        return new ResponseUtil(200,"Successfully returned !!",vehicleService.getOrderedVehicle(regNo));
    }

    @GetMapping(path = "/comfy/{com}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getRevVehicles(@PathVariable String com) {
        return new ResponseUtil(200,"Successfully returned !!",vehicleService.getRevVehicle(com));
    }

    @ResponseStatus(HttpStatus.CREATED) //201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveVehicle(@RequestBody VehicleDTO vehicleDTO) {
        System.out.println(vehicleDTO);
        vehicleService.saveVehicle(vehicleDTO);
        return new ResponseUtil(200,"Successfully Saved !!",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateVehicle(@RequestBody VehicleDTO vehicleDTO) {
        vehicleService.updateVehicle(vehicleDTO);
        return new ResponseUtil(200,"Successfully Updated !!",null);
    }

    @DeleteMapping(params = {"regNo"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteVehicle(@RequestParam String regNo) {
        vehicleService.deleteVehicle(regNo);
        return new ResponseUtil(200,"Successfully Deleted !!",null);
    }

    @GetMapping(path = "/{regNo}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchVehicle(@PathVariable String regNo) {
        return new ResponseUtil(200,"Successfully Found !!",vehicleService.searchVehicle(regNo));
    }

    @GetMapping(path = "all")
    public ResponseUtil getAllRegNos() {
        return new ResponseUtil(200,"Successfully Returned !!",vehicleService.getAllRegNos());
    }

    @GetMapping(path = "download",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllImagesFromDatabase() {
        return new ResponseUtil(200,"Done",vehiclePhotos);
    }

    @PostMapping(path = "upload/{regNo}" ,consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil uploadFileWithSpringWay(@RequestPart("myFile") MultipartFile myFile, @PathVariable String regNo) {
        try {
            System.out.println(regNo + " Reg No");
            // String projectPath = new File("C:\\Users\\JANITH\\Desktop\\Desktop All Here\\Web All\\Spring MVC cw\\Car_Rental_System\\Easy_Car_Rental\\CarRental_Front-End\\car-regs").getParentFile().getParentFile().getAbsolutePath();
            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            System.out.println(projectPath + " proj path");
            File uploadsDir = new File(projectPath + "/" + regNo + "/");
            System.out.println(uploadsDir);
            uploadsDir.mkdir();
            myFile.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + myFile.getOriginalFilename()));

            vehiclePhotos.add(regNo + "/" +myFile.getOriginalFilename());

            return new ResponseUtil(200,"Successfully returned !!",null);
        } catch (IOException | URISyntaxException e) {
            e.printStackTrace();
            return new ResponseUtil(500,e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
