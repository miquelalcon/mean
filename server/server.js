const   express = require("express"), 
        http = require("http")
        bodyParser = require("body-parser")
        cookieParser = require("cookie-parser")
        path = require("path")

const   router = require("./router")
        database = require("./database/database")

class Server {
    constructor() {
        this.init()
    }

    init() {
        this.app = express()
        this.app.use(bodyParser.json())
        this.app.use(cookieParser())
        this.app.use("/api",router)
        this.app.use(express.static(path.join(__dirname,"./public")))
        this.app.use(
            (request, response) => response.sendFile(path.join(__dirname, "./public/index.html")
        ))
        this.app.use(
            (request,response) => response.status(404).json({message: "Resource not found"})
        )
    }

    start(port = 3000) {
        this.app.set('port',port)
        let server = http.createServer(this.app)
        server.listen(port)
        server.on(
            "listening",
            () => console.log("Server listening on port " + port)
        )
    }
}

module.exports = Server