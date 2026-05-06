require("colors")
var http = require("http")
var express = require("express")
let bodyParser = require("body-parser")
var mongodb = ("mongodb")



var dbo = client.db("exemplo_bd");
var usuarios = dbo.colletion("usuarios");

var app = express()
app.use(express.static("./public"))
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app)
server.listen(80)

console.log("Servidor rodando...".rainbow)

app.get("/", function(req, res){
    res.redirect("index.html")
})

app.get("/inicio", function(req, res){
    var text = req.query.text
    var number = req.query.number
    var color = req.query.color

    console.log(text, number, color);
    console.log("requisição feita por GET")
})

app.post("/inicio", function(req, res){
    var text = req.body.text
    var number = req.body.number
    var color = req.body.color

    console.log(text, number, color);
    console.log("requisição feita por POST")
})
// MongoDB

const MongoClinet = mongodb.MongoClient;
const uri = "mongodb+srv://guilhermeluizgianini_db_user:<Guilherme@28>@fullstack2026.w5rmhri.mongodb.net/?appName=FullStack2026";
const client = new MongoClinet(uri, { useNewUrlParser: true })  


app.post("/cadastro", function(req, res){
    var nome = req.body.nome
    var login = req.body.login
    var senha = req.body.senha

    console.log(nome, login, senha);

    res.render("resposta.ejs", {resposta: "Usuário cadastrado com sucesso!"})
    })