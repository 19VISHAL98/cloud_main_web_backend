const { sequelize, Sequelize } = require("../db");

module.exports = (sequelize, Sequelize) =>{
    const contact = sequelize.define("contact", {
    name: {
        type: Sequelize.STRING(255),
    },
    email: {
        type: Sequelize.STRING(255),
    },
    mobile_number: {
        type: Sequelize.INTEGER,
    },
    message: {
        type: Sequelize.STRING(255),
    },
    }, {
        timestamps: true
    });
    return contact;
};