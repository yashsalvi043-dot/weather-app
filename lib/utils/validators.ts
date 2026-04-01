export const ZIP_REGEX = /^\d{5,6}$/;

export const isValidZip = (v: string): boolean => ZIP_REGEX.test(v.trim());
