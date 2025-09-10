package org.example;

public class OrderService {
}
public class OrderService
{
    private readonly IOrderRepository _orderRepository;
    private readonly IPreBuiltPCRepository _pcRepository;
    private readonly ICustomerRepository _customerRepository;

    public OrderService(
            IOrderRepository orderRepo,
            IPreBuiltPCRepository pcRepo,
            ICustomerRepository customerRepo)
    {
        _orderRepository = orderRepo;
        _pcRepository = pcRepo;
        _customerRepository = customerRepo;
    }

    public async Task<OrderResult> CreateOrderAsync(Guid customerId, Guid pcId)
{
    // Validate customer
    var customer = await _customerRepository.GetByIdAsync(customerId);
    if (customer == null)
        return OrderResult.Failure("Customer not found");

    // Validate PC stock (placeholder for future ReserveStockAsync)
    var pc = await _pcRepository.GetByIdAsync(pcId);
    if (pc?.StockQuantity <= 0)
    return OrderResult.Failure("PC out of stock");

    // Create order (payment logic will be added later)
    var order = new Order
    {
        Id = Guid.NewGuid(),
                UserId = customerId,
                PcId = pcId,
                TotalAmount = pc.Price,
                Status = OrderStatus.PendingPayment
    };

    await _orderRepository.AddAsync(order);
    return OrderResult.Success(order.Id);
}
}

public record OrderResult(bool IsSuccess, Guid? OrderId = null, string Error = null)
{
    public static OrderResult Success(Guid orderId) => new(true, orderId);
    public static OrderResult Failure(string error) => new(false, Error: error);
}