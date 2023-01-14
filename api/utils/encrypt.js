import bcryptjs from 'bcryptjs';
const encrypt = async (text) => {
  console.log(text);
  return await bcryptjs.hash(text, 10);
  //console.log(gola);
};
const matching = async (text, encrypted) => {
  return await bcryptjs.compare(text, encrypted);
};

export { encrypt, matching };
