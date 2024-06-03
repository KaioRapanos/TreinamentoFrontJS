import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { FoodModal } from './components/create-modal/create-modal';
import { FoodData } from './interface/FoodData';

function App() {
 
  const {data} = useFoodData();
  const [isModalOpen, setIsModalOpen]= useState(false);
  const [selectedFood, setSelectedFood]= useState<FoodData | undefined>(undefined);

  const handleOpenModal = (food?: FoodData) => {
    setSelectedFood(food || undefined);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  useEffect(() => {
    if(!isModalOpen){
      setSelectedFood(undefined);
    }
  }, [isModalOpen]);

  return (
    
      <div className="container">
        <h1>Cardápio</h1>
        <div className="card-grid">
          {data?.map((foodData: FoodData)=>( 
            <Card 
              key={foodData.id}
              price={foodData.price} 
              title={foodData.title} 
              image={foodData.image}
              onEdit={() => handleOpenModal(foodData)}
            />
          ))}
          </div>
          {isModalOpen && (
            <FoodModal closeModal={handleCloseModal} foodData={selectedFood}/>
          )}
          <button className={isModalOpen ? 'hidden' : ''} 
            onClick={() => handleOpenModal()}>novo
          </button>
      </div>
      
    
  )
}

export default App
