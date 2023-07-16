# SVG Logo Maker

## Description
The Project is designed to automatically generate a logo in an SVG file based on the Users inputs. It is built with javascript, inquirer, fs and jest libraries and operates from the commandline terminal. Highlighted proficiencies:
* NODEjs
* OOP
* inquirer
* fs
* jest libaries and testing
* classes/inheritance
    


## User Story 
```
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```


## Usage
Installation is required for npm libary for inquirer version 8.2.4, along with jest libaries and initilaize enviorment. Here are the set-up commands:
>npm i inquirer@8.2.4 <br>
>npm i jest
>npm init -y

## Test Run

run <node main> or <node main.js> in the terminal to start test
[Video Demonstration Link Here](https://drive.google.com/file/d/1l8PG9AKjNDVWQmM0NiXq4KiYdAA8qRDf/view) node 