// console.log("Hello World");
const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Our Menu</title>
  </head>
  <style>
      /* p{
          border: 2px solid red;
          width: 450px;
          height: 120px;
      }         */
      .box{
          border: 2px solid black;
          background-color: grey;
          margin: 6px;
          display: inline-block;
          width: 395px;
          padding-top: 56px;
          box-sizing: border-box;
          font-weight: bolder;
          }
      .box1{
          border: 2px solid black;
          background-color: #ffd5d5d9;
          position: relative;
          width: 140px;
          height: 40px;
          box-sizing: border-box;
          text-align: -webkit-center;
          border: 2px solid black;
          font: -webkit-control;
          padding-bottom: 45px;
          bottom: 188px;
          left: 261px;
      }    
      .box2{
          border: 2px solid black;
          background-color: #d32f2fcc;
          position: absolute;
          width: 140px;
          height: 40px;
          box-sizing: border-box;
          text-align: -webkit-center;
          border: 2px solid black;
          font: -webkit-control;
          padding-bottom: 45px;
          bottom: 467px;
          left: 680px;
      }    
      .box3{
          border: 2px solid black;
          background-color: #fff176e0;
          position: absolute;
          width: 140px;
          height: 40px;
          box-sizing: border-box;
          text-align: -webkit-center;
          border: 2px solid black;
          font: -webkit-control;
          padding-bottom: 45px;
          bottom: 467px;
          left: 1091px;
      }    
      .box p{
          text-size-adjust: 200px;
      }
      h1{
          text-align: center;
      }
      /* p{
          position: relative; */
          
      }
       .h2{
          padding: 2px;
          position: absolute;
          margin: 8px;
          padding-block: inherit;
          border: 2px solid black;
          background-color: red;
      } 
  </style>
  <body>
      <h1>
          Our Menu
      </h1>
      <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iste iusto consequuntur. Facilis veritatis cupiditate reprehenderit, eum consectetur minima, magnam fuga deleniti, iste aspernatur rerum expedita voluptates assumenda odit inventore.</p> -->
      <div class="container">
          <div class="box">
              <!-- <h2 class="heading">Chicken</h2> -->
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus recusandae accusantium natus harum maiores ducimus, voluptatibus nisi reprehenderit, animi unde vel voluptate tempore doloremque temporibus, a dolorum itaque non exercitationem.</p>
          </div>
          <div class="box">
              <!-- <h2 class="heading">Beef</h2> -->
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus recusandae accusantium natus harum maiores ducimus, voluptatibus nisi reprehenderit, animi unde vel voluptate tempore doloremque temporibus, a dolorum itaque non exercitationem.</p>
          </div>
          <div class="box">
              <!-- <h2 class="heading">Sushi</h2> -->
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus recusandae accusantium natus harum maiores ducimus, voluptatibus nisi reprehenderit, animi unde vel voluptate tempore doloremque temporibus, a dolorum itaque non exercitationem.</p>
          </div>
          <div class="box1">
              <h2 class="heading">Chicken</h2>
              <!-- <p>
                  Chicken
              </p> -->
          </div>
          <div class="box2">
              <h2 class="heading">Beef</h2>
          </div>
          <div class="box3">
              <h2 class="heading">Sushi</h2>
          </div>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});