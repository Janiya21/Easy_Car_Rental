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

@RestController
@RequestMapping("api/v1/vehicle")
@CrossOrigin
public class VehicleController {

    @Autowired
    VehicleService vehicleService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllVehicles() {
        return new ResponseUtil(200,"Successfully returned !!",vehicleService.getAllVehicles());
    }

    @ResponseStatus(HttpStatus.CREATED) //201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveVehicle(@ModelAttribute VehicleDTO vehicleDTO) {
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

}
