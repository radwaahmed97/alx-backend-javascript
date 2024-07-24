import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const username = await signUpUser(firstName, lastName).then((value) => ({
    status: 'fulfilled',
    value,
  }));
  const userphoto = await uploadPhoto(fileName).catch((error) => ({
    status: 'rejected',
    value: `${error.name}: ${error.message}`,
  }));
  return [username, userphoto];
}
