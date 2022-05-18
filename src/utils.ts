import dayjs from 'dayjs';

export const formatDate = (date: Date | undefined) => {
  if (!date) return null;
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
};

export const formatArrayToString = (
  arr: Array<unknown> | undefined,
  prefix?: string,
  separator?: string,
) => {
  if (!arr) return null;
  let nArr = arr;
  if (prefix) nArr = arr.map((e) => `${prefix}${e}`);
  return nArr.join(separator ?? ',');
};
