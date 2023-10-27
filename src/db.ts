import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateTableCustomers1698340010084 } from "./migration/1698340010084-create-table-customers"
import { CreateTableTattooArtists1698391283123 } from "./migration/1698391283123-create-table-tattoo_artists"
import { CreateTableAppoiments1698391359437 } from "./migration/1698391359437-create-table-appoiments"
import { CreateTableGalleries1698392105148 } from "./migration/1698392105148-create-table-galleries"
import { Gallery } from "./models/Gallery"
import { Customer } from "./models/Customer"
import { Tattoo_artist } from "./models/Tattoo_artist"
import { Appointment } from "./models/Appointment"

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "1234",
  database: "steel_&_ink_studio",
  entities: [Gallery, Customer, Tattoo_artist, Appointment],
  migrations: [
    CreateTableCustomers1698340010084,
    CreateTableTattooArtists1698391283123,
    CreateTableAppoiments1698391359437,
    CreateTableGalleries1698392105148
  ],
  synchronize: false,
  logging: false,
})

// export { AppDataSource }
