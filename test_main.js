import { ActionInterpreter, StateHistory } from "./Engine.js";
import { adNauseam } from "./CardSample.js";

const stateHistory = new StateHistory();
const interpreter = new ActionInterpreter(stateHistory);

const actions = [adNauseam];

interpreter.Interpret(actions);
