const toString = Object.prototype.toString;

type ClassDictionary = Record<string, boolean | string | number | null | undefined>;
type ClassArray = ClassValue[];
export type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | boolean
  | null
  | undefined;

function appendClassNames(value: ClassValue, classes: string[]) {
  if (value === null || value === undefined || value === false) {
    return;
  }

  if (typeof value === "string" || typeof value === "number") {
    if (value !== "" && value !== 0) {
      classes.push(String(value));
    }
    return;
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      appendClassNames(item, classes);
    }
    return;
  }

  if (toString.call(value) === "[object Object]") {
    for (const [key, condition] of Object.entries(value as ClassDictionary)) {
      if (condition) {
        classes.push(key);
      }
    }
  }
}

export function clsx(...inputs: ClassValue[]) {
  const classes: string[] = [];
  for (const input of inputs) {
    appendClassNames(input, classes);
  }
  return classes.join(" ").trim().replace(/\s+/g, " ");
}

export function cn(...inputs: ClassValue[]) {
  return clsx(...inputs);
}
