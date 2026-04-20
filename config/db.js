const mongoose = require('mongoose');
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Conectado a MongoDB Atlas');
    } catch (err) { console.error('❌ Error:', err); }
};
module.exports = dbConnection;