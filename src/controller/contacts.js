const db = require("/Users/pc/Desktop/askepro_backend/db");
const contact = db.contact;

const insert = async (req ,res ,next) => {
    try{
    const newContact = await contact.create({
        
        name = req.body.name,
        email = req.body.email,
        mobile_number = req.body.mobile_number,
        message = req.body.message
    });
    if(newContact){
       return res.status(200).send({ message: "New Contact created"})
    }
    else{
       return res.status(400).send("Error while creating the user");
    }
    }
    catch(err){
        next(err);
    }
};

const show = async (req, res, next) =>{
    try{
        const getContact = await contact.findone({
            where: {
                email: req.body.email
            }
        });
        if(getContact){
            return res.status(200).send(getContact);
        }
        else{
            return res.status(200).send("Error while finding the user")
        }
    }
    catch(err)
    {
        next(err);
    };
};

module.exports = { insert, show};