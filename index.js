import Express, { request, response } from "express";
const app = Express();
const PORT = 7860;


app.listen(PORT, () => {
    console.log(`Server Is Down On http://localhost:${PORT} Hello Backend `)
})

// app.get("", (request, response) => {
//     response.send({
//         name: "Ab Raheem"
//     })
// })

console.log('Check The App')
