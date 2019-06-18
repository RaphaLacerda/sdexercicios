const express = require('express')

const app = express();
let db = [{
    name: "Abe",
    age: 20
}]

app.use(express.json());

app.get('/', (req, res, next) => {
    res.send(db);
});

app.post('/', (req, res) => {
    const reqBody = req.body;
    if (reqBody) {
        db.push({
            name: reqBody.name,
            age: reqBody.age
        });
        res.status(201).send("Person registered!")
    } else {
        res.status(500).send("An error has ocurred")
    }
})

app.put('/', (req, res) => {
    db.forEach((user) => {
        if (user.name === req.body.name) {
            user.name = req.body.newname
        }
    })
    res.status(201).send("Ok")
})

app.delete('/:personName', (req, res) => {
    db.forEach((user) => {
        if (user.name === req.params.personName) {
            let index = db.indexOf(user);
            db.splice(index, 1);
        }
    })
    res.status(201).send("Deleted.")

})

app.listen(3001);