
type PropA = {
    title?: string;
}

type PropB = {
     description?: string;
}

type Props = PropA & PropB

// Same implementation with Interface.
//
// interface Props {
//     title?: string;
// }
//
// interface Props {
//     description?: string;
// }

const ArrowFunctionalComponentWithProps =({title, description}: Props) => {
    return (
        <>
            <h1 className="text-center text-xl fond-bold mt-12 accent-blue-600">{title}Default Title</h1>
            <p className="text-left font-bold text-sm">{description}</p>
        </>
    );
}

export default ArrowFunctionalComponentWithProps;