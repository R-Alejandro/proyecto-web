const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req, res) => {
    res.send({
        message : "Hello Word de prueba"
    });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el port: ${PORT}`);
});