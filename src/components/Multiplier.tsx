import * as React from "react";
import MultiplierButton from "../components/MultiplierButton";

const Multiplier = () => {
    const [multiplier, setMultiplier] = React.useState(1);

    const IncreaseMult = () => {
        setMultiplier(multiplier * 2);
    };
    const DecreaseMult = () => {
        setMultiplier(multiplier / 2);
    };
    const ResetCount = () => {
        setMultiplier(1);
    };
    return (
        <>
            <div className="mt-10 flex flex-col justify-center items-center w-1/3 mx-auto rounded-md shadow-xl">
                <h1 className="m-2 p-2 text-2xl">Multiplying and Dividing by 2</h1>
                <h2 className="text-center font-mono m-2 p-2 border-2 rounded-sm inline-block">Number: {multiplier}</h2>
                <div className="text-center inline-flex items-center justify-center">
                    <MultiplierButton onClick={IncreaseMult}
                                      label="Multiply by 2"/>
                    <MultiplierButton onClick={DecreaseMult}
                                      disabled={multiplier < 1}
                                      label="Divide by 2"/>
                    <MultiplierButton onClick={ResetCount}
                                      label="Reset to 1"/>
                </div>
            </div>
        </>
    )
}

export default Multiplier;