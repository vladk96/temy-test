export const getFormatedDate = timeStamp => {
  const date = new Date(timeStamp);

  return new Intl.DateTimeFormat('en-GB').format(date);
};
