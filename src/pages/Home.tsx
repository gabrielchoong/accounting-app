function Home() {

    const dashboard: String = "<p> This area could be used to display the overall metrics. </p>";
    return (
        <main className={"container"}>

            <h2>MB Auto Service Centre</h2>

            <p style={{fontSize: "20px"}}>{dashboard}</p>

        </main>
    )
}

export default Home;