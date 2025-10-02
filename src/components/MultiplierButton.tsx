type ButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    label: string;
}

const MultiplierButton = ({ onClick, disabled = false, label }: ButtonProps) => {
    return (
        <>
            <button
                className="
                bg-cf-dark-red text-pink-100 py-2 px-4 m-2 rounded-lg
                hover:bg-red-800 transition-colors
                disabled:text-yellow-600 disabled:cursor-not-allowed"
                onClick={onClick}
                disabled={disabled}
                >
                {label}
            </button>
        </>
    )
}

export default MultiplierButton;