const { response } = require("express");


const validateFileSubmit = (req, res = response, next) => {
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
        return res.status(400).json({
            msg: 'No hay archivo, validateFileSubmit'
        });

    }
    next();
}

module.exports = {
    validateFileSubmit
}