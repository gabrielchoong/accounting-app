import "../assets/css/CustomerInterface.css"

function CustomerInterface(){
    return (
        <div className={"invoice"}>
            <div className={"invoice-item date"}>
                <h3>Date</h3>
                <input type="date"></input>
            </div>
            <h3>Customer Details</h3>
            <div className={"invoice-item customer"}>
                <div className={"customer-info"}>
                    <h4>Name</h4>
                    <input type="text"></input>
                </div>
                <div className={"customer-info"}>
                    <h4>Phone Number</h4>
                    <input type="text"></input>
                </div>
                <div className={"customer-info"}>
                    <h4>Car Model</h4>
                    <input type="text"></input>
                </div>
                <div className={"customer-info"}>
                    <h4>Car Registration Number</h4>
                    <input type="text"></input>
                </div>
            </div>
        </div>
    )
}

export default CustomerInterface;