import * as React from "react";
import {useEffect} from "react";

const WindowSize =() => {

    const [size, setSize] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize =() => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        };
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="text-center p-5">
                <h1 className="bg-cf-dark-red text-xl text-white">
                    Window Size: {size.width} x {size.height}
                </h1>
            </div>
        </>
    )
}

export default WindowSize;