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
@ToString
@Data
@Entity
public class Customer {
    @Id
    private String NIC;
    private String password;
    private String name;
    private String tel;
    private String email;
    private String nic_or_License_photo;

    @OneToMany(mappedBy = "customer",cascade = CascadeType.ALL)
    private List<Ride> rides;

}
