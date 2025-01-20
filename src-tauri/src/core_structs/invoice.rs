use crate::core_structs::customer::Customer;
use crate::core_structs::invoice_item::{InvoiceItem, InvoiceItems};

use crate::utils::db::{delete_data, get_data_with_id, insert_data, update_data};

// This is the only place where frontend code should `invoke`
#[derive(Debug)]
pub struct Invoice {
    // pub invoice_number: i32,
    pub date: String,
    pub details: Vec<InvoiceItem>,
    pub customer: Customer,
}

// The app should not explicitly set the date for any invoice
// This special case occurs when a handwritten invoice is
// required to be added into the database manually

#[tauri::command]
pub fn create_invoice(
    date: String,
    details: InvoiceItems,
    customer: Customer,
) -> Result<(), String> {
    insert_data(date, details, customer, None)
        .map_err(|e| e.to_string())?;

    Ok(())
}

pub fn get_invoice_with_id(invoice_number: i32) -> Result<Invoice, rusqlite::Error> {
    let invoice = get_data_with_id(invoice_number, None);

    invoice
}

pub fn update_invoice(invoice_number: i32) -> Result<(), rusqlite::Error> {
    update_data(invoice_number, None, None, None)?;

    Ok(())
}

pub fn delete_invoice(invoice_number: i32) -> Result<(), rusqlite::Error> {
    delete_data(invoice_number, None)?;

    Ok(())
}

// optional

#[warn(dead_code)]
pub fn export_invoice(_keyword: &str) {}
