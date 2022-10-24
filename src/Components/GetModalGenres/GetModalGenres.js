const getModalGenres = (array) => {
  return array.map((item) => item.name).join(", ");
};
export default getModalGenres;
