import {useRef} from "react";

const FocusInput =() => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick =() => {
        inputRef.current?.focus();
    }

    return (
        <>
            <div className="text-center space-x-4 mt-4">
                <input
                    ref={inputRef}
                    className="border px-4 py-2" type="text"/>
                <button
                    className="bg-cf-dark-gray text-white py-2 px-4"
                    onClick={handleClick}
                >
                    Focus
                </button>
            </div>
        </>
    )
}

export default FocusInput;