const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        console.log('before');
        const token = req.headers.authorization.split(' ')[1];
        console.log('token' + token);
        const decodedToken = jwt.verify(token, 'CRYPTAGE_VIVIEN_NOEL');
        console.log('decoded' + decodedToken);
        const userId = decodedToken.userId;
        console.log(userId);
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};