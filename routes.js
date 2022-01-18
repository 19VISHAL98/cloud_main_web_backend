const {insert, show} = require('./src/controller/contacts');
const { contactValidator } = require('./validator/contactValidator');

const route = express.Router();


    route.post('/insert', contactValidator, insert);
    route.get('/show', contactValidator, show);



module.exports = route;

