const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = 3000; 

dotenv.config({ path: './config.env' });

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.connect(DB).then(() => {
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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});