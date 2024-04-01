import css from "./Contact.module.css"

function Contact({id, name, number, handler}){
return (
    <li className={css.item} key={id}><p className={css.contacts}><span>{name}</span><span>{number}</span></p><button onClick={() => {handler(id)}} type="button">{"delete"}</button></li>
)
}

export default Contact