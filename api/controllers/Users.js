const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/Users.js');
const Measures = require('../models/Measures.js');

//Login user function

exports.loginUser = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};


//Signup user function

exports.signupUser = (req, res, next) => {
    console.log(req.body.password + 'before bcrypt');
    if (!req.body.name ||
        !req.body.email ||
        !req.body.password) {
        return res.status(410).send(new Error('Email already exist'));
    } else {
        bcrypt.hash(req.body.password, 10)
            .then(hash => {
                const user = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash
                });

                console.log(user);

                user.save()
                    .then(() => res.status(201).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    }))

                    .catch(error => res.status(400).json({ error }));
            })
            .catch(error => res.status(510).json({ error }));
    }
};




//MEASURES

exports.measures = (req, res, next) => {
    console.log('hello1');
    const measures = new Measures({
        userId: req.body.userId,
        datenow: req.body.datenow,
        unity: req.body.unity,
        measure1: req.body.measure1,
        measure2: req.body.measure2,
        measure3: req.body.measure3,
        measure4: req.body.measure4,
        measure5: req.body.measure5,
        measure6: req.body.measure6,
        measure7: req.body.measure7,
        measure8: req.body.measure8,
        measure9: req.body.measure9,
        measure10: req.body.measure10,
        measure11: req.body.measure11,
        measure12: req.body.measure12,
        measure13: req.body.measure13,
        measure14: req.body.measure14,
        measure15: req.body.measure15,
    });

    console.log('hello');

    measures.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => res.status(408).json({ error }));
};


//UPDATE MEASURES

exports.measuresUpdate = (req, res, next) => {

    Measures.updateOne(
        { userId: req.params.userId },
        { ...req.body, userId: req.params.userId })

        .then(() => {
            console.log(req.body);
            res.status(200).json({ message: 'Objet modifié !' })

        })
        .catch(error => res.status(400).json({ error }));
};

//GET MEASURES

exports.measuresGet = (req, res, next) => {
    console.log('Before');
    console.log(req.params.userId);

    Measures.findOne({ userId: req.params.userId }).then(
            (measure) => {
                console.log(measure);
                if (!measure) {
                    return res.status(405).json({ message : 'measures not taken'});
                } else {
                    console.log('Success')
                    res.status(200).json(measure);
                }
            })
             
        .catch(
            () => {
                res.status(500).send(new Error('Database error!'));
            }
        )
    };
