/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useContext} from 'react';
import RegisterComponent from '../../components/Register';
import {GlobalContext} from '../../context/Provider';
import register, {clearAuth} from '../../context/actions/auth/register';
import {useEffect} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routesName';
// import {} from '../../config/env';

export default function Register() {
  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  const [errors, setErrors] = useState({});

  //   const config = {
  //     headers: {
  //       Authorization:
  //         'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImRlYnMifQ.9a-K3_UeOp4Kw2LbGoC5z4is3PTHXI88cn8E1XzEQK4',
  //     },
  //   };

  //   useEffect(() => {
  //     axios
  //       .get('https://truly-contacts.herokuapp.com/api/contacts/', config)
  //       .then(res => console.log('ini Resposnes', res))
  //       .catch(err => console.log(' ini err', err));
  //   }, []);

  const {
    dispatchAuth,
    stateAuth: {error, loading, data},
  } = useContext(GlobalContext);

  useEffect(() => {
    if (Object.entries(data).length !== 0) {
      // navigate.
      console.log(data, 'data nih');
      navigate(LOGIN, {data: data});
    }
    return () => {
      console.log('cleanup');
      clearAuth()(dispatchAuth);
    };
  }, [data]);

  //   console.log(data, 'ini Data');

  const onChangeHandler = ({name, text}) => {
    setForm({...form, [name]: text});
    console.log('onchange', text === '', name, text, form);

    if (text !== '') {
      if (name === 'password') {
        if (text.length < 6) {
          setErrors(prev => ({
            ...prev,
            [name]: 'This Field Need 6 > character ',
          }));
        } else {
          setErrors(prev => ({...prev, [name]: null}));
        }
      } else {
        setErrors(prev => ({...prev, [name]: null}));
      }
    } else {
      setErrors(prev => ({...prev, [name]: 'This Field Required'}));
    }
  };

  const onSubmitHandler = () => {
    console.log('Form => ', form);

    if (!form.userName) {
      setErrors(prev => ({...prev, userName: 'Please Add Username'}));
    }
    if (!form.firstName) {
      setErrors(prev => ({...prev, firstName: 'Please Add First Name'}));
    }
    if (!form.lastName) {
      setErrors(prev => ({...prev, lastName: 'Please Add Last Name'}));
    }
    if (!form.email) {
      setErrors(prev => ({...prev, email: 'Please Add Email'}));
    }
    if (!form.password) {
      setErrors(prev => ({...prev, password: 'Please Add Password'}));
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(dispatchAuth);
    }
  };
  return (
    <RegisterComponent
      onChange={onChangeHandler}
      onSubmit={onSubmitHandler}
      form={form}
      error={errors}
      errorFetch={error}
      loadingFetch={loading}
    />
  );
}
