package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Vehicle {
    @Id
    private String regNo;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "userName",referencedColumnName = "userName",nullable = false)
    private Admin admin;

    private int brand;
    private String comfortability;
    private String fuel_type;
    private String No_of_passengers;
    private String color;
    private String millage_before_Reg;
    private double loss_damage_amount;
    private double daily_cost;
    private double monthly_cost;

    @OneToMany(mappedBy = "vehicle",cascade = CascadeType.ALL)
    private List<Ride> rides;

}
