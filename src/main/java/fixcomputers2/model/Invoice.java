package fixcomputers2.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Invoice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String customerName;
    private String serviceDescription;
    private double cost;
    private LocalDateTime dateGenerated;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }
    public String getServiceDescription() { return serviceDescription; }
    public void setServiceDescription(String serviceDescription) { this.serviceDescription = serviceDescription; }
    public double getCost() { return cost; }
    public void setCost(double cost) { this.cost = cost; }
    public LocalDateTime getDateGenerated() { return dateGenerated; }
    public void setDateGenerated(LocalDateTime dateGenerated) { this.dateGenerated = dateGenerated; }
}
