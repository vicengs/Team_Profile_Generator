/* --------------------------------- */
/* Project  : Team Profile Generator */
/* File     : pageTemplate.js        */
/* Author   : Vicente Garcia         */
/* Date     : 04/09/2022             */
/* Modified : 04/11/2022             */
/* --------------------------------- */
// Add moment module to use
let moment = require("moment");
// Function to get engineers block
const getEngineers = (engineer) => {
    if (!engineer[0]){
      return "";
    }
    return `<div class="d-flex justify-content-center">
    ${engineer
      .map(({ name, id, email, github }) => {
    return `<div class="card text-black mb-3 shadow-lg rounded m-2">
        <div class="card-header text-white engineer">
          <div class="d-flex justify-content-between">
            <h5>${name}</h5><h5 class="ps-4"><i class="fa fa-id-card"></i> : ${id}</h5>
          </div>
          <h6><i class="fa fa-user-cog"></i> Engineer</h6>
        </div>
        <div class="card-body bg-light p-2">
          <p class="card-text text-center"><a href="mailto:${email}">${email}</a></p>
          <p class="card-footer text-center"><i class="fab fa-github mr-2"></i> Github: <a href="https://github.com/${github}" target="_blank"> ${github}</a></p>
        </div>
      </div>`;
    })
    .join("")}
    </div>`
};
// Function to get interns block
const getInterns = (intern) => {
  if (!intern[0]){
    return "";
  }
  return `<div class="d-flex justify-content-center">
  ${intern
    .map(({ name, id, email, school }) => {
  return `<div class="card text-black mb-3 shadow-lg rounded m-2">
      <div class="card-header text-white intern">
        <div class="d-flex justify-content-between">
          <h5>${name}</h5><h5 class="ps-4"><i class="fa fa-id-card"></i> : ${id}</h5>
        </div>
        <h6><i class="fa fa-user-graduate"></i> Intern</h6>
      </div>
      <div class="card-body bg-light p-2">
        <p class="card-text text-center"><a href="mailto:${email}">${email}</a></p>
        <p class="card-footer text-center"><i class="fa fa-school mr-2"></i> School: ${school}</p>
      </div>
    </div>`;
  })
  .join("")}
  </div>`
};
// Principal function to generate HTML
module.exports = (manager, engineers, interns) => {
    return `<!DOCTYPE html>
<html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team Profile</title>
    <!-- Framework CSS Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <header class="title p-2 mx-2">
      <h1 class="text-center text-white">My Team</h1>
    </header>
    <br>
    <div class="d-flex justify-content-center">
      <div class="card text-black mb-3 shadow-lg rounded">
        <div class="card-header text-white manager">
          <div class="d-flex justify-content-between">
            <h5>${manager.name}</h5><h5 class="ps-4"><i class="fa fa-id-card"></i> : ${manager.id}</h5>
          </div>
          <h6><i class="fa fa-user-tie"></i> Manager</h6>
        </div>
        <div class="card-body bg-light p-2">
          <p class="card-text text-center"><a href="mailto:${manager.email}">${manager.email}</a></p>
          <p class="card-footer text-center"><i class="fa fa-building mr-2"></i> Office: ${manager.officeNumber}</p>
        </div>
      </div>
    </div>
    ${getEngineers(engineers)}
    ${getInterns(interns)}
    <footer class="foot text-white text-end m-2 py-2 pe-3">
      <h5>&copy; Made by ${manager.name}</h5>
      <h7>Created on ${moment().format("LL")}</h7>
    </footer>
  </body>
</html>`;
  };