import "../assets/css/Invoice.css"
import CustomerInterface from "../components/CustomerInterface.tsx";
import InvoiceInterface from "../components/InvoiceInterface.tsx";

function Invoice() {

    const handleAddItem = () => {
        console.log("Item added");
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
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Invoice;
