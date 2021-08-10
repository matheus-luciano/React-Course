import './Card.css'

function Card(props){
    const classes = 'card ' + props.className; // Lembra do espaço depois do nome da classe default

    return <div className={classes}>{props.children}</div>; 
}


export default Card;