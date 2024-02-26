import Express, { request, response } from "express";
import { Data } from "./Data.js";
const app = Express();
const PORT = 7860;


app.listen(PORT, () => {
    console.log(`Server Is Upp On http://localhost:${PORT} Hello Backend `)
})

// app.get("", (request, response) => {

//     response.send({
//         name: "Ab Raheem"
//     })
// })
// --------------------------------------
// app.get("/home", (request, response) => {

//     response.send(Data)
// })
// ---------------------------------
app.get("/home/:id", (request, response) => {
    console.log("request", request.query)
    if (request.query) {
        const FilerData = Data.filter((product) => { product.id == request.query }
        )
        response.send(FilerData)
    }
    else (response.send(Data))


})

// console.log('Check The App')







