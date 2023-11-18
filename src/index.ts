import express from "express";
import { router as routerCustomers } from "./routes/customersRoutes"
import { router as routerTatoo_artists } from "./routes/tattoo_artistsRoutes"
import { router as routerAppoiments } from "./routes/appointmentsRoutes"
import { router as routerGalleries } from "./routes/galleriesRoutes"
import { AppDataSource } from "./db";
import cors from "cors";

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5050

app.use('/customer', routerCustomers)
app.use('/tattoo_artist', routerTatoo_artists)
app.use('/appoiments', routerAppoiments)
app.use('/gallery', routerGalleries)

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
