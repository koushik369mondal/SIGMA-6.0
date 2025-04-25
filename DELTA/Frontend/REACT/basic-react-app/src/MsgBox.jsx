export default function MsgBox({userName, textColor}) {
    let styles = {color: textColor};
    return (
        <div className="msg-box" style={styles}>
            <h1>Hello {userName}</h1>
            <p>Welcome to the world of React</p>
        </div>
    );
}