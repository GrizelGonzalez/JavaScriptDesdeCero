const users = [
  {
    id: 1,
    name: "Dorian",
  },
  {
    id: 2,
    name: "Laura",
  },
  {
    id: 3,
    name: "Jose",
  },
];

const emails = [
  {
    id: 1,
    email: "dorian@gmail.com",
  },
  {
    id: 2,
    email: "Laura@gmail.com",
  },
];

const getUser = (id, cb) => {
  const user = users.find((user) => user.id == id);
  if (!user) cb(`Not exist user with id ${id}`);
  else cb(null, user);
};
const getEmail = (user, cb) => {
  const email = emails.find((email) => email.id == user.id);
  if (!email) cb(`${user.name} hasn´t email`);
  else
    cb(null, {
      id: user.id,
      name: user.name,
      email: email.email,
    });
};

getUser(2, (err, user) => {
  if (err) return console.log(err);

  getEmail(user, (err, res) => {
    if (err) return console.log(err);
    console.log(res);
  });
});
