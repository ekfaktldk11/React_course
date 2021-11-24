// card mean such a container
import { Children } from 'react';
import './Card.css'

const Card = (props) => {
  return <div className='card'>{props.Children}</div>;
}

export default Card;