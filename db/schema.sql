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
    ingredient VARCHAR(50) NOT NULL
);

CREATE TABLE instructions (
    instructions_id INT PRIMARY KEY AUTO_INCREMENT,
    instructions TEXT NOT NULL
);

-- CREATE TABLE recipe_ingredients (
--     recipe_ingredients_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
--     CONSTRAINT fk_recipe FOREIGN KEY (recipe_id) REFERENCES recipe(recipe_id),
--     CONSTRAINT fk_ingredient FOREIGN KEY (ingredient_id) REFERENCES ingredients(ingredient_id),
--     CONSTRAINT fk_instructions FOREIGN KEY (instructions_id) REFERENCES instructions(instructions_id),
--     amount DECIMAL (4,2) NOT NULL,
--     sort INT NOT NULL
-- );
