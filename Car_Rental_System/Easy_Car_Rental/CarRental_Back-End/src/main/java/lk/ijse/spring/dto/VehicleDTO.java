package lk.ijse.spring.dto;

import lk.ijse.spring.entity.Admin;
import lk.ijse.spring.entity.Ride;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class VehicleDTO {

    private String regNo;
    private String brand;
    private String comfortability;
    private String fuel_type;
    private String No_of_passengers;
    private String color;
    private String millage_before_Reg;
    private double loss_damage_amount;
    private double daily_cost;
    private double monthly_cost;
    private Admin admin;
    private List<Ride> rides;

}
