package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
//@Entity
public class RideHistory {

    @Id
    private String ride;

    private double damageFee;
    private double extraCharge;
    private double otherCharges;
    private double balance;
    private double totalCharge;
}
