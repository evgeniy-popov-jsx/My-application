import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card"

type CardProps = {
    id: number,
    image: string,
    name: string,
    status: string,
}

export const CardList: React.FC = () => {
    const [cards, setCards] = useState<CardProps[]>();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const URL_API = 'https://rickandmortyapi.com/api/character';
        axios.get(URL_API).then((response) => {
            setCards(response.data.results);
        })
        .catch(error => {
            setError(error);
          })
      }, [setCards]);
      if (!cards) return null;

    return (
        <div className='card_list'>
            {cards.map(cards=>(<Card key={cards.id} image={cards.image} name={cards.name} status={cards.status} />))}
        </div>
       
    )
}