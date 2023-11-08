import { themes } from "themes";

const icons = themes.default.icons;

export const icon = (key: keyof typeof icons) => icons[key];
