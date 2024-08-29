const fs = require('fs')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.connect(DB,{dbName:'natours'}).then(() => {
    console.log('DB connection successful');
});

// Read JSON file

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`,'utf-8'));

// Import data into DB

const importData = async () => {
    try{
        await Tour.create(tours);
        console.log('Data successfully loaded');
    }catch(err){
        console.log(err);
    }
    process.exit();
}

// Delete all data from DB

const deleteData = async () => {
    try{
        await Tour.deleteMany();
        console.log('Data successfully deleted');
    }catch(err){
        console.log(err);
    }
    process.exit();
}

if(process.argv[2] === '--import'){
    importData();
}

if(process.argv[2] === '--delete'){
    deleteData();
}