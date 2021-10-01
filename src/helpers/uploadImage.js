import storage from '@react-native-firebase/storage';

export default file => onSucces => onError => {
  console.log(file.path, '=> ini path');
  const path = 'contact-picture/user/777/' + file.modificationDate;
  const reference = storage().ref(path);
  const task = reference.putFile(file.path);

  task
    .then(async () => {
      const url = await reference.getDownloadURL();
      console.log(url, 'ini url get Download');
      onSucces(url);
    })
    .catch(error => {
      onError(error, 'onError');
    });
};
