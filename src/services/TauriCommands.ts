import {invoke} from "@tauri-apps/api/core";

type Car = {
    car_model: string;
    car_reg_number: string;
}

type Customer = {
    customer_id: number;
    customer_name: string;
    phone_number: string;
    car: Car;
}

type InvoiceItem = {
    description: string,
    quantity: number,
    unit_price: number,
}

export const create_invoice = async (date: string, details: InvoiceItem[], customer: Customer) => {
    await invoke("create_invoice", {date, details, customer})
        .catch((error) => console.error(error));

}