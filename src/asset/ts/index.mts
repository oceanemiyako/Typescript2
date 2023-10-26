
interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

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
        clearForm();
    }
}

function deleteContact(id: number) {
    contacts = contacts.filter(contact => contact.id !== id);
    updateContactList();
}

function sortContacts(key: string) {
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
    (document.getElementById("first-name") as HTMLInputElement).value;
    (document.getElementById("last-name") as HTMLInputElement).value;
    (document.getElementById("email") as HTMLInputElement).value;
    (document.getElementById("phone") as HTMLInputElement).value;
}

document.getElementById("add-contact").addEventListener('click', addContact);

updateContactList();
