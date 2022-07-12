package lk.ijse.spring.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Ride {

    @Id
    private String referenceNo;
    private LocalDate rentalDate;
    private LocalTime rentalTime;
    private LocalDate returnDate;
    private String reqStatus;
    private Double downPayment;

    @ManyToOne
    @JoinColumn(name= "NIC", referencedColumnName = "NIC",nullable = false)
    private Customer customer;

    @ManyToOne
    @JoinColumn(name= "regNo", referencedColumnName = "regNo", nullable = false)
    private Vehicle vehicle;

    @ManyToOne
    @JoinColumn(name = "driverId", referencedColumnName = "driverId",  nullable = false)
    private Driver driver;

    /*@OneToOne(mappedBy = "referenceNo", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private RideHistory rideHistory;*/

}
