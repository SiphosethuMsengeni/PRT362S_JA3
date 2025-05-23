package org.example.Repository;

// In-memory OrderRepository (testable)
public class InMemoryOrderRepository : IOrderRepository
{
    private readonly List<Order> _orders = new();

    public Task AddAsync(Order order)
    {
        _orders.Add(order);
        return Task.CompletedTask;
    }

    public Task<Order> GetByIdAsync(Guid id)
    {
        return Task.FromResult(_orders.FirstOrDefault(o => o.Id == id));
    }

    public Task UpdateAsync(Order order)
    {
        var index = _orders.FindIndex(o => o.Id == order.Id);
        if (index >= 0) _orders[index] = order;
        return Task.CompletedTask;
    }

    // Other methods (GetOrdersByCustomerAsync, etc.)
}

// In-memory PreBuiltPCRepository
public class InMemoryPreBuiltPCRepository : IPreBuiltPCRepository
{
    private readonly List<PreBuiltPC> _pcs = new();

    public Task AddAsync(PreBuiltPC pc)
    {
        _pcs.Add(pc);
        return Task.CompletedTask;
    }

    public Task<PreBuiltPC> GetByIdAsync(Guid id)
    {
        return Task.FromResult(_pcs.FirstOrDefault(p => p.Id == id));
    }

    public Task<IEnumerable<PreBuiltPC>> GetAvailableModelsAsync()
    {
        return Task.FromResult(_pcs.Where(p => p.StockQuantity > 0));
    }
}