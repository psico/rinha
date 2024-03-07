const app = require('../src/app');
const port = parseInt(process.env.PORT || '8080');

app.listen(port, function() {
    console.log(`O app subiu na porta ${port}`);
})

