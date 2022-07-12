package lk.ijse.spring.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @Column(name="referenceNo", columnDefinition="varchar(255) default 'R-0000'")
    private String referenceNo;

    private double damageFee;
    private double extraCharge;
    private double otherCharges;
    private double balance;
    private double totalCharge;
}
