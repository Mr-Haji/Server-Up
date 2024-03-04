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
// app.get("/", (request, response) => {

//     response.send(Data)
// })
// ---------------------------------
// app.get("", (request, response) => {
//     console.log("request", request.query)
//     if (request.query) {
//         const FilerData = Data.filter((product) => { product.id == request.query.id }
//         )
//         response.send(FilerData)
//         return
//     }
//     else (response.send(Data))
// })

// by using normal patram get all products
// app.get("/:id", (request, response) => {
//   const a = request.params
//   console.log("a", a);
//   if (a) {
//     const filterData = Data.filter(
//       (product) => product.id == a.id
//     );
//     response.send(filterData);
//     return;
//   }

//   response.send(Data);
// });
app.get("/", (request, response) => {
  const Q = request.query
  console.log("Q", Q);
  if (Q.id) {
    const filterData = Data.filter(
      (product) => product.id == Q.id
    );
    response.send(filterData);
    return;
  }

  response.send(Data);
});

// console.log('Check The App')







