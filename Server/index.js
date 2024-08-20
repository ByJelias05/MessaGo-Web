const express = require("express");
const multer = require("multer");
const cors = require("cors");
const JWT = require("jsonwebtoken")

const firebase = require("firebase/compat/app")
require("firebase/compat/firestore")

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHl90JAkTf1NLj30ErROSOrEng6UTahKU",
  authDomain: "messago-714d2.firebaseapp.com",
  projectId: "messago-714d2",
  storageBucket: "messago-714d2.appspot.com",
  messagingSenderId: "903047133903",
  appId: "1:903047133903:web:f25c29ac77b16c7e1715ba"
};

// Initialize Firebase
const fb = firebase.default.initializeApp(firebaseConfig);
const db = fb.firestore();

//Config express
const app = express();
app.use(express.json())
const Port = 3001;
const upload = multer({storage: multer.memoryStorage()});
app.use(cors())

//Logic server app
app.post("/CreateUser", async (req, res) =>{

  try{
    const Usuario = {
      CompleteName: req.body.CompleteName,
      UserID: req.body.UserID,
      Email: req.body.Email,
      PassWord: req.body.PassWord,
      PhotoUrl: req.body.PhotoUrl,
      StatuUser: req.body.StatuUser,
      LastTime: req.body.LastTime
    }
  
    const CreateUserRef = db.collection("Usuarios").doc();
  
    await CreateUserRef.set(Usuario)
  
    res.send("Usuario creado con exito")
  }
  catch(error){
    res.send("Error")
  }
})

app.post("/Login/:email/:pass", async (req, res) =>{

    
  const Email = req.params.email
  const PassWord = req.params.pass

  const UserRef = db.collection("Usuarios").where("Email", "==", Email);

  const Snapshot = await UserRef.get();

  const Ususario = Snapshot.docs.map((items) =>({id: items.id, ...items.data()}))[0];

  if(typeof Ususario != "undefined"){

    if(PassWord == Ususario.PassWord){
      res.send({statu: true, ms: "Usuario encontrado"})
    }else{
      res.send({statu: false, ms: "Contraseña incorrecta"})
    }

  }else{
    res.send({statu: false, ms: "Usuario no encontrado"})
  }

  // res.send({statu: true, ms: "Biennn"})

  // JWT.sign(Ususario, "Login_User", {expiresIn: '30s'}, (error, token) => {
  //   if (error) {
  //     throw error;
  //   } else {
  //     res.json({ success: "Perfecto", token });
  //   }
  // });
 
 

})

//Authorization: Bearer <token>
const VerificarAcceso = (req, res, next) =>{
  const HeaderUser = req.headers.authorization;

  if(typeof HeaderUser != "undefined"){
    const token = HeaderUser
    req.token = token;
    next();
  }
} 

app.post("/Messago", VerificarAcceso, async (req, res) =>{

  JWT.verify(req.token, "Login_User", (error, authData) =>{
    if(error){
      res.send("Error")
    }else{
      res.send(authData)
    }
  })
})



app.listen(Port, () =>{
    console.log(`EL SERVIDOR ESTA EN EL PUERTO ${Port}`)
})