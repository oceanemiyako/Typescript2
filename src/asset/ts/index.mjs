"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let contacts = [];
let contactId = 1;
function addContact() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    if (firstName && lastName && email && phone) {
        const newContact = {
            id: contactId++,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone
        };
        contacts.push(newContact);
        updateContactList();
        clearForm();
    }
}
function deleteContact(id) {
    contacts = contacts.filter(contact => contact.id !== id);
    updateContactList();
}
function sortContacts(key) {
    contacts.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    updateContactList();
}
function updateContactList() {
    const contactList = document.getElementById('contact-list');
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
function clearForm() {
    document.getElementById("first-name").value;
    document.getElementById("last-name").value;
    document.getElementById("email").value;
    document.getElementById("phone").value;
}
document.getElementById("add-contact").addEventListener('click', addContact);
updateContactList();
