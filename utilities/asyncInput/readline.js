import * as _readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export const readline = _readline.createInterface({ input, output });
