"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var loginRoutes_1 = require("./routes/loginRoutes");
var app = express_1.default();
app.use(express_1.default.urlencoded());
app.use(cookie_session_1.default({ keys: ['sddskgf'] }));
// routers
app.use(loginRoutes_1.router);
app.listen(3000, function () { return console.log('Server is running on port 3000'); });
