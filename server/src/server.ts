import express from 'express'; 

const app = express()

app.get('/', (req, res) => {
    console.log('Home page');

    res.json([
        'João Pedro',
        'Luis Felipe',
        'Ana Maria',
        'Edglaudio'
    ]);
});

app.get('/users', (req, res) =>{
    console.log('Listagem de usuários');
    res.send('Hello World New User');
});

app.listen(3333);