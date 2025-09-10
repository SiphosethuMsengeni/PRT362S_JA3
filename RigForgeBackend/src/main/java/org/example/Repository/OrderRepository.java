package org.example.Repository;

// Domain Models
public class OrderRepository : Entity<Guid>
{
    public Guid UserId { get; set; }
    public Guid? PcId { get; set; } // Nullable for pre-built PC reference
    public decimal TotalAmount { get; set; }
    public OrderStatus Status { get; set; } // Enum: Pending, Paid, Shipped, etc.
}

public class PreBuiltPC : Entity<Guid>
{
    public string Model { get; set; }
    public decimal Price { get; set; }
    public int StockQuantity { get; set; }
}

public class Customer : Entity<Guid>
{
    public string Email { get; set; }
    public string Address { get; set; }
    // Other fields (username, phone, etc.)
}