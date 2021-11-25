// Экспортируем express mongoose в переменные
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

//создаем сам сервер из express
const app = express();

//создаем порт., используя функцию get у конфига по ключу и получаем значение
const PORT = config.get('serverPort');


//СОздаем функцию которая будет подключаться к базе данных и запускать сервер
const start = async () => {
    try {
        await mongoose.connect(config.get())
        // Тут передим в функцию порт и 2 параметром передаем функцию которая сработает после запуска сервера
        app.listen(PORT, () => {
            console.log('Server started', PORT);
        })
    } catch (e) {
        
    }
};

start();