import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { Tattoo_artist } from "../models/Tattoo_artist";
import bcrypt from "bcrypt";
import { TokenDecoded } from "../../types";
import { Appointment } from "../models/Appointment";
import { Customer } from "../models/Customer";

const register = async (req: Request, res:Response, next: NextFunction) => {
    try{
        const name = req.body.name
        const surname = req.body.name
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

        const newCustomer = await Tattoo_artist.create({
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
    }catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Tattoo artist account cant be created",
                error: error
            }
        )
    }
}

const login = async (req: Request, res: Response) => {
    try{
        const email = req.body.email
        const password = req.body.password

        const user = await Tattoo_artist.findOneBy(
            {
                email: email
            }
        )

        if (!user) {
            return res.status(400).json(
                {
                    success: true,
                    message: 'Email or password incorrect'
                }
            )
        }

        const token = jwt.sign(
            {
              id: user.id,
              role: user.role,
              email: user.email
            },
            "secreto",
            {
              expiresIn: "3h",
            }
          );

          return res.json(
            {
              success: true,
              message: "User logged succesfully",
              token: token
            }
          )
    } catch (error) {
        return res.status(500).json(
          {
            success: false,
            message: "User cant be logged",
            error: error
          }
        )
      }
}

const profile = async (req: Request, res: Response) => {
    try{
        const user = await Tattoo_artist.findOneBy(
            {
                id: req.token.id
            }
        )

        return res.json(
            {
                success: true,
                message: "profile user retrieved",
                data: user
            }
        )
    } catch (error) {
        return res.json(
          {
            success: false,
            message: "User profile cant be retrieved",
            error: error
          }
        )
    }
}

const update = async (req: Request, res: Response) => {
    try{
  
      const {name, surname,email,password} = req.body

      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailRegex.test(email)) {
            return res.json({ mensaje: 'The email entered is not valid' });
          }

        const passswordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z!@#$%^&*]{4,12}$/;
        if (!passswordRegex.test(password)) {
        return res.json({ mensaje: 'Invalid password' });
        }

        const encryptedPassword = bcrypt.hashSync(password, 10)
  
      const updateCustomer = await Tattoo_artist.update(
        {
          id: req.token.id
        },
        {
          name: name,
          surname: surname,
          email: email,
          password: encryptedPassword
        }
      )
  
      return res.json({
        success: true,
        message: "User updated",
        data: updateCustomer
      })
    } catch (error) {
      return res.json({
        success: false,
        message: "User information cant by updated",
        error: error
      })
    }
  }

  const getAllAppointmentByTattooArtistId = async(req: Request, res: Response) => {
    try {
      const appoimentId = req.params.id
      const appointment = await Appointment.find(
        {
          where:{
          tattoo_artist_id: req.token.id
          },
          select: {
            id: true,
            customer_id: true,
            status: true,
            date: true,
            customer: {
              name: true,
              surname: true,
              email: true,
              password: false
            }
          },
          relations: {
            customer: true,
          },
        }
      )
  
      return res.json({
        success: true,
        message: "appointments by tattoo artist retrieved",
        data: appointment
      })
    } catch (error) {
      return res.json({
        success: false,
        message: "appointments cant by tattoo artist retrieved",
        error: error
      })
    }
  }

  const getAllTattooArtist = async (req: Request, res: Response) => {
    try {
      const tattoo_artists = await Tattoo_artist.find(
        {
          select: {
            name: true,
            surname: true,
            email: true,
        }
        }
      );
  
      return res.json(
        {
          success: true,
          message: "users retrieved",
          data: tattoo_artists
        }
      )
  
    } catch (error) {
      return res.json(
        {
          success: false,
          message: "users cant be retrieved",
          error: error
        }
      )
    }
  }

  const getAllCustomers = async (req: Request, res: Response) => {
    try {
      const customers = await Customer.find(
        {
          select: {
            id: true,
            name: true,
            surname: true,
            email: true,
            role: true,
            is_active: true,
            created_at: true,
            updated_at: true

        }
        }
      );
  
      return res.json(
        {
          success: true,
          message: "users retrieved",
          data: customers
        }
      )
  
    } catch (error) {
      return res.json(
        {
          success: false,
          message: "users cant be retrieved",
          error: error
        }
      )
    }
  }

  const updateAdmin = async (req: Request, res: Response) => {
    try{
  
      const {role, is_active} = req.body
  
      const updateTattoo_artist = await Tattoo_artist.update(
        {
          id: req.body.id
        },
        {
          role: role,
          is_active: is_active
        }
      )
  
      return res.json({
        success: true,
        message: "User updated",
        data: updateTattoo_artist
      })
    } catch (error) {
      return res.json({
        success: false,
        message: "User information cant by updated",
        error: error
      })
    }
  }

  const updateAdminCustomers = async (req: Request, res: Response) => {
    try{
  
      const {is_active} = req.body
  
      const updateCustomer = await Customer.update(
        {
          id: req.body.id
        },
        {
          is_active: is_active
        }
      )
  
      return res.json({
        success: true,
        message: "User updated",
        data: updateCustomer
      })
    } catch (error) {
      return res.json({
        success: false,
        message: "User information cant by updated",
        error: error
      })
    }
  }

  const getAllAppointment = async(req: Request, res: Response) => {
    try {
      const appoimentId = req.params.id
      const appointment = await Appointment.find(
        {
          select: {
            id: true,
            customer_id: true,
            status: true,
            date: true,
            customer: {
              name: true,
              surname: true,
              email: true,
              password: false
            },
            tattoo_artist:{
              name: true,
              surname: true,
              email:true
            }
          },
          relations: {
            customer: true,
            tattoo_artist: true
          },
        }
      )
  
      return res.json({
        success: true,
        message: "appointments by tattoo artist retrieved",
        data: appointment
      })
    } catch (error) {
      return res.json({
        success: false,
        message: "appointments cant by tattoo artist retrieved",
        error: error
      })
    }
  }

export { register, login, profile, update, getAllAppointmentByTattooArtistId, getAllTattooArtist, getAllCustomers, updateAdmin, updateAdminCustomers, getAllAppointment }