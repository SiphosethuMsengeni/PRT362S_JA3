package org.example.Repository;

public class RepositoryInterfaces {
}
// Generic base repository for common operations
public interface IRepository<T> where T : Entity<Guid>
{
    Task<T> GetByIdAsync(Guid id);
    Task AddAsync(T entity);
    Task UpdateAsync(T entity);
    Task DeleteAsync(Guid id);
}

// Specialized interfaces for aggregates
public interface IOrderRepository : IRepository<Order>
{
    // Pre-built PC-specific queries
    Task<IEnumerable<Order>> GetOrdersByCustomerAsync(Guid customerId);
    Task ReserveStockAsync(Guid pcId, int quantity); // For future stock management
}

public interface IPreBuiltPCRepository : IRepository<PreBuiltPC>
{
    Task<IEnumerable<PreBuiltPC>> GetAvailableModelsAsync();
}

public interface ICustomerRepository : IRepository<Customer>
{
    Task<Customer> GetByEmailAsync(string email);
}