package lk.ijse.spring.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDate;
import java.time.LocalTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
//@Entity
public class Ride {

    @Id
    private String referenceNo;
    private LocalDate rentalDate;
    private LocalTime rentalTime;
    private LocalDate returnDate;
    private String reqStatus;
    private Double downPayment;

    @ManyToOne
    @JoinColumn(name= "NIC", referencedColumnName = "NIC",insertable = false,nullable = false)
    private Customer customer;

    @ManyToOne
    @JoinColumn(name= "regNo", referencedColumnName = "regNo",insertable = false, nullable = false)
    private Vehicle vehicle;

    @ManyToOne
    @JoinColumn(name = "driverId", referencedColumnName = "driverId", insertable = false, nullable = false)
    private Driver driver;

}
