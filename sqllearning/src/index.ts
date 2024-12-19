import { Client } from "pg";

const client = new Client(
  "postgresql://neondb_owner:PCBUyo1ON5uQ@ep-odd-term-a80555e3.eastus2.azure.neon.tech/neondb?sslmode=require"
);
const crafttable = async () => {
  try {
    client.connect();
    client.query(`CREATE TABLE  craftedtable (
      id SERIAL PRIMARY KEY,
      name VARCHAR(29) NOT NULL,
      reffered VARCHAR(35) ,
      email VARCHAR(37) NOT NULL UNIQUE,
      password VARCHAR(30) NOT NULL
      ) `);
  } catch (error) {
    console.log("nahi bnega beta");
  }
};
const respo = crafttable();
console.log(respo);
