const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = 3000; 

dotenv.config({ path: './config.env' });

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.connect(DB,{dbName:'natours'}).then(() => {
    console.log('DB connection successful');
});

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'A tour must have a name'],
        unique: true
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    price: {
        type: Number,
        required: [true,'A tour must have a price']
    }
});

const Tour = mongoose.model('Tour',tourSchema);

const testTour = new Tour({
    name: 'The Park Camper',
    price:997
});

testTour.save().then(
    doc => {
        console.log(doc);
    }
).catch(err => {console.log(err);})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});