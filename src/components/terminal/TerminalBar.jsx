import { useState, useEffect } from "react";

function TerminalBar() {
    const [ip, setIp] = useState("127.0.0.1");

    useEffect(() => {
        async function fetchUserIp() {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            setIp(data.ip);
        }
        fetchUserIp();
    }, [])

    return (
        <div className="terminal-bar">
            <div className="control-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
            <div className="ip-address">{ip}</div>
        </div>
    )
}

export default TerminalBar;