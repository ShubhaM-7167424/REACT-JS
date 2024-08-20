import { useState } from "react";

function User(props) {

      // let name = 'Shubham'
      let [name, setName] = useState('Shubham');

      let [age, setAge] = useState(20);

      function changeName() {
            // name = 'Rahul'
            setName(props.name)
      }
      function changeAge() {
            setAge(props.age)
      }
      function doSomething(planet) {
            console.log('Hello ' +planet);
      }


    return (
        <div className="user">
            <h1> {name} </h1>
            <h1> {age} </h1>
            <button onClick={changeName}>Change Name</button>
            <button onClick={changeAge}>Change Age</button>

            <button onClick={doSomething.bind(this, 'Mars')}>Do Something</button>
            
            <button onClick={function () {
                  doSomething('Pluto')
            }}>Do Something</button>
        </div>
    );
}

export default  User;