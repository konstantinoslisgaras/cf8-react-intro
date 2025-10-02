import * as React from "react";


const FunctionalComponentWithState =() => {
    const [count, setCount] = React.useState(2);

    const IncreaseCount = () => {
        setCount(count * 2 * 2);
    }
    return (
        <>
            <h1 className="text-center my-12">Count is <strong>{count}</strong></h1>
            <div className="text-center mt-12">
                <button className="bg-cf-dark-red text-pink-200 py-2 px-4"
                        onClick={IncreaseCount}
                >
                    Increase
                </button>
            </div>
        </>
    )
}

export default FunctionalComponentWithState;