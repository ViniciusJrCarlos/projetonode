"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const LeadController_1 = require("../controller/LeadController");
const leadController = new LeadController_1.LeadController;
exports.route = (0, express_1.Router)();
exports.route.post('/leads', leadController.Create);
