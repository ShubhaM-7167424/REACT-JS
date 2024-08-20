import "./App.css";
import Product from "./Product";
import User from "./User";

function App() {
    return (
        <div>
            <h1>Main Component</h1>

            <Product
                name="Samsung M51"
                price="10000"
                specs={{ ram: "2gb", size: "19cm" }}
                category={["Electronics", "mobile"]}
            />

            <Product
                name="DSLR Camera"
                price="150000"
                specs={{ ram: "4gb", size: "22cm" }}
                category={["Electronics", "mobile"]}
            />

            <User name="Kamal" age="35"></User>
        </div>
    );
}

export default App;
