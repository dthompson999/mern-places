console.log("mongoose.js");

const mongoose = require("mongoose");

module.exports = db_name => {
    mongoose.connect(`mongodb://localhost/${db_name}`,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
        .then(() => console.log(`Established a connection to the ${db_name} database.`))
        .catch(errors => console.log("Something went wrong when connecting to the database.", errors));
}