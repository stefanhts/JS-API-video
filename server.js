const express = require('express')
const app = express()
const port =  8080

app.use(express.json())

app.get('/', (req, res) =>{
    res.status(200).send({
        message: 'This is the index page',
    })
})

app.post('/home/:id', (req, res) =>{
    const { id } = req.params
    const { name } =  req.body

    if (!name){
        res.status(418).send({ message: 'We need a body!'})
    }

    res.status(200).send({ message: `Name is ${name} and ID is ${id}`})
})


app.listen(port, ()  => {
    console.log(`Server running on port ${port}`)
})



