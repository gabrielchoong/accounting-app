import "../assets/css/Invoice.css"
import CustomerInterface from "../components/CustomerInterface.tsx";
import InvoiceInterface from "../components/InvoiceInterface.tsx";

function Invoice() {

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
                <div className={"page-right"}>
                    <InvoiceInterface/>
                </div>
            </div>

        </main>
    );
}

export default Invoice;
