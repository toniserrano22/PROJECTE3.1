const express = require('express');

const bcrypt = require('bcryptjs');
const app = express();

/**
 * SERVEI
 */

/** GET */

app.get("/servei", (req,res) => {
    Servei.find({}, "nomServei disponible quantitat ultimoPedido precio").exec((err, serveis) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }
        res.json({
            ok: true,
            serveis,
        });
    });
});