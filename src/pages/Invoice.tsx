import "../assets/css/Invoice.css"
import CustomerInterface from "../components/CustomerInterface.tsx";
import InvoiceInterface from "../components/InvoiceInterface.tsx";

function App() {

    return (
        <main className={"container"}>
            <div className={"title"}>
                <h2>Invoice</h2>
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

export default App;
