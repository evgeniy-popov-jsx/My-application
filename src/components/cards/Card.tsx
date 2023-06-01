import { ButtonAdd } from "../button-add/button-add"

type CardProps = {
    image: string,
    name: string,
    status: string,
}

export const Card: React.FC <CardProps>= (props) => {
const { image, name, status} = props;

    return (
            <div className="card">
                <div className='card_photo'>
                    <img src={image} alt='' />
                </div>
                <div className='card_name'>{name}</div>
                <div className='card_job'>{status}</div>
                <ButtonAdd />
            </div>
    )
}