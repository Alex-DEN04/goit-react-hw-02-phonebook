export default function Contact ({item, onDeleteContact}) {
    return (
        <li>{item.name}: {item.number}
            <button type='button' onClick={() => onDeleteContact(item.id)}>Delete</button>
        </li>)  
}
