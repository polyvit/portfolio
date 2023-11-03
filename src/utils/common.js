export const getAge = (date) => {
  const now = new Date();
  const birthdate = date.split("-").map((el) => Number(el));
  const bthd = new Date(...birthdate);
  const currentbthd = new Date(
    now.getFullYear(),
    bthd.getMonth(),
    bthd.getDate()
  );
  let age;
  age = now.getFullYear() - bthd.getFullYear();
  if (now < currentbthd) {
    age = age - 1;
  }
  return age;
};
