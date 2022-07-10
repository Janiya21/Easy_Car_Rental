package lk.ijse.spring.dto;

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
public class DriverDTO {

    private String driverId;
    private String password;
    private String name;
    private String email;
    private String telNo;
    private List<Ride> rides;

}
