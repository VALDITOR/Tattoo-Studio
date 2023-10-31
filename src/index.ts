import express from "express";
import { router as routerUsers } from "./routes/usersRoutes";
import { router as routerTasks } from "./routes/tasksRoutes";
import { router as routerCustomers } from "./routes/customersRoutes"
import { router as routerTatoo_artists } from "./routes/tattoo_artistsRoutes"
import { router as routerAppoiments } from "./routes/appointmentsRoutes"
import { AppDataSource } from "./db";

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5050

// routes
app.use('/user', routerUsers)
app.use('/tasks' , routerTasks)
app.use('/customer', routerCustomers)
app.use('/tattoo_artist', routerTatoo_artists)
app.use('/appoiments', routerAppoiments)

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
    
    app.listen(PORT, () => {
      console.log(`Server running ${PORT}`);
    })
  })
  .catch(error => {
    console.log(error)
  })
