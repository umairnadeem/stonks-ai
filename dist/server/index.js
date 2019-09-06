"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
const API_PRE = 'api/v1';
const PORT = parseInt(process.env.PORT, 10) || 3000;
app.use(express_1.default.static(path_1.default.resolve(__dirname, '../../dist/public')));
app.use(API_PRE, routes_1.default);
app.listen(PORT, () => console.info(`Listening on ${PORT}`));
