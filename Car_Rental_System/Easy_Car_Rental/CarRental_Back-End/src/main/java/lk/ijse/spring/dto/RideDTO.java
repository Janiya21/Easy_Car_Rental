package lk.ijse.spring.dto;

import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.entity.Vehicle;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RideDTO {

    private String referenceNo;
    private LocalDate rentalDate;
    private LocalTime rentalTime;
    private LocalDate returnDate;
    private String reqStatus;
    private Double downPayment;
//    private int days;
//    private double total;

    private Driver driver;
    private Vehicle vehicle;
    private Customer customer;
}
