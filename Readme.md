
1. Установите Node.js
2. Склонируйте репозиторий с кодом приложения:
git clone https://github.com/your-username/your-repo.git
3. Перейдите в директорию с кодом приложения:
cd your-repo
4. Инициализируйте ваш проект Node.js, выполнив следующую команду:
npm init
Эта команда создаст файл package.json, который содержит информацию о вашем проекте и его зависимостях.
5. Установите модуль Express, выполнив следующую команду:
npm install express
Эта команда загрузит модуль Express из репозитория npm и установит его в ваш проект.
6. Установите модуль ws, выполнив следующую команду в командной строке или терминале:
npm install ws
Эта команда загрузит модуль ws из репозитория npm и добавит его как зависимость в ваш проект.
7. Установите зависимости для сервера и клиента:
npm install
8. Запустите сервер:
node server.js
По умолчанию сервер будет слушать порт 8080.
9. Откройте веб-браузер и перейдите по адресу `http://localhost:8080`.
Вы увидите интерфейс клиента, готовый к отправке ключевых слов серверу.
10. Введите ключевое слово, нажмите кнопку "Отправить".
Если сервер найдет соответствующие URL-адреса, он вернет список URL-адресов клиенту.
Список URL-адресов будет отображен на странице.
10. Выберите один из URL-адресов из списка и нажмите кнопку "Просмотреть".
Контент выбранного URL-адреса будет загружен и отображен на странице.

### Требования

- Node.js
- Клиентский и серверный фреймворки (указаны в коде)
- Браузер с поддержкой WebSocket