import { useEffect } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";
import { useState, ChangeEvent, Dispatch, SetStateAction } from 'react';

import "./modal.css"

interface InputProps<T> {
    label: string;
    value: T;
    updateValue: Dispatch<SetStateAction<T>>;
}

interface ModalProps {
    closeModal(): void;
}

const Input = <T extends string | number>({ label, value, updateValue }: InputProps<T>) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateValue(e.target.value as T);
    }

    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={handleChange}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps) {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);
    const { mutate, isSuccess, isLoading } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            image
        };
        mutate(foodData);
    }

    useEffect(() => {
        if (!isSuccess) return
        closeModal()
    }, [closeModal, isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle} />
                    <Input label="price" value={price} updateValue={setPrice} />
                    <Input label="image" value={image} updateValue={setImage} />
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'Postando...' : 'Postar'}
                </button>
            </div>
        </div>
    )
}


/*import { useEffect } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";
import { useState, ChangeEvent } from 'react';

import "./modal.css"

interface InputProps {
    label: string;
    value: string | number;
    updateValue: React.Dispatch<React.SetStateAction<string | number>>;
}

interface ModalProps{
    closeModal(): void
}

const Input = ({label,value, updateValue}: InputProps) =>{
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        const newValue = e.target.value;
        updateValue(label === "price" ? parseFloat(newValue) : newValue);
    }
    
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={handleChange}></input>
        </>
    )
}

export function CreateModal({closeModal}: ModalProps){
    const [title,setTitle] = useState("");
    const [image,setImage] = useState("");
    const [price,setPrice] = useState(0);
    const { mutate, isSuccess , isLoading } = useFoodDataMutate();
    
    const submit = () =>{
        const foodData: FoodData ={
            title,
            price,
            image
        };
        mutate(foodData);
    }

    useEffect(() => {
        if(!isSuccess) return
        closeModal()
    }, [closeModal, isSuccess])


    return(
        <div className="modal-overlay">
            <div className="modal-body"></div>
            <h2>Cadastre um novo item no cardápio</h2>
            <form className="input-container">
                <Input label="title" value={title} updateValue={setTitle}/>
                <Input label="price" value={price} updateValue={setPrice} />
                <Input label="image" value={image} updateValue={setImage}/>

            </form>
            <button onClick={submit} className="btn-secondary">
                {isLoading ? 'Postando...' : 'Postado'}
            </button>
        </div>
    )
}*/