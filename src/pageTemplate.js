/* --------------------------------- */
/* Project  : Team Profile Generator */
/* File     : pageTemplate.js         */
/* Author   : Vicente Garcia         */
/* Date     : 04/09/2022             */
/* Modified : 04/11/2022             */
/* --------------------------------- */
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
                <h5>Vicente</h5><h5>ID : 1</h5>
              </div>
              <h6><i class='fa fa-user-tie'></i> Manager</h6>
            </div>
            <div class="card-body bg-light p-2">
              <p class="card-text text-center"><a href="mailto:vicen1@hotmail.com">vicen1@hotmail.com</a></p>
              <p class="card-footer">Office Number: 5</p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="card text-black mb-3 shadow-lg rounded m-2">
            <div class="card-header text-white engineer">
              <div class="d-flex justify-content-between">
                <h5>Caterina</h5><h5>ID : 2</h5>
              </div>
              <h6><i class='fa fa-user-cog'></i> Engineer</h6>
            </div>
            <div class="card-body bg-light p-2">
              <p class="card-text text-center"><a href="mailto:caterina@hotmail.com">caterina@hotmail.com</a></p>
              <p class="card-footer text-center">Github: caterin</p>
            </div>
          </div>
          <div class="card text-black mb-3 shadow-lg rounded m-2">
            <div class="card-header text-white engineer">
              <div class="d-flex justify-content-between">
                <h5>Jezrhael</h5><h5>ID : 3</h5>
              </div>
              <h6><i class='fa fa-user-cog'></i> Engineer</h6>
            </div>
            <div class="card-body bg-light p-2">
              <p class="card-text text-center"><a href="mailto:jezrhael@hotmail.com">jezrhael@hotmail.com</a></p>
              <p class="card-footer text-center">Github: jezito</p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="card text-black mb-3 shadow-lg rounded m-2">
            <div class="card-header text-white intern">
              <div class="d-flex justify-content-between">
                <h5>Gabriel</h5><h5>ID : 4</h5>
              </div>
              <h6><i class='fa fa-user-graduate'></i> Intern</h6>
            </div>
            <div class="card-body bg-light p-2">
              <p class="card-text text-center"><a href="mailto:gabriel@hotmail.com">gabriel@hotmail.com</a></p>
              <p class="card-footer text-center">School: La Salle</p>
            </div>
          </div>
          <div class="card text-black mb-3 shadow-lg rounded m-2">
            <div class="card-header text-white intern">
              <div class="d-flex justify-content-between">
                <h5>Rodrigo</h5><h5>ID : 5</h5>
              </div>
              <h6><i class='fa fa-user-graduate'></i> Intern</h6>
            </div>
            <div class="card-body bg-light p-2">
              <p class="card-text text-center"><a href="mailto:rodrigo@hotmail.com">rodrigo@hotmail.com</a></p>
              <p class="card-footer text-center">School: TEC de Monterrey</p>
            </div>
          </div>
          <div class="card text-black mb-3 shadow-lg rounded m-2">
            <div class="card-header text-white intern">
              <div class="d-flex justify-content-between">
                <h5>Valeria</h5><h5>ID : 6</h5>
              </div>
              <h6><i class='fa fa-user-graduate'></i> Intern</h6>
            </div>
            <div class="card-body bg-light p-2">
              <p class="card-text text-center"><a href="mailto:valeria@hotmail.com">valeria@hotmail.com</a></p>
              <p class="card-footer text-center">School: Miraflores</p>
            </div>
          </div>
        </div>
        <footer class="foot text-white text-end m-2 py-2 pe-3">
          <h5>&copy; Made by Vicente</h5>
          <h7>Created on April 11, 2022</h7>
        </footer>
      </body>
    </html>`;
  };