import * as React from "react";

const Counter =() => {
    const [count, setCount] = React.useState(1);

    const increaseCount = () => {
        setCount(count * (Math.random() * 5));
    }
    const decreaseCount = () => {
        setCount(count - (Math.random() * 10));
    }
    const resetCount = () => {
        setCount(1);
    }
    return (
        <>
            <h1 className="text-center text-2xl my-12">Count is <strong>{count}</strong></h1>
            <div className="text-center mt-12 space-x-4">
                <button className="bg-cf-dark-red text-pink-100 py-2 px-4"
                        onClick={increaseCount}
                >
                    Increase
                </button>
                <button className="bg-cf-dark-red text-pink-100 disabled:text-red-400 py-2 px-4"
                        onClick={decreaseCount}
                        disabled={count <= 0}
                >
                    Decrease
                </button>
                <button className="bg-cf-dark-red text-pink-100 disabled:text-red-400 py-2 px-4"
                        onClick={resetCount}
                        disabled={count <= 0}
                >
                    Reset
                </button>
            </div>
        </>
    )
}

export default Counter;