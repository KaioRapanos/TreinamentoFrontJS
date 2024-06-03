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
            <p><b>Valor:  </b><p className="price">R$ {formattedPrice}</p></p>
            <button onClick={onEdit}></button>
        </div>
    )
}