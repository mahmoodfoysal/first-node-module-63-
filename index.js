const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello from my node server!!!')
})

const users = [
    {id: 0, name: 'Mahia', email: 'mahia@gmail.com', phone:'0111111111111'},
    {id: 1, name: 'Shabana', email: 'shabana@gmail.com', phone:'0111111111111'},
    {id: 2, name: 'Sabnur', email: 'sabnur@gmail.com', phone:'01156885225'},
    {id: 3, name: 'Srabonti', email: 'srabonti@gmail.com', phone:'01151552115'},
    {id: 4, name: 'Suchorita', email: 'suchorita@gmail.com', phone:'011117841561'},
    {id: 5, name: 'Sonia', email: 'sonia@gmail.com', phone:'0111114564561'}

]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query paramiter 
    if(search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
    
})

// app method post 
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('Hitting the post', req.body)
    // res.send(json.stringyfy(newUser))
    res.json(newUser)
})

// dynamic api 

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    console.log(res.send(user));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})