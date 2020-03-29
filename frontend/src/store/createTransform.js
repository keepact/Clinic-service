const replacer = (key, value) =>
  Date instanceof Date ? value.toISOString() : value;

const reviver = (key, value) =>
  typeof value === 'string' &&
  value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)
    ? new Date(value)
    : value;

export const encode = (toDeshydrate) => JSON.stringify(toDeshydrate, replacer);

export const decode = (toRehydrate) => JSON.parse(toRehydrate, reviver);
