const express = require('express');
const bcrypt = require('bcryptjs');
const app = express();

const User = require("../models/user");


/**
 * USER
 */

/**
 * GET
 */

app.get("/user", (req,res) => {
    User.find({}, "nomUsuari email password adreca telefon").exec((err, usuaris) => {
        if (err) {
            return res.status(400).json({
                ok:false,
                err,
            });
        }
        res.json({
            ok: true,
            usuaris,
        });
    });
});

/**
 * POST
 */

app.post("/user", (req,res) => {
    const {nomUsuari, email, password, adreca, telefon} = req.body;
    let client = new Client({
        nomUsuari,
        email,
        password: bcrypt.hashSync(password,10),
        descripcio,
        adreca,
        telefon,
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


app.delete("/user", (req,res) => {
    User.deleteOne({_id: req.body.id}, (err) => {
        if (err) {
            return res.status(400).json({
                ok:false,
                err,
            });
        };
        res.json({
            ok: true,
        })
    })
})

module.exports = app;