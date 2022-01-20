export type ISpacing = (space: number) => string;

export const themeSpacing: ISpacing = (space) => `${space * 8}px`;
