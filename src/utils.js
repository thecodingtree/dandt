export const getDaysUntilWeddingLabel = () => {
  const now = new Date();
  const weddingDate = new Date('2023-05-12');
  const timezoneOffset = now.getTimezoneOffset() * 60 * 1000; // convert minutes to milliseconds
  const daysTillWedding = Math.ceil(
    (weddingDate - now + timezoneOffset) / (1000 * 60 * 60 * 24)
  );

  let daysTillWeddingLabel = '';

  if (daysTillWedding === 0) {
    daysTillWeddingLabel = "we're getting married today!";
  } else if (daysTillWedding === 1) {
    daysTillWeddingLabel = "we're getting married tomorrow!";
  } else if (daysTillWedding < 0) {
    daysTillWeddingLabel = 'we got married!';
  } else {
    daysTillWeddingLabel = `we're getting married in ${daysTillWedding} days!`;
  }

  return daysTillWeddingLabel;
};
