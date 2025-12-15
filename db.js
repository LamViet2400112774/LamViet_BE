// db.js
const mongoose = require('mongoose');
require('dotenv').config(); // Ghi chú: Đọc file .env để lấy MONGO_URI

const connectDB = async () => {
  try {
    // Sử dụng biến môi trường (an toàn)
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 15000,
      ssl: true,
      tlsInsecure: true, // bỏ kiểm tra CA nếu mạng nội bộ/chặn
      family: 4, // ưu tiên IPv4, tránh sự cố DNS/SRV
    });
    console.log('✅ MongoDB connected successfully! Ready for use.');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1); // Ghi chú: Thoát ứng dụng nếu không thể kết nối Database
  }
};

module.exports = connectDB;