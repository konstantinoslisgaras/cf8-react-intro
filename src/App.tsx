// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";

// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Card from "./components/Card.tsx";
import Layout from "./components/Layout.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import TestComponent from "./components/Test1.tsx";
// import Test1 from "./components/Test1.tsx";
import Multiplier from "./components/Multiplier.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// // import CounterButton from "./components/CounterButton.tsx";
// // import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// // import CounterAdvanced from "./components/CounterAdvanced.tsx";
// // import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// // import NameChangerWithEffect from "./components/NameChangerWithEffect.tsx";
import {useEffect} from "react";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import NameChangerWithEffect from "./components/NameChangerWithEffect.tsx";
import Timer from "./components/Timer.tsx";
import WindowSize from "./components/WindowSize.tsx";
// import Footer from "./components/Footer.tsx";
import FocusInput from "./components/FocusInput.tsx";

function App() {

    useEffect(() => {
        const id = setInterval(() => console.log("tick"), 1000);
            return() => clearInterval(id);
    }, [])

    useEffect(() => {
        let counter: number = 0;
        const id: number = setInterval(() => console.log(counter+= 5), 1000);
        return () => clearInterval(id);
    }, [])

  return (
    <>
    {/*<ViteIntro />*/}
    {/*    <ClassComponent />*/}
    {/*    <FunctionalComponent />*/}
    {/*    <ArrowFunctionalComponent />*/}
    {/*    <ArrowFunctionalComponentWithProps title="Is An Arrow Functional Component with Props" />*/}
    {/*    <ArrowFunctionalComponentWithProps />*/}
    {/*    <ArrowFunctionalComponentWithProps title="Second Arrow Functional Component with Props" />*/}
    {/*    <ArrowFunctionalComponentWithPropsType*/}
    {/*        title="Third Arrow Functional Component with Props"*/}
    {/*        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, similique!"/>*/}
    {/*    <Card title="Is a Card Functional Component">*/}
    {/*        <ArrowFunctionalComponentWithPropsType*/}
    {/*        title="Third Arrow Functional Component with Props"*/}
    {/*        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, similique!"*/}
    {/*        />*/}
    {/*    </Card>*/}
        <Layout>
            <Multiplier />
            <Timer />
            <WindowSize />
            <FocusInput />
        </Layout>
    </>
  )
}

export default App