const mongoose = require('mongoose');
uri = "jokes"

mongoose.connect(`mongodb://localhost/${uri}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("You're now in the mainframe..."))
    .catch((err) => console.log("WARNING WILL ROBINSON, NO LONGER IN MAINFRAME!", err))