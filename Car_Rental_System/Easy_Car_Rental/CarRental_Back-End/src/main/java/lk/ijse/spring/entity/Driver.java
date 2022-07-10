package lk.ijse.spring.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
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

    @OneToMany(mappedBy = "driver",cascade = CascadeType.ALL)
    private List<Ride> rides;

}
