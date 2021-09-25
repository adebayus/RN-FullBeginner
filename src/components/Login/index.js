/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useContext} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import * as routesName from '../../constants/routesName';
import {clearAuth} from '../../context/actions/auth/loginUser';
import {GlobalContext} from '../../context/Provider';
import Container from '../commons/Container';
import CustomButton from '../commons/CustomButton';
import Message from '../commons/Message';
import TextInput from '../commons/TextInput';
import styles from './styles';
export default function LoginComponent({
  errorFetch,
  onSubmit,
  form,
  onChange,
  loadingFetch,
  createdData,
}) {
  const {navigate} = useNavigation();
  const [isHide, setIsHide] = useState(true);
  //   const

  const {
    dispatchAuth,
    stateAuth: {data, error},
  } = useContext(GlobalContext);

  const onDismissHandler = () => {
    clearAuth()(dispatchAuth);
  };
  //   console.log(stateAuth);
  return (
    <Container>
      <Image
        source={require('../../assets/images/Logo-company.png')}
        style={styles.logo}
      />
      <View>
        <Text style={styles.title}> Welcome To RNContact </Text>
        <Text style={styles.subTitle}> Please Login Here </Text>
        {createdData && (
          <Message
            success
            onDismiss={onDismissHandler}
            message="Account Succesfull Created"
          />
        )}
        {errorFetch?.detail && (
          <Message
            danger
            onDismiss={onDismissHandler}
            message={errorFetch.detail}
          />
        )}
        {/* {errorFetch?.error && (
          <Message danger onDismiss={() => {}} message={errorFetch.error} />
        )} */}
        <TextInput
          label="Username"
          placeholder="Enter Username Here"
          onChangeText={text => onChange({name: 'userName', text})}
        />
        <TextInput
          label="Password"
          placeholder="Enter Password Here"
          onChangeText={text => onChange({name: 'password', text})}
          secureTextEntry={isHide}
          icon={<Text>{isHide ? 'Show' : 'Hide'}</Text>}
          showIconFn={() => setIsHide(prev => !prev)}
          iconPosition="right"
        />

        <CustomButton
          primary
          title="Submit"
          onPress={onSubmit}
          loading={loadingFetch}
          disabled={loadingFetch}
        />
        <View style={styles.createSection}>
          <Text style={styles.infoText}>Need New Account ?</Text>
          <TouchableOpacity onPress={() => navigate(routesName.REGISTER)}>
            <Text style={styles.linkButton}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}
