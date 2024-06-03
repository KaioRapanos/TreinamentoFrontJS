import { useEffect, useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate"; 
import { FoodData } from "../../interface/FoodData";
import { useDeleteFoodDataMutate } from "../../hooks/useDeleteFoodDataMutale";

import "./modal.css"

interface InputProps<T> {
    label: string;
    value: T;
    updateValue: Dispatch<SetStateAction<T>>;
}

interface ModalProps {
    closeModal(): void;
    foodData?: FoodData;
}

const Input = <T extends string | number>({ label, value, updateValue }: InputProps<T>) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (typeof value === 'string' && label === "price") {
            updateValue(newValue.replace(",", ".") as T);
        } else {
            updateValue(newValue as T);
        }
    }

    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={handleChange} />
        </>
    );
}

export function FoodModal({ closeModal, foodData }: ModalProps) {
    const [title, setTitle] = useState(foodData?.title || "");
    const [image, setImage] = useState(foodData?.image || "");
    const [price, setPrice] = useState(foodData?.price || 0);

    const [error, setError] = useState("");

    const isUpdateMode = Boolean(foodData);
    const foodId = foodData?.id ? foodData.id.toString() : undefined;
    const { mutate, isSuccess, isLoading } = useFoodDataMutate();
    const { mutateAsync: deleteFood, isSuccess: isDeletedSuccess, isLoading: isDeleting } = useDeleteFoodDataMutate();

    const submit = () => {
        if (!title || !image || !price) {
            setError("Todos os campos são obrigatórios.");
            return;
        }
        if (isNaN(Number(price))) {
            setError("O preço deve ser um número válido.");
            return;
        }

        setError("");
        const food: FoodData = { title, price: Number(price), image };

        mutate(
            { id: foodId, data: food },
            {
                onSuccess: () => {
                    console.log(isUpdateMode ? "Food Updated successfully" : "Food Created successfully");
                    closeModal();
                },
                onError: (error) => {
                    console.error(isUpdateMode ? "Failed to update food: " : "Failed to create food: ", error);
                }
            }
        );
    }

    const handleDelete = async () => {
        if (!foodId) return;
        try {
            await deleteFood(foodId);
            closeModal();
        } catch (error) {
            console.error("Erro ao excluir alimento:", error);
            setError("Erro ao excluir alimento. Por favor, tente novamente.");
        }
    };

    useEffect(() => {
        if (foodData) {
            setPrice(foodData?.price || 0);
            setImage(foodData?.image || "");
            setTitle(foodData?.title || "");
        }
        if (isSuccess || isDeletedSuccess) {
            closeModal();
        }
    }, [foodData, closeModal, isSuccess, isDeletedSuccess]);

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <button className="close-button" onClick={closeModal}>X</button>
                <h2>
                    {isUpdateMode ? "Atualize o item no cárdapio" : "Cadastre um novo item no cardápio"}
                </h2>
                {error && <div className="error-message">{error}</div>}
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle} />
                    <Input label="price" value={price} updateValue={setPrice} />
                    <Input label="image" value={image} updateValue={setImage} />
                </form>
                <div className="button-container">
                    <button onClick={submit} className="btn-secondary">
                        {isLoading ? 'Postando...' : 'Postar'}
                    </button>
                    {isUpdateMode && (
                        <button onClick={handleDelete} className={["btn-secondary", "btn-excluir"].join(" ")} disabled={isDeleting}>
                            {isDeleting ? "Excluindo..." : "Excluir"}
                    </button>
                    )}
                </div>
            </div>
        </div>
    );
}
