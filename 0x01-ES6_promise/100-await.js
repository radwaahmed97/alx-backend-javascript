import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo;
  let name;
  try {
    photo = await uploadPhoto();
    name = await createUser();
  } catch (error) {
    photo = null;
    name = null;
  }
  return { photo, name };
}
