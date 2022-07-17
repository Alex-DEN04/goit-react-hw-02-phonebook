// import React from "react";
import Contact from '../Contact/Contact';

export default function ContactList({ items, onDeleteContact }) {
  return (
    <ul>
      {items.map(item => (
        <Contact key={item.id} item={item} onDeleteContact={onDeleteContact}></Contact>
      ))}
    </ul>
  );
}
