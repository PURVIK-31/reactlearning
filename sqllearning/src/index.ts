import { Client } from "pg";

const client = new Client(
  "postgresql://neondb_owner:PCBUyo1ON5uQ@ep-odd-term-a80555e3.eastus2.azure.neon.tech/neondb?sslmode=require"
);

const createerrorwhiletable = async () => {
  try {
    await client.connect();
    await client.query(` CREATE TABLE newtavle (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
    ) `);
  } catch (error) {
    console.log("ek baar already same naam ka table bnaya tha bey !! ");
    throw "ye throw se aaya hai bey noob chez";
  } finally {
    await client.end();
  }
};
createerrorwhiletable().catch((error) => {
  console.log(error);
});
