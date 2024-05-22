

const app = require('./src/app');
const { conn } = require('./src/db');
const PORT = process.env.PORT ?? 3002;

conn.sync({alter:true}).then(() =>{
    app.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}`);
    });
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Internal server error', err);
})

