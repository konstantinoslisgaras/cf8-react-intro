import * as React from "react";

const NameChanger =() => {

    const [name, setName] = React.useState("");
    const handleNameChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    return (
        <>
            <h1 className="text-center text-xl m-5">Hello {name || "Stranger..."}</h1>
            <div className="text-center">
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Enter your name..."
                    className="border px-4 p-1"
                />
            </div>
        </>
    )
}

export default NameChanger;