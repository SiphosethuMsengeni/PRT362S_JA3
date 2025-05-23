package fixcomputers2.controller;

import fixcomputers2.model.Invoice;
import fixcomputers2.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/invoices")
public class InvoiceController {

    @Autowired
    private InvoiceService invoiceService;

    @PostMapping("/generate")
    public ResponseEntity<Invoice> generateInvoice(@RequestBody Invoice invoice) {
        Invoice created = invoiceService.generateInvoice(
                invoice.getCustomerName(),
                invoice.getServiceDescription(),
                invoice.getCost()
        );
        return ResponseEntity.ok(created);
    }

    @GetMapping
    public ResponseEntity<List<Invoice>> getAllInvoices() {
        return ResponseEntity.ok(invoiceService.getAllInvoices());
    }
}