const express = require('express');
const bcrypt = require('bcryptjs');
const app = express();


const Client = require("../models/client");

/**
 * CLIENTS
 */

/**
 * GET
 */

app.get("/client", (req,res) => {
    Client.find({}, "nomClient email password descripcio cognom telefon edat").exec((err, clients) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }
        res.json({
            ok: true,
            clients,
        });
    });
});

/**
 * POST
 */

app.post("/client", (req,res) => {
    const {nomClient, email, password, descripcio, cognom, telefon, edat} = req.body;
    let client = new Client({
        nomClient,
        email,
        password: bcrypt.hashSync(password,10),
        descripcio,
        cognom,
        telefon,
        edat,
    });
    client.save((err, clientDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }
        res.json({
            ok: true,
            user: clientDB,
        });
    });
});

/**
 * DELETE
 */

app.delete("client",(req,res) => {
    Client.deleteOne({_id: req.body.id}, (err) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        };
        res.json({
            ok: true,
        });
    });
})

module.exports = app
