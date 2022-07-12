package lk.ijse.spring.controller;

import lk.ijse.spring.dto.RideDTO;
import lk.ijse.spring.dto.RideHistoryDTO;
import lk.ijse.spring.repo.RideHistoryRepo;
import lk.ijse.spring.service.RideHistoryService;
import lk.ijse.spring.service.RideService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/rideHistory")
@CrossOrigin
public class RideHistoryController {

    @Autowired
    RideHistoryService rideService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllRides() {
        return new ResponseUtil(200,"Successfully returned !!",rideService.getAllHistory());
    }

    @ResponseStatus(HttpStatus.CREATED) //201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveRide(@RequestBody RideHistoryDTO rideDTO) {
        rideService.saveHistory(rideDTO);
        return new ResponseUtil(200,"Successfully Saved !!",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateRide(@RequestBody RideHistoryDTO rideDTO) {
        rideService.updateHistory(rideDTO);
        return new ResponseUtil(200,"Successfully Updated !!",null);
    }

    @DeleteMapping(params = {"ref"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteRide(@RequestParam String ref) {
        rideService.deleteHistory(ref);
        return new ResponseUtil(200,"Successfully Deleted !!",null);
    }

    @GetMapping(path = "/{ref}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchRide(@PathVariable String ref) {
        return new ResponseUtil(200,"Successfully Found !!",rideService.searchHistory(ref));
    }

    @GetMapping(path = "all")
    public ResponseUtil getAllRefs() {
        return new ResponseUtil(200,"Successfully Returned !!",rideService.getAllRefs());
    }

}
