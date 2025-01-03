function App() {
    return (
        <div>
            Hello Sir
            <Mobile nameForClass="mobile" name="lava 6" salary={45000} />
            <Mobile nameForClass="phone" name="iphone 13" />
            <Mobile nameForClass="tele" name="vivo v25" salary={5000000} />
        </div>
    );
}

function Mobile({ nameForClass, name, salary = 1000 }) {
    return (
        <div className={nameForClass}>
            {name}: ${salary}
        </div>
    );
}

function MyComponent() {
    return <h1>Namaste</h1>;
}

export default App;
