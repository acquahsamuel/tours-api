const app = require('./app');


const port = 8000 || process.env.PORT

app.listen(`${port}`, () => {
    console.log(`Listening on port ${port}`)
})
