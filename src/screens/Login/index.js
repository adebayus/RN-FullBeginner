import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {useContext} from 'react';
import {useState} from 'react';
import LoginComponent from '../../components/Login';
import loginUser from '../../context/actions/auth/loginUser';
import {GlobalContext} from '../../context/Provider';

export default function Login() {
  const [form, setForm] = useState({
    userName: 'absabsabs',
    password: 'absabsabs',
  });
  const {navigate} = useNavigation();
  const {
    dispatchAuth,
    stateAuth: {error, loading, data},
  } = useContext(GlobalContext);
  const param = useRoute();
  //   console.log(useRoute());
  const createdData = param.params?.data;
  console.log(undefined ? true : false);

  const onSubmitHandler = () => {
    console.log('aksdjlskdj');
    if (form.userName && form.password) {
      loginUser(form)(dispatchAuth);
    }
  };

  const onChangeHandler = ({name, text}) => {
    setForm(prev => ({...prev, [name]: text}));
    console.log(form, 'ini form');
  };

  return (
    <LoginComponent
      onChange={onChangeHandler}
      onSubmit={onSubmitHandler}
      form={form}
      errorFetch={error}
      loadingFetch={loading}
      createdData={createdData}
    />
  );
}
