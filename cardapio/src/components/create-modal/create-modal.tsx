import { useEffect } from "react";
import { useFoodData } from "../../hooks/useFoodData"
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";

import "./modal.css"

interface InputProps{
    label: string,
    value: string | number,
    updateValue (value: string | number): void
}

interface ModalProps{
    closeModal(): void
}

const Input = ({label,value, updateValue}: InputProps) =>{
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)}></input>
        </>
    )
}


export function CreateModal({closeModal}: ModalProps){
    const [title,setTitle] = useState("");
    const [image,setImage] = useState("");
    const [price,setPrice] = useState(0);
    const { mutate, isSucess , isLoading } = useFoodDataMutate();

    import "./modal.css"
    
    const submit = () =>{
        const foodData: FoodData ={
            title,
            price,
            image
        }
        mutate(foodData)
    }

    useEffect(() => {
        if(!isSucess) return
        closeModal()
    }, [isSucess])


    return(
        <div className="modal-overlay">
            <div className="modal-body"></div>
            <h2>Cadastre um novo item no cardápio</h2>
            <form className="input-container">
                <Input label="title" value={title} updateValue={setTitle}/>
                <Input label="price" value={price} updateValue={setPrice}/>
                <Input label="image" value={image} updateValue={setImage}/>

            </form>
            <button onClick={submit} className="btn-secondary">
                {isLoading ? 'Postando...' : 'Postado'}
            </button>
        </div>
    )
}