import { Client } from "pg";

const client = new Client(
  "postgresql://neondb_owner:PCBUyo1ON5uQ@ep-odd-term-a80555e3.eastus2.azure.neon.tech/neondb?sslmode=require"
);

// Define a type for PostgreSQL errors
interface PostgresError extends Error {
  code?: string;
}

const createTableAndInsertData = async () => {
  try {
    await client.connect();

    // First create the table
    await client.query(`CREATE TABLE IF NOT EXISTS newtavle (
      id SERIAL PRIMARY KEY,  
      name VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    )`);

    // Then insert the data
    const insertQuery = `
      INSERT INTO newtavle (name, email, password) 
      VALUES (\$1, \$2, $3)
    `;

    const values = ["username2", "user3@example.com", "user_password"];
    const res = await client.query(insertQuery, values);

    console.log("Insertion success:", res);
  } catch (error: unknown) {
    // Type guard to check if error is PostgresError
    if (error && typeof error === "object" && "code" in error) {
      const pgError = error as PostgresError;

      if (pgError.code === "42P07") {
        console.log("Table already exists!");
      } else if (pgError.code === "23505") {
        console.log("Duplicate entry! This email or username already exists.");
      } else {
        console.error("Error:", pgError);
      }
    } else {
      console.error("Unknown error:", error);
    }
  } finally {
    await client.end();
  }
};

createTableAndInsertData().catch((error) => {
  console.log("Unhandled error:", error);
});
