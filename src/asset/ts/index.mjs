"use strict";
var _a;
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
    }
}
function deleteContact(id) {
    contacts = contacts.filter(contact => contact.id !== id);
    updateContactList();
}
function sortContacts() {
    contacts.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
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
function displayContact(contact) {
    const contactList = document.getElementById('contact-list');
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
    const deleteButton = contactItem.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        contacts = contacts.filter(c => c.id !== contact.id);
        contactList.removeChild(contactItem);
    });
}
contacts.forEach(displayContact);
(_a = document.getElementById("add-contact")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', addContact);
updateContactList();
