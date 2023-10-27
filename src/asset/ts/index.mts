import Contact from "./Contact.js";

let contacts: Contact[] = [];
let contactId = 1;

function addContact() {
    const firstName = (document.getElementById("first-name") as HTMLInputElement).value;
    const lastName = (document.getElementById("last-name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;

    if (firstName && lastName && email && phone) {
        const newContact: Contact = {
            id: contactId++,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone
        };

        contacts.push(newContact);
        updateContactList();
    }
}

function deleteContact(id: number) {
    contacts = contacts.filter(contact => contact.id !== id);
    updateContactList();
}

function sortContacts() {
    contacts.sort((a, b) => (a.firstName > b.firstName ? 1 : -1)); 
    updateContactList();
}

function updateContactList() {
    const contactList = document.getElementById('contact-list')!;
    contactList.innerHTML = '';

    for (const contact of contacts) {
        const contactDiv = document.createElement('div');
        contactDiv.innerHTML = `
            <p>${contact.firstName} ${contact.lastName}</p>
            <p>Email: ${contact.email}</p>
            <p>Téléphone: ${contact.phone}</p>
            <button onclick="deleteContact(${contact.id})">Supprimer</button>
        `;
        contactList.appendChild(contactDiv);
    }
}

function displayContact(contact: Contact) {
    const contactList = document.getElementById('contact-list')!;
    const contactItem = document.createElement("div");
    contactItem.classList.add("contact-item");
    contactItem.innerHTML = `
        <span>Prénom: ${contact.firstName}</span>
        <span>Nom: ${contact.lastName}</span>
        <span>Email: ${contact.email}</span>
        <span>Téléphone: ${contact.phone}</span>
        <button class="delete-button" data-id="${contact.id}">Supprimer</button>
    `;
    contactList.appendChild(contactItem);

    const deleteButton = contactItem.querySelector(".delete-button") as HTMLButtonElement;
    deleteButton.addEventListener("click", () => {
        contacts = contacts.filter(c => c.id !== contact.id);
        contactList.removeChild(contactItem);
    });
}

contacts.forEach(displayContact);

document.getElementById("contact-form")?.addEventListener('submit', (event) => {
    event.preventDefault()
    addContact()
});

updateContactList();
