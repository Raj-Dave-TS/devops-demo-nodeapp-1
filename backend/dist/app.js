"use strict";
// Dada ki Jay Ho
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const blog_1 = __importDefault(require("./routes/blog"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/blog", blog_1.default);
const MONGO_DB_URI = process.env.MONGO_DB_URI;
console.log("Mongo DB URI: ", MONGO_DB_URI);
mongoose_1.default.connect(MONGO_DB_URI).then(() => {
    console.log("Mongo DB Connected Successfully");
    const PORT = Number(process.env.PORT || 3000);
    app.listen(PORT, "0.0.0.0", () => {
        console.log("Server is listening on port ... " + PORT);
    });
});
