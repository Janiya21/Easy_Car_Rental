package lk.ijse.spring.controller;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.RideDTO;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.service.RideService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/ride")
@CrossOrigin
public class RideController {

    @Autowired
    RideService rideService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllRides() {
        return new ResponseUtil(200,"Successfully returned !!",rideService.getAllOrders());
    }

    @ResponseStatus(HttpStatus.CREATED) //201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveRide(@RequestBody RideDTO rideDTO) {
        rideService.saveOrder(rideDTO);
        return new ResponseUtil(200,"Successfully Saved !!",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateRide(@RequestBody RideDTO rideDTO) {
        rideService.updateOrder(rideDTO);
        return new ResponseUtil(200,"Successfully Updated !!",null);
    }

    @DeleteMapping(params = {"ref"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteRide(@RequestParam String ref) {
        rideService.deleteOrder(ref);
        return new ResponseUtil(200,"Successfully Deleted !!",null);
    }

    @GetMapping(path = "/{ref}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchRide(@PathVariable String ref) {
        return new ResponseUtil(200,"Successfully Found !!",rideService.searchOrder(ref));
    }

    @GetMapping(path = "all")
    public ResponseUtil getAllRefs() {
        return new ResponseUtil(200,"Successfully Returned !!",rideService.getAllRefs());
    }

}