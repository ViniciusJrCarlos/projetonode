import { Router } from "express";

import { LeadController } from '../controller/LeadController';

const leadController = new LeadController;

export const route = Router();

route.post('/leads', leadController.Create)