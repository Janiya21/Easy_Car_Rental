package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/driver")
@CrossOrigin
public class DriverController  {

    @Autowired
    DriverService driverService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllDrivers() {
        System.out.println(  " ID");
        return new ResponseUtil(200,"Successfully returned !!",driverService.getAllDrivers());
    }

    @ResponseStatus(HttpStatus.CREATED) //201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveDriver(@RequestBody DriverDTO driverDTO) {
        System.out.println(driverDTO);
        driverService.saveDriver(driverDTO);
        return new ResponseUtil(200,"Successfully Saved !!",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateDriver(@RequestBody DriverDTO driverDTO) {
        driverService.updateDriver(driverDTO);
        return new ResponseUtil(200,"Successfully Updated !!",null);
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteDriver(@RequestParam String id) {
        driverService.deleteDriver(id);
        return new ResponseUtil(200,"Successfully Deleted !!",null);
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchDriver(@PathVariable String id) {
        System.out.println(id + " ID");
        return new ResponseUtil(200,"Successfully Found !!",driverService.SearchDriver(id));
    }

    @GetMapping(path = "/ran/randomDriver",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchRandomDriver() {
        DriverDTO driverDTO = driverService.SearchDriver("D-0001");
        System.out.println(driverDTO + " DD");
        return new ResponseUtil(200,"Successfully Found !!",driverDTO);
    }

    @GetMapping(path = "all")
    public ResponseUtil getAllIds() {
        return new ResponseUtil(200,"Successfully Returned !!",driverService.getAllDriverIDs());
    }

    @GetMapping(path = "generateDriverID")
    public ResponseUtil generateDriverID(){
        System.out.println("avooo");
        String lastID = driverService.getLastID();
        System.out.println(lastID + " lfg");
        String[] arrOfStr = lastID.split("-");
        System.out.println(arrOfStr[1] + " this is the two");
        System.out.println("-----------------");
        int i = Integer.parseInt(String.valueOf(arrOfStr[1]));
        i++;
        String generatedId="";
        if(i<10)
            generatedId="D-000"+i;
        else if(i<100)
            generatedId="D-00"+i;
        else if(i<1000)
            generatedId="D-0"+i;

        System.out.println(generatedId);
        return new ResponseUtil(200,"Successfully Returned !!", generatedId);
    }
}
