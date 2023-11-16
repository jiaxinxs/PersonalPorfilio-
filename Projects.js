/* Name:JIAXIN YAN
Student number: 041092597
File name: projects.js
Lab Professor: Alem Legesse
The date the page was created:5/11/23
Due Date: 5 Nov 2023
Description: Week 9 demo/ Assignment 1 */

// Initialize variables for project information
var i = 0;
var images = ["img/0.png", "img/1.png", "img/2.png", "img/3.png"];
var titles = ["Medal Counter", "Puzzle Game", "Personal Website", "Guitar Collection Management"];
var descriptions = ["The Medal Counter is an application designed to calculate and categorize the medals earned by users, distinguishing between gold, silver, and bronze medals. This project was developed in Java and completed in October 2023.", 
"The Jigsaw Puzzle Game is an interactive application that allows users to create accounts, log in, and enjoy puzzle games. It was developed using Java and was completed in October 2023.", 
"The Personal Website is a web-based project created using HTML, CSS, and JavaScript. This website serves as a platform for sharing information about the author, including details about their projects, resume, and contact information. It was completed in November 2023.",
"The Guitar Management System, developed for ABC Company, provides employees with a tool to manage and modify data in the company's database. Additionally, it allows for the generation of reports. This project makes use of Microsoft Access and SQL Server Management and was completed in October 2023."];
// Function to display the next project
function next() {
    i++;
    if (i >= images.length) {
        i = 0;
    }
    document.getElementById("image").src = images[i];
    document.getElementById("title").textContent = titles[i];
    document.getElementById("description").textContent = descriptions[i];
}
// Function to display the previous project
function previous() {
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    document.getElementById("image").src = images[i];
    document.getElementById("title").textContent = titles[i];
    document.getElementById("description").textContent = descriptions[i];
}
