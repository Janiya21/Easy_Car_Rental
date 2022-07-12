package lk.ijse.spring.dto;

import lk.ijse.spring.entity.Ride;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RideHistoryDTO {

    private String referenceNo;

    private double damageFee;
    private double extraCharge;
    private double otherCharges;
    private double balance;
    private double totalCharge;


}
