import { useState} from 'react'
import './App.css'
import data from './Contacts.json'
import ContactList from './components/ContaktList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import ContactForm from './components/ContactForm/ContactForm'
import {nanoid} from 'nanoid'


function App() {

  const[contacts, setContacts] = useState(data)
  const[searchName, setSearchName] = useState('')
  const[newName, setNewName] = useState({
    name: '',number: ''
  })

  function newContact(){
 const newItem = {id: nanoid(), name: newName.name, number: newName.number}
 setContacts([...newContacts, newItem]) 
 setNewName({
  name: '',number: ''
})
  }

  function handleDelContact(id){
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  function getName(){
   return contacts.filter(contact => contact.name.toLowerCase().includes(searchName.toLowerCase()))
  }

  const newContacts = getName()

 return (
  <div>
    <ContactForm value={newName} handler={setNewName} forButton={newContact}/>
    <SearchBox value={searchName} handler={setSearchName}/>
<ContactList list={newContacts} handler={handleDelContact}/>
  </div>
 )
}

export default App
