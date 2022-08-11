import { Router } from "express";
import { addCustomer, allCustomers, changeCustomer, delCustomer, getCustomer, getCustomerName } from "../services/customer.service.js";

const router = Router()

router.get("/", async (req, res) => {
    try {
        const result = await allCustomers()
        res.status(200).json({
            message: "All customers retrived",
            table: result.rows
        })
    }
    catch (err) {
        res.status(500).json({
            message: "Interval Server Error",
            error: err
        })
    }
})
router.get("/search", async (req, res) => {
    try {
        const name = req.query.name
        const result = await getCustomerName(name)
        res.status(200).json({
            message: "All customers retrived",
            table: result.rows
        })
    }
    catch (err) {
        res.status(500).json({
            message: "Interval Server Error",
            error: err
        })
    }
})
router.get("/:id", async (req, res) => {
    try {
        const result = await getCustomer(req.params.id)
        res.status(200).json({
            message: "All customers retrived",
            table: result.rows
        })
    }
    catch (err) {
        res.status(500).json({
            message: "Interval Server Error",
            error: err
        })
    }
})
router.post("/", (req, res) => {
    try {
        const {ust_code, name, city, working_area, country, grade, opening_amt, receive_amt, payment_amt, outstanding_amt,phone} = req.body
        addCustomer(ust_code, name, city, working_area, country, grade, opening_amt, receive_amt, payment_amt, outstanding_amt,phone)
        res.status(200).json({
            message: "Customer added",
        })
    }
    catch (err) {
        res.status(500).json({
            message: "Interval Server Error",
            error: err
        })
    }
})
router.put("/:id", (req, res) => {
    try {
        const {ust_code, name, city, working_area, country, grade, opening_amt, receive_amt, payment_amt, outstanding_amt,phone} = req.body
        changeCustomer(ust_code, name, city, working_area, country, grade, opening_amt, receive_amt, payment_amt, outstanding_amt,phone, req.params.id)
        res.status(200).json({
            message: "Customer edited",
        })
    }
    catch (err) {
        res.status(500).json({
            message: "Interval Server Error",
            error: err
        })
    }
})
router.patch("/:id", (req, res) => {
    
})
router.delete("/:id", (req, res) => {
    try {
        const id = req.params.id
        delCustomer(id)
        res.status(200).json({
            message: "Succesfully deleted",
        })
    }
    catch (err) {
        res.status(500).json({
            message: "Interval Server Error",
            error: err
        })
    }
})

export default router;