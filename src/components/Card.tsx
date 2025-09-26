import * as React from "react";

type CardProps = {
    title: string;
    children: React.ReactNode;
}

const Card =({title, children}: CardProps) => {
    return (
        <>
            <div className="card bg-red-300">
                <h2>{title}</h2>
                {children}
                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consectetur cupiditate dignissimos, obcaecati repellendus
                    reprehenderit sed sequi soluta suscipit ut voluptates.
                    Dolorem excepturi itaque nesciunt perferendis similique tempore tenetur. Adipisci, cumque!</span></p>
            </div>
        </>
    )
}

export default Card;