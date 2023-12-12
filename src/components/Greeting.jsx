import { useState } from "preact/hooks";

export default function Greeting({messages}){
    const randomMessages = () =>messages[(Math.floor(Math.random() * messages.length))];
    const [greeting, setGreeting] = useState(messages[0]);

    return(
        <div>
            <h3>{greeting}! thanks for visiting</h3> 
            <button onClick={()=>setGreeting(randomMessages())}>New Greeting</button>
        </div>
    )
}