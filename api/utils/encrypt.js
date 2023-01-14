import bcryptjs from 'bcryptjs';
const encrypt = async (text) => {
  return await bcryptjs.hash(text, 10);
};
const matching = async (text, encrypted) => {
  return await bcryptjs.compare(text, encrypted);
};

export { encrypt, matching };
