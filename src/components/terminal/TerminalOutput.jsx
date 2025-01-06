function TerminalOutput({ outputHTML }) {
    return (
        <div
            className="terminal-output"
            dangerouslySetInnerHTML={{__html: outputHTML}}
        />
    )
}

export default TerminalOutput;