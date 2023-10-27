import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import { Customer } from "../models/Customer";
import bcrypt from "bcrypt";

const register = async (req: Request, res: Response) => {
    try{
        const name = req.body.name;
        const surname = req.body.surname;
        const email = req.body.email;
        const password = req.body.password;

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailRegex.test(email)) {
            return res.json({ mensaje: 'The email entered is not valid' });
          }

        const passswordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z!@#$%^&*]{4,12}$/;
        if (!passswordRegex.test(password)) {
        return res.json({ mensaje: 'Invalid password' });
        }

        const encryptedPassword = bcrypt.hashSync(password, 10)

        const newCustomer = await Customer.create({
            name: name,
            surname: surname,
            email: email,
            password: encryptedPassword
          }).save()

          return res.json({
            success: true,
            message: "Customer account created succesfully",
            token: newCustomer
          })
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Customer account cant be created",
                error: error
            }
        )
    }
}

export { register }