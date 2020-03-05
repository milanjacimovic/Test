import axios from 'axios'
const app = document.querySelector('#app')

let contacts = []
axios.get('http://localhost:3000/contacts')
    .then(res => {
        contacts = res.data
        renderList(contacts)
    })


const Form = () => {
    const form = document.createElement('form')

    const inputName = document.createElement('input')
    inputName.type = 'text'
    inputName.placeholder = 'Име контакта'
    form.appendChild(inputName)

    const inputNumber = document.createElement('input')
    inputNumber.type = 'text'
    inputNumber.placeholder = 'Број'
    form.appendChild(inputNumber)

    const submitBtn = document.createElement('input')
    submitBtn.type = 'submit'
    submitBtn.value = 'Додај'
    form.appendChild(submitBtn)



    const pronadjiOsobu = document.createElement('input')
    form.append(pronadjiOsobu)
    pronadjiOsobu.type = 'text'
    pronadjiOsobu.addEventListener('input', () => {
        const filtrirani = contacts.filter(contact => contact.name.includes(pronadjiOsobu.value))

        renderList(filtrirani)
        console.log(filtrirani);



    })

    form.addEventListener('submit', e => {
        e.preventDefault()
        if (inputName.value.trim() == '' || inputNumber.value.trim() == '') {
            console.warn('Поља не могу бити празна')
            return
        }
        addContact(inputName.value, inputNumber.value)
        inputName.value = '';
        inputNumber.value = ''

    })

    return form
}

app.appendChild(Form())

const addContact = (name, number) => {
    if (contacts.find(el => el.name == name)) {
        console.warn(`Већ постоји контакт са именом '${name}'`)
        return
    }

    axios.post('http://localhost:3000/contacts', { name, number })
        .then(res => {
            contacts.push(res.data)
            renderList(contacts)
        })

}

const ContactList = (contacts) => {
    const list = document.createElement('ul')
    list.id = "contact-list"

    contacts.forEach(contact => {
        let item = document.createElement('li')
        item.textContent = `${contact.name} - ${contact.number}`
        list.appendChild(item)
        let dugmence = document.createElement('button')
        item.append(dugmence)
        dugmence.innerHTML='OBRISI'
        dugmence.addEventListener('click', ()=>{
            item.remove()
            axios.delete(`http://localhost:3000/contacts/${contact.id}`)
        })
    })


    return list


}
app.appendChild(ContactList(contacts))

const renderList = (contacts) => {
    document.querySelector('#contact-list').remove()
    app.appendChild(ContactList(contacts))
}
