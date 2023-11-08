import { sv } from "config";

export const t = (key: keyof typeof sv) => {
  return sv?.[key] || key;
};
