
type Props = {
    title?: string;
}

const ArrowFunctionalComponentWithProps =({title}: Props) => {
    return (
        <>
            <h1 className="text-center text-xl fond-bold mt-12 bg-teal-600">{title}Default Title</h1>
        </>
    );
}

export default ArrowFunctionalComponentWithProps;