package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class RideHistory {

    @Id
    @Column(name = "referenceNo", updatable = false, nullable = false)
    private Long referenceNo;

    private double damageFee;
    private double extraCharge;
    private double otherCharges;
    private double balance;
    private double totalCharge;

    @MapsId
    @OneToOne
    @JoinColumn(name = "referenceNo", referencedColumnName = "referenceNo")
    private Ride ride;
}
