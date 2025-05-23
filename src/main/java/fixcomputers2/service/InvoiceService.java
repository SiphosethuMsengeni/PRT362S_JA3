package fixcomputers2.service;

import fixcomputers2.model.Invoice;
import fixcomputers2.repository.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class InvoiceService {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private NotificationService notificationService;

    public Invoice generateInvoice(String customerName, String description, double cost) {
        Invoice invoice = new Invoice();
        invoice.setCustomerName(customerName);
        invoice.setServiceDescription(description);
        invoice.setCost(cost);
        invoice.setDateGenerated(LocalDateTime.now());
        Invoice savedInvoice = invoiceRepository.save(invoice);

        notificationService.sendNotification(
                "customer@example.com",
                "Invoice Generated",
                "Your invoice for the service: " + description + " has been generated. Total: $" + cost
        );

        return savedInvoice;
    }

    public List<Invoice> getAllInvoices() {
        return invoiceRepository.findAll();
    }
}
