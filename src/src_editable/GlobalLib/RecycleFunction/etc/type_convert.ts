export const S_N_to_N = (id: string | number): number => {
  let converted;
  if (typeof id === 'string') {
    converted = parseInt(id);
    if (typeof converted !== 'number') {
      console.log(
        "The argument of'type_convert' function contains a string that can be converted to a number."
      );
      return -1;
    }
  } else {
    converted = id;
  }
  return converted;
};

export const NOrU = (arg: any): boolean => {
  return arg === null || arg === undefined;
};

export const DateIntoNumber = (year: number, month: number, day: number) => {
  const vertToString = String(year) + '-' + String(month) + '-' + String(day);
  return Number(new Date(vertToString));
};

export const NumberIntoDate = (number: number) => {
  const dateObj = new Date(number);
  const str =
    String(dateObj.getFullYear()) +
    '. ' +
    String(dateObj.getMonth()) +
    '. ' +
    String(dateObj.getDate()) +
    '.';
  return str;
};
