import { client } from "../configs/database.js"

export function allCustomers() {
    const sql = `SELECT * FROM customers;`
    
    return client.query(sql)
}

export function getCustomer(id) {
    const sql = `SELECT * FROM customers where id=$1;`
    
    return client.query(sql, [id])
}

export function getCustomerName(name) {
    const sql = `SELECT * FROM customers where name=$1;`
    
    return client.query(sql, [name])
}

export function addCustomer(ust_code, name, city, working_area, country, grade, opening_amt, receive_amt, payment_amt, outstanding_amt,phone) {
    const sql = `
    INSERT INTO customers (ust_code, name, city, working_area, country, grade, opening_amt, receive_amt, payment_amt, outstanding_amt,phone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 );`
    
    return client.query(sql, [ust_code, name, city, working_area, country, grade, opening_amt, receive_amt, payment_amt, outstanding_amt,phone])
}

export function changeCustomer(ust_code, name, city, working_area, country, grade, opening_amt, receive_amt, payment_amt, outstanding_amt,phone, id) {
    const sql = `
    UPDATE customers
SET ust_code = $1, name = $2, city = $3, working_area = $4, country = $5, grade = $6, opening_amt = $7, receive_amt = $8, payment_amt = $9, outstanding_amt = $10, phone = $11 WHERE id = $12;`
    
    return client.query(sql, [ust_code, name, city, working_area, country, grade, opening_amt, receive_amt, payment_amt, outstanding_amt,phone, id])
}



export function delCustomer(id) {
    const sql = `Delete FROM customers WHERE id = $1`

    return client.query(sql, [id])
}