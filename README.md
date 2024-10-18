# User Registration Authentication

## RU

### Описание

Простое API для аутентификации пользователей, созданное на Node.js, Express.js и MongoDB. Поддерживает регистрацию, авторизацию и хранение паролей с использованием bcrypt и JWT.

### Возможности

- Регистрация пользователей с уникальным именем и email.
- Хранение паролей с помощью bcrypt.
- Авторизация с помощью email и пароля.
- JWT для управления сессиями.

### Установка

#### Необходимые компоненты

- Node.js
- MongoDB (локально или через облачный сервис)

#### Шаги установки

1. Клонируйте репозиторий:

    ```bash
    git clone https://github.com/Ullyminat/User-Reg-Auth.git
    cd Reg&Auth
    ```

2. Установите зависимости:

    ```bash
    cd backend/
    npm i
    ```
    ```bash
    cd frontend/
    npm i
    ```

3. Настройте `.env` файл:

    ```bash
    PORT=3009
    DB=mongodb://localhost:27017/test  # Ваша строка подключения
    SECRET=ваш_секрет  # Секрет для JWT
    ```

4. Запустите сервер и клиентскую часть:

    ```bash
    cd backend/
    npm run dev
    ```

    Доступ по [http://localhost:3009](http://localhost:3009).

    ```bash
    cd frontend/
    npm run dev
    ```

### API Эндпоинты

#### Базовый URL: `/user`

- **Регистрация пользователя**  
  **URL:** `/user/create`  
  **Метод:** `POST`  
  **Тело запроса:**

    ```json
    {
      "username": "ваше_имя_пользователя",
      "email": "ваш_email@example.com",
      "password": "ваш_пароль"
    }
    ```

- **Авторизация пользователя**  
  **URL:** `/user/login`  
  **Метод:** `POST`  
  **Тело запроса:**

    ```json
    {
      "email": "ваш_email@example.com",
      "password": "ваш_пароль"
    }
    ```

### Структура проекта

```bash
├── config
│   └── connect_db.mjs     # Конфигурация БД
├── controllers
│   └── userController.mjs  # Логика пользователей
├── models
│   └── users.mjs           # Схема пользователя
├── routes
│   ├── index.mjs           # Основные маршруты
│   └── userRoutes.mjs      # Пользовательские маршруты
├── .env                    # Переменные окружения
├── index.mjs               # Главный файл
├── package.json            # Зависимости
└── README.md               # Документация
