import express from "express";
import { router as routerUsers } from "./routes/usersRoutes";
import { router as routerTasks } from "./routes/tasksRoutes";
import { router as routerCustomers } from "./routes/customersRoutes"
import { AppDataSource } from "./db";

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5050

// routes
app.use('/user', routerUsers)
app.use('/tasks' , routerTasks)
app.use('/customer', routerCustomers)

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
