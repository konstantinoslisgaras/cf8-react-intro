import CounterButton from "./CounterButton.tsx";
import * as React from "react";
import {useEffect, useRef} from "react";

const PreviousValue =() => {
    const [count, setCount] = React.useState(0);

    const prevCountRef = useRef<number | null>(null);

    useEffect(() => {
        prevCountRef.current = count;
        console.log("prevCountRef", prevCountRef.current);
    }, [count])

    return (
        <>
            <div className="text-center pt-12">

                <h1 className="text-2xl mb-4">Value: {count}</h1>
                <h2 className="text-xl mb-4">Previous value: {prevCountRef.current ?? "-"}</h2>
                <CounterButton
                    onClick={() => setCount((prev) => prev + 1)}
                    label="Increase"/>
            </div>
        </>
    )
}

export default PreviousValue;