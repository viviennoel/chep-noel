const sauces = require('../models/Sauces');
const fs = require('fs');


//Create a sauce

exports.createSauce = (req, res, next) => {
    console.log('initio');
    const sauceObject = JSON.parse(req.body.sauce)
    const sauce = new sauces({
        ...sauceObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    })
    console.log('Secundo');
    sauce.save()
        .then(() => {
            console.log('tercero');
            res.status(200).json({ message: 'user saved' })
        })
        .catch(error => res.status(400).json({ error }));
}







//Delete a sauce

exports.deleteSauce = (req, res, next) => {
    sauces.findOne({ _id: req.params.id })
        .then(thing => {
            const filename = thing.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                sauces.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(500).json({ error }));
};



//Display all sauces

exports.displaySauce = (req, res, next) => {
    sauces.find()
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(400).json({ error }));
}

//Find one specific sauce

exports.findSauce = (req, res, next) => {
    sauces.findOne({ _id: req.params.id })
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(400).json({ error }));
}



//Modify a sauce

exports.modifySauce = (req, res, next) => {
   
    const sauceObject = req.file ?
        {
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        }
        : { ...req.body };

    sauces.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
}






//Like a sauce

exports.likeSauce = (req, res, next) => {
    console.log(req.body.like);
    sauces.findOne({ _id: req.params.id })
        .then(mysauce => {

            //PREVENT TO LIKE + UNLIKE 2 TIMES

            if (mysauce.usersDisliked) {
                let disliked = mysauce.usersDisliked.split(',');
                let indexdislikes = disliked.indexOf(req.body.userId);
                console.log(indexdislikes + 'index dis');
                
            } else {
                var indexdislikes = -1;
            }

            if (mysauce.usersLiked) {
                let Liked = mysauce.usersLiked.split(',');
                let indexlikes = Liked.indexOf(req.body.userId);

                let indextest = Liked.indexOf('test');
                console.log(indexlikes + 'index Like');
                console.log(indextest + 'index test');
            } else {
                var indexlikes = -1;
            }

            if (indexdislikes == -1 && indexlikes == -1) {
                if (req.body.like == 1) {

                    if (!mysauce.like) {
                        console.log('body.like is 1');
                        console.log(mysauce);

                        sauces.updateOne({ _id: mysauce._id }, {
                            ...JSON.stringify(mysauce),
                            likes: req.body.like,
                            usersLiked: req.body.userId,
                        })
                            .then(() => res.status(200).json({ message: 'Objet modifié !' }))
                            .catch(error => res.status(400).json({ error }));

                    } else if (mysauce.like) {
                        console.log('body.like already exist');

                        sauces.updateOne({ _id: mysauce._id }, {
                            ...JSON.stringify(mysauce),
                            likes: mysauce.likes + 1,
                            usersLiked: mysauce.userLiked + ',' + req.body.userId,
                        })
                            .then(() => res.status(200).json({ stringValue: likes }))
                            .catch(error => res.status(400).json({ error }));

                    }

                }

                else if (req.body.like == -1) {

                    if (!mysauce.like) {
                        console.log('body.like is 1');
                        console.log(mysauce);

                        sauces.updateOne({ _id: mysauce._id }, {
                            ...JSON.stringify(mysauce),
                            dislikes: 1,
                            usersDisliked: req.body.userId,
                        })
                            .then(() => res.status(200).json({ message: 'Objet modifié !' }))
                            .catch(error => res.status(400).json({ error }));

                    }

                    else if (mysauce.like) {
                        console.log('body.like already exist');

                        sauces.updateOne({ _id: mysauce._id }, {
                            ...JSON.stringify(mysauce),
                            dislikes: mysauce.dislikes + 1,
                            usersDisliked: mysauce.usersDisliked + ',' + req.body.userId,
                        })
                            .then(() => res.status(200).json({ stringValue: dislike }))
                            .catch(error => res.status(400).json({ error }));

                    }

                }

            } 

            if (req.body.like == 0) {

                //SI L4UTILISATEUR SOUHAITE UNLIKER UNE SAUCE, NOUS RECUPERONS LA SAUCE EN QUESTION.

                console.log('LETS GO 0');

                sauces.findOne({ _id: req.params.id })
                    .then(mysauce => {

                        //PREVENT TO LIKE + UNLIKE 2 TIMES

                        if (mysauce.usersDisliked) {

                            console.log('Dislike exists');
                            let disliked = mysauce.usersDisliked.split(',');
                            let indexdislikes = disliked.indexOf(req.body.userId);
                            if (indexdislikes !== -1) {
                                disliked.splice(indexdislikes, 1);
                                sauces.updateOne({ _id: mysauce._id }, {
                                    ...JSON.stringify(mysauce),
                                    dislikes: req.body.dislikes - 1,
                                    usersDisliked: disliked,
                                })
                                    .then(() => res.status(200).json({ message: 'Objet modifié !' }))
                                    .catch(error => res.status(400).json({ error }));
                            }
                        }

                        else if (mysauce.usersLiked) {

                            console.log('Like exists');
                            let Liked = mysauce.usersLiked.split(',');
                            let indexlikes = Liked.indexOf(req.body.userId);
                            if (indexlikes !== -1) {
                                Liked.splice(indexlikes, 1);
                                console.log(Liked + 'Inside the if');

                                if (req.body.likes == 1) {
                                    sauces.updateOne({ _id: mysauce._id }, {
                                        ...JSON.stringify(mysauce),
                                        likes: 0,
                                        usersLiked: "Erased",
                                    })
                                        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
                                        .catch(error => res.status(400).json({ error }));
                                } else {
                                    sauces.updateOne({ _id: mysauce._id }, {
                                        ...JSON.stringify(mysauce),
                                        likes: req.body.likes - 1,
                                        usersLiked: Liked,
                                    })
                                        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
                                        .catch(error => res.status(400).json({ error }));
                                }
                            }
                        }
                    })
            }
                        
            
        })
}