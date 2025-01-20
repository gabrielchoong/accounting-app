import "../assets/css/Invoice.css"
import CustomerInterface from "../components/CustomerInterface.tsx";
import InvoiceInterface from "../components/InvoiceInterface.tsx";

import {create_invoice} from "../services/TauriCommands.ts";
import {invoke} from "@tauri-apps/api/core";

function Invoice() {

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

    const handleAddItem = async () => {
        /*
        * TODO: handle adding multiple items
        *  store items in memory
        *  clear text field
        *  only create invoice and add to db when handleCreateInvoice is called
        * */
    }

    const handleCreateInvoice = async (date: string, details: InvoiceItem[], customer: Customer) => {
        try {
            await create_invoice(date, details, customer);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className={"container"}>
            <div className={"title"}>
                <h2>Invoice</h2>
            </div>

            <div className={"invoice-item date"}>
                <h3>Date</h3>
                <input type="date"></input>
            </div>

            <div className={"content"}>
                <div className={"page-left"}>
                    <CustomerInterface/>
                </div>
                <div className={"page-right"}
                     style={{
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center",
                     }}>
                    <InvoiceInterface/>
                    <div className={"d-flex justify-content-center"}>
                        <button
                            className={"btn btn-primary"}
                            style={{marginLeft: "12.5px", marginRight: "auto"}}
                            onClick={handleAddItem}
                        >
                            Add item
                        </button>

                        <button
                            className={"btn btn-primary"}
                            style={{marginLeft: "12.5px", marginRight: "auto"}}
                            onClick={handleCreateInvoice}
                        >
                            Invoice
                        </button>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Invoice;
