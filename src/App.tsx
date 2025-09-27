// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";

import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
import Card from "./components/Card.tsx";
import Layout from "./components/Layout.tsx";

function App() {

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
            <ArrowFunctionalComponentWithPropsType
                    title="Third Arrow Functional Component with Props"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, similique!"/>
        </Layout>
    </>
  )
}

export default App