import Button from "./Button"

export default function Buttons(){

    const buttonNames = [
        "C",
        "1",
        "2",
        "+",
        "3",
        "4",
        "-",
        "5",
        "6",
        "*",
        "7",
        "8",
        "/",
        "0",
        "9",
        ".",
        "="
    ]

    
    
    return (
        <div className="buttons d-flex flex-wrap justify-content-between mt-3 m-3" style={{rowGap:'0.4rem'}}>
            {buttonNames.map(item =>(
                <Button item={item} />
            ))}
        </div>
    )
}
