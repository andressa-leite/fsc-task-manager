import { useState } from "react";
import Header from "./Header";

function Tasks() {
    const [inputValue, setInputValue] = useState("teste");
    const [messages, setMessages] = useState([
        "Hello World",
        "FSC is the best course in the world"
    ])

    function handleButtonClick(){
        setMessages([...messages, inputValue])
    }

    return (
        <div>
            <Header>
                <h1>Add Tasks</h1>
            </Header>
            <input
            className="input"
            type="text"
            placeholder="create your task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />

            <button className="button" onClick={handleButtonClick}>
                Add Task
            </button>

            <div>
                <ul>
                    {messages.map((message) => {
                        return <li>{message}</li>;
                    })}
                </ul>
            </div>

        </div>
    )
}

export default Tasks;