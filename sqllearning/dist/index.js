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
const createerrorwhiletable = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        yield client.query(` CREATE TABLE newtavle (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
    ) `);
    }
    catch (error) {
        console.log("ek baar already same naam ka table bnaya tha bey !! ");
        throw "ye throw se aaya hai bey noob chez";
    }
    finally {
        yield client.end();
    }
});
createerrorwhiletable().catch((error) => {
    console.log(error);
});
