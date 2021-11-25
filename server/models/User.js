// импортируем схему и модель из пакета mangoose
const { Schema, model, ObjectId } = require('mangoose');

// создаем схему в которой будет храниться информация о полях сущности

const User = new Schema({
    email: { type: String, require: true, unique: true },
    password: { type: String,require: true },
    diskSpace: { type: Number, default: 1024 ** 3 *10 },
    usedSpace: { type: Number, default: 0 },

    //теперь связываем сущность пользователя и сущность файллов
    avatar: { type: String },
    files: [{type: ObjectId, ref: "File"}]
}); 

module.exports = model('User', User);