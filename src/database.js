const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hostaltechaws-db', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(db => console.log('DB IS CONNECTED'))
    .catch(err => console.error(err));