import { checkNotEmpty } from "../validation/validators.js";

function checkPatternInput(input) {
  checkNotEmpty(input);
  const patterns = [/^arrow$/i, /^heart$/i, /^triangle$/i];
  const isFit = patterns.some((choice) => choice.test(input));
  if (!isFit) throw new Error("Please enter only arrow or heart");
}

function checkDirectionInput(input) {
  checkNotEmpty(input);
  const directions = [/^up$/i, /^down$/i, /^left$/i, /right/i];
  const isFit = directions.some((choice) => choice.test(input));
  if (!isFit) throw new Error("Please enter only up / down / left / right");
}

export { checkPatternInput, checkDirectionInput };
