"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client("postgresql://neondb_owner:PCBUyo1ON5uQ@ep-odd-term-a80555e3.eastus2.azure.neon.tech/neondb?sslmode=require");
const createTableAndInsertData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        // First create the table
        yield client.query(`CREATE TABLE IF NOT EXISTS newtavle (
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
        const res = yield client.query(insertQuery, values);
        console.log("Insertion success:", res);
    }
    catch (error) {
        // Type guard to check if error is PostgresError
        if (error && typeof error === "object" && "code" in error) {
            const pgError = error;
            if (pgError.code === "42P07") {
                console.log("Table already exists!");
            }
            else if (pgError.code === "23505") {
                console.log("Duplicate entry! This email or username already exists.");
            }
            else {
                console.error("Error:", pgError);
            }
        }
        else {
            console.error("Unknown error:", error);
        }
    }
    finally {
        yield client.end();
    }
});
createTableAndInsertData().catch((error) => {
    console.log("Unhandled error:", error);
});
