--table for tasks
CREATE TABLE task(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE NOT NULL,
    description TEXT 
);

--alterando la tabla para agregar relacion
ALTER TABLE task ADD COLUMN user_id INTEGER REFERENCES users(id);

--table for users
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--alterando la tabla de users para agregar link de imagen perfil
ALTER TABLE users ADD COLUMN gravatar VARCHAR(255);