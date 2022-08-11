import express from "express";
import cors from "cors";
import customerRoute from "./routes/customer.routes.js"
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/customer", customerRoute)

app.listen(8080, () => {
    console.log("Server is running...")
})