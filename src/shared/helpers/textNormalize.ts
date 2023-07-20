export const textNormalize = {
  title: (text: string, fallback: string) =>
    text ? text.slice(0, 10) : fallback,
  name: (text: string) =>
    text.length <= 14 ? text : `${text.slice(0, 16)}...`,
  tagline: (text: string) =>
    text.length <= 32 ? text : `${text.slice(0, 34)}...`,
};
