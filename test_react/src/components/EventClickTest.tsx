import React, { useState } from 'react'




function EventClickTest() {
    const [text, setText] = useState("");

    //Handle click event
    function handleClick() {
        alert("Ban vua click")
    }

    //Handle change event
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value);
    }


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        alert("Your name: "+ text);
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <button onClick={handleClick}>Click me</button>
                <input type="text" onChange={handleChange} />
                <p>Bạn nhập: {text}</p>
                <input
                    type="text"
                    onChange={(e) => setText(e.target.value)} />
                <button type="submit">Gửi</button>
            </form>
        </>
    )
}

export default EventClickTest
