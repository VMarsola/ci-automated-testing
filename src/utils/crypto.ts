import { enc, AES } from "crypto-js";

const encrypt = (data: any, secretKey: string): string => {
  const encryptedData = AES.encrypt(JSON.stringify(data), secretKey).toString();
  return encryptedData;
};

const decrypt = (encryptedData: string, secretKey: string): any => {
  const decryptedData = AES.decrypt(encryptedData, secretKey).toString(
    enc.Utf8
  );
  return JSON.parse(decryptedData);
};

export { encrypt, decrypt };
