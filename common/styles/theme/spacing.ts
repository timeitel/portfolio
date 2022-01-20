export type ISpacing = (...spaces: number[]) => string;

export const themeSpacing: ISpacing = (...spaces: number[]) => {
  const spacing = spaces.reduce((acc, s) => `${acc} ${s}rem`, "");
  return spacing.trim();
};
