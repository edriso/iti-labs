const fs = require("fs");

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

// display all contacts
const contacts = [
  {
    id: 1,
    name: "Ahmed",
    phone: "1234",
  },
  {
    id: 2,
    name: "Ali",
    phone: "5678",
  },
];

const count = contacts.length;

app.get("/", (req, res) => {
  let tableBody = contacts.map((person) => {
    return `<tr><td>${person.name}</td>
    <td>${person.phone}</td></tr>
    <td><a href="/update-contact/?id=${person.id}">Edit</a></td></tr>
    <td><a href="/delete-contact/?id=${person.id}">Delete</a></td></tr>
    `;
  });

  tableBody = tableBody.join("\n");

  let html = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Contacts</title>
  </head>
  <body>
    <h1>My Contacts</h1>
    <form action="/add-contact" method="post">
      <input type="text" name="name" placeholder="Contact Name" />
      <input type="text" name="phone" placeholder="Contact Phone" />

      <button type="submit">Add Contact</button>
    </form>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        ${tableBody}
      </tbody>
    </table>
  </body>
</html>
`;

  res.send(html);
});

// a new contact
// app.get("/add-contact", (req, res) => {
//   res.status(200).sendFile(`${__dirname}/html/add-contact.html`);
// });

app.post("/add-contact", (req, res) => {
  const { name, phone } = req.body;

  if (name && phone) {
    count += 1;
    const newContact = {
      //   id: new Date().valueOf(),
      id: count,
      name,
      phone,
    };

    contacts.push(newContact);

    res.send("Contact Added!");
  } else {
    res.status(404).send("You must type a name, and a phone number");
  }
});

// update contact
app.get("/update-contact", (req, res) => {
  let contact = contacts.find((person) => person.id == req.query.id);
  console.log(contact);
  if (contact) {
    let html = `
    <form action="/update-contact" method="post">
      <input type="hidden" name="id" value=${contact.id} placeholder="Contact Name" />
      <input type="text" name="name" value=${contact.name} placeholder="Contact Name" />
      <input type="text" name="phone" value=${contact.phone} placeholder="Contact Phone" />

      <button type="submit">Update Contact</button>
    </form>
    `;

    res.status(200).send(html);
  } else {
    res.status(404).send("Contact not found!");
  }
});

app.post("/update-contact", (req, res) => {
  const updatedContact = { ...req.body };

  const contactIndex = contacts.findIndex(
    (person) => person.id == updatedContact.id
  );

  contacts[contactIndex] = updatedContact;

  res.send("<script>location='/'</script>");
});

// delete contact
app.get("/delete-contact", (req, res) => {
  const contactIndex = contacts.findIndex(
    (person) => person.id == req.query.id
  );

  contacts.splice(contactIndex, 1);

  //   res.send("<script>location='/'</script>");
  res.redirect("/");
});

// saving
// function saveContacts() {
//   fs.writeFileSync(
//     `${__dirname}/data/contacts.json`,
//     JSON.stringify(contacts),
//     (err) => {
//       if (err) console.log(err);
//     }
//   );
// }

// saveContacts();

const port = 3000;
app.listen(port, () =>
  console.log(`Server is up and running on port ${port}...`)
);
