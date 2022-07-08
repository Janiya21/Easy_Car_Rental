package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data // apply getters and setters
@ToString
public class CustomerDTO {
    private String NIC;
    private String password;
    private String name;
    private String tel;
    private String email;
    private String nic_or_License_photo;
}
