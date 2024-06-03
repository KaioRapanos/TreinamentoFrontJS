import "./card.css"

interface CardProps {
    price: number,
    title: string,
    image: string,
    onEdit: () => void;
}

export function Card({price,title,image,onEdit} : CardProps){
    const formattedPrice = price.toFixed(2);
    return(
        <div className="card">
            <img src={image}/>
            <h2>{title}</h2>
            <p><b>Valor:</b>{formattedPrice}</p>
            <button onClick={onEdit}>Editar</button>
        </div>
    )
}