export const textNormalize = {
  title: (text: string, fallback: string) =>
    text ? text.slice(0, 10) : fallback,
  name: (text: string) =>
    text.length <= 14 ? text : `${text.slice(0, 16)}...`,
  tagline: (text: string) =>
    text.length <= 16 ? text : `${text.slice(0, 18)}...`,
  description: (text: string) =>
    text.length <= 78 ? text : `${text.slice(0, 80)}...`,
};
