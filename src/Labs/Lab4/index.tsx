import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";
const handleClick = (parameter = "Hello") => {
    console.log(parameter)
}

export default function Lab4() {

    const alice = {
        first: 'Alice',
        last: 'Wonderland',
        salary: 100000
    };

    alice.salary = alice['salary'] + 10000

    function sayHello() {
        alert("Hello");
    }

    console.log(alice.salary);

    return (
        <div id="wd-lab4">
            <h3>Lab 4</h3>
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            {/* <button onClick={handleClick}>
                Hello
            </button> */}
        </div>

    )

}