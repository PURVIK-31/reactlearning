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
const crafttable = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        client.connect();
        client.query(`CREATE TABLE  craftedtable (
      id SERIAL PRIMARY KEY,
      name VARCHAR(29) NOT NULL,
      reffered VARCHAR(35) ,
      email VARCHAR(37) NOT NULL UNIQUE,
      password VARCHAR(30) NOT NULL
      ) `);
    }
    catch (error) {
        console.log("nahi bnega beta");
    }
});
const respo = crafttable();
console.log(respo);
