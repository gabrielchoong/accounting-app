import "../assets/css/InvoiceInterface.css"

function InvoiceInterface() {
    return (
        <div className={"invoice"}>
            <h3>Item Details</h3>
            <div className={"invoice-item parts"}>
                <div className={"unit-price"}>
                    <h4>Item Description</h4>
                    <input type={"text"}></input>
                </div>
                <div className={"unit-price"}>
                    <h4>Quantity</h4>
                    <input type={"text"}></input>
                </div>
                <div className={"unit-price"}>
                    <h4>Unit Price</h4>
                    <input type={"text"}></input>
                </div>
            </div>
        </div>
    )
}

export default InvoiceInterface;