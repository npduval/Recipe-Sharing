DROP DATABASE IF EXISTS recipe_db;
CREATE DATABASE recipe_db;

USE recipe_db;

CREATE TABLE recipe (
    recipe_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT 
);

CREATE TABLE ingredients (
    ingredient_id INT PRIMARY KEY AUTO_INCREMENT,
    ingredient TEXT NOT NULL,
    recipe_id INT NOT NULL,
    FOREIGN KEY (recipe_id)
    REFERENCES recipe(recipe_id)
);

CREATE TABLE instructions (
    instructions_id INT PRIMARY KEY AUTO_INCREMENT,
    instructions TEXT NOT NULL,
    recipe_id INT NOT NULL,
    FOREIGN KEY (recipe_id)
    REFERENCES recipe(recipe_id)
);
