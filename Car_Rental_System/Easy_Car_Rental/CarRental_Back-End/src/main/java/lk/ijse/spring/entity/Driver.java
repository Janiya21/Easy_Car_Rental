package lk.ijse.spring.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class Driver {

    @Id
    private String driverId;
    private String password;
    private String name;
    private String email;
    private String telNo;

    @JsonIgnore
    @OneToMany(mappedBy = "driver",cascade = CascadeType.ALL)
    private List<Ride> rides;

}
