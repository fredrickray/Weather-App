// const express = require("express");
// const cors = require("cors")
// const bodyParser = require("body-parser")
// const mysql = require("mysql");
// // const md5 = require("md5");
// // const knex = require("knex");
// const bcrypt = require('bcrypt');
// const { response } = require("express");
// const { json } = require("body-parser");
// const saltRounds = 10;

// const port = process.env.PORT || 5050
// const app = express()

// app.use(cors());
// app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(bodyParser.json());


// // To connect to the DataBase/MySQL
// // const db = mysql.createConnection({
// //     // connectionLimit   : 10,
// //     host              :"localhost",
// //     user              :"root",
// //     password          : "root",
// //     database          : "Weather-App",
// //     port              : 8889
// // });

// const knex = require('knex')({
//     client: 'mysql',
//     connection: {
//         host: 'localhost',
//         port: 8889,
//         user: 'root',
//         password: 'root',
//         database: 'weather-App'
//     }
// });



// // To register a new user to the DataBase
// // app.post("/register", (req, res) => {
// //     bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
// //         const firstname = req.body.firstname
// //         const lastname = req.body.lastname
// //         const email = req.body.email
// //         const password = hash

// //         db.query("INSERT INTO users(firstname, lastname, email, password)VALUES(?,?,?,?)",
// //     [firstname, lastname, email, password], (err, result) => {
// //         if(err) {
// //             res.send({err: err})
// //         } else{
// //             res.status(200).json({message: "registration is successful", status:"success"})
// //             // res.send({result: result})
// //         }
// //     })
// //     })
// //  })

// // To Put in a new user
// app.post("/register", (req, res) => {
//     bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
//         const firstname = req.body.firstname
//         const lastname = req.body.lastname
//         const email = req.body.email
//         const password = hash

//         knex('users').insert({ email: email, password: password, firstname: firstname, lastname: lastname }).then((result) => {
//             res.json({ success: true, message: "ok", status: "success", result })
//         }).catch((err) => {
//             res.json({ success: false, message: "error", status: "failed" })
//             console.log(err);
//         })
//         //     knex('users').insert({email: email, password: password, firstname: firstname, lastname: lastname}).then((response) => {
//         //         res.json({success: true, message: "ok", status:"success"})
//         //   }) 

//         // knex("users").insert({email: email, firstname: firstname, lastname: lastname, password: password})
//         // .then((error, response) => {
//         //     if(error) {
//         //         res.send({error: error})
//         //         console.log('working')
//         //     } else{
//         //         console.log("not working")
//         //         res.send(200).json({message: "registration is successful", status: "success"})
//         //     }
//         // })
//     })
// })

// // to login in a user
// app.post("/login", async (req, res) => {
//     const email = req.body.email
//     const password = req.body.password

//     try {
//         let user = await knex("users").where({ email: email }).first()
//         if (user) {
//             let hashedPassword = user.password
//             let isValid = await bcrypt.compare(password, hashedPassword);

//             if (isValid) {
//               return  res.status(200).json({ status: "success", data: user, message: "successful login" })
//             }
//             // res.status(401).json({status: "failed", message: "wrong email or password"})
//         }
//         return res.status(401).json({ status: "failed", message: "wrong email or password" })

//     } catch (err) {
//         console.log(err)
//     }
// })


// // To login an existing user
// // app.post("/login", (req, res) => {

// //     const email = req.body.email
// //     const password = req.body.password;

// //     knex("users").where({email: email}).then( (response) => {
// //     let data = response[0]
// //     let data1 = JSON.parse(JSON.stringify(data))
// //      console.log(data1.password)
// //      console.log(data1)
// //      if (data1.password === password) {
// //         console.log("wwwwwwwww")
// //      } else {
// //         console.log("line2")
// //      }
// //      })
// //     })


// // To update User Information
// app.post("/profile", async(req, res) => {
//      const { firstname, lastname, email} = req.body

//      knex("users").update({firstname: firstname, lastname: lastname}).where({email: email})
// })





// // app.post("/getUser", async (req, res) => {
// //     let email = req.body.email;
// //     try {
// //         let response = await knex("users")
// //             .where({ email: email })
// //         console.log(response)
// //         res.status(200).json({ status: "success", data: response })
// //     } catch (error) {
// //         console.log(error)
// //     }
// // })

// // To post a weather data
// app.post("/weather", (req, res) => {
//     const {name, weather, temperature, wind_speed, humidity, email} = req.body
//     console.log(req.body)
//     knex("weather").insert({name: name, weather: weather, temperature: temperature, wind_speed: wind_speed, humidity: humidity, email: email})
//     .then((response) => {
//       return  res.status(200).json({ message: "Data successful sent", status: "success", response})
    
//     }).catch((err) => {
//       return  res.status(401).json({message: "Data was not sent", status: "failed", err})
      
//     })
   
// })


// // To get the weather info for a User 
// app.post("/weather-retrieve", async(req, res) => {
//     let  email  = req.body.email
    
//     try {
//         let response =  await knex("weather").where({email: email})
//         let data = response
//         let data2 = JSON.parse(JSON.stringify(data))
//         res.status(200).json({status: "success", message: "working", data})
//         console.log(data) 
//     } catch (error) {
//         console.log(error)
//         res.status(200).json({status: "success", message: "working"})
//     }
//     // try {
//     //     let info = await knex("weather").where({email: email})
//     //     if(info){
//     //        return res.status(200).json({status: "success", data: info, message: "Retrieved Data successfully"})
//     //     } else{
//     //         return res.status(401).json({status: "Failed", message:"Data was not Retrieved"}) 
//     //     }
//     // } catch (error) {
//     //     console.log(error)
//     // }
    
    
     
// })


// // To Delete a Weather Data for a User
// app.post("/weather-delete", (req, res) => {
//     const {email} = req.body
//     knex("weather").where({email: email }).delete({})
//     .then((result) => {
//         console.log(result)
//         res.status(200).json({status: "success", message: "Weather Data successfully Deleted"})
//     })
// }) 



// //     db.query("SELECT * FROM users WHERE email = email AND password = password",
// //     [email, password], (err, result) => {
// //         console.log(password)
// //         console.log(email);
// //         if(err) {
// //             console.log("error");
// //             res.send({err: err});
// //          } 
// //          else{
// //             bcrypt.compare(password, result, function(error, results) {
// //                  if(password === req.body.password) {
// //                     res.status(200).json({message: "registration is successful", status: "success"})
// //                     // console.log(result)
// //                  } else {
// //                     // console.log(result)
// //                     res.send({message: "Wrong Email or Password"})                    
// //                  }
// //             });

// //             //  if(result.length > 0) {                
// //             //     res.status(200).json({message: "registration is successful", status:"success"})
// //             //  } else {
// //             //     // console.log(message)
// //             //     console.log(result)
// //             //     console.log(err)
// //             //      res.send({message: " Wrong Email or Password!"})
// //             //  }
// //          }
// //     })
// // })








// // To retrieve a weather info
// // app.post("/weather", (req, res) => {
// //     const { city, weather, feels_like, temperature, humidity, wind_speed } = req.body

// //     db.query("SELECT users.email, weather.city,",
// //         [city, weather, feels_like, temperature, humidity, wind_speed], (err, result) => {
// //             if (err) {
// //                 res.send({ err: err })
// //             } else {
// //                 res.status(200).json({ message: "registration is successful", status: "success" })
// //             }
// //         })
// // })




// // To listen on the port
// app.listen(port, () => {
//     console.log("listening on port " + port)
// })