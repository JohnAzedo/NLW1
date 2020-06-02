import express from 'express'; 

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    console.log('Home page');

    
});

const users = [
    'João Pedro',
    'Luis Felipe',
    'Ana Maria',
    'Edglaudio',
    'Pedro Luis',
    'Mariana'
]

app.get('/users', (req, res) =>{
    // Using query params to search a string in users name
    const search = String(req.query.search);

    // If true, user remains in arrays!
    // Check if user include search value!
    // Query params aren't unique and need to be checked if they exist!
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    res.json(filteredUsers);
});

app.get('/users/:id', (req, res) => {
    // Using request params to get a specific user
    const id = Number(req.params.id);
    const user = users[id];
    return res.json(user);
})

app.post('/users', (req, res) => {
    const data = req.body

    console.log(data);

    const user = data;

    return res.json(user)
});

app.listen(3333);