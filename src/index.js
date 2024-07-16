import Log from "./log";
import Calc from "./calc";

import img from "./react.jpg";

const calc = new Calc();
const log = new Log();

const el = document.createElement("img");
el.src = img;
document.body.appendChild(el);

log.log(calc.add(1, 2, 3));
