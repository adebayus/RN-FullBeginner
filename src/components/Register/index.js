/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import * as routesName from '../../constants/routesName';
import Container from '../commons/Container';
import CustomButton from '../commons/CustomButton';
import Message from '../commons/Message';
import TextInput from '../commons/TextInput';
import styles from './styles';

export default function RegisterComponent({
  onChange,
  onSubmit,
  error,
  form,
  errorFetch,
  loadingFetch,
}) {
  const {navigate} = useNavigation();
  console.log(errorFetch?.error);
  const [isHide, setIsHide] = useState(true);
  //   const [username, setUsername] = useState('');
  return (
    <Container>
      <Image
        source={require('../../assets/images/Logo-company.png')}
        style={styles.logo}
      />
      <View>
        <Text style={styles.title}> Welcome To RNContact </Text>
        <Text style={styles.subTitle}> Please Register Here </Text>

        {errorFetch?.error && (
          <Message
            danger
            retry
            retryFn={() => {
              console.log('123');
            }}
            message={errorFetch?.error}
          />
        )}

        <TextInput
          label="Username"
          placeholder="Enter Username Here"
          onChangeText={text => onChange({name: 'userName', text})}
          error={error.userName || errorFetch?.username?.[0]}
        />
        <TextInput
          label="First Name"
          placeholder="Enter First Name Here"
          onChangeText={text => onChange({name: 'firstName', text})}
          error={error.firstName || errorFetch?.first_name?.[0]}
        />
        <TextInput
          label="Last Name"
          placeholder="Enter Last Name Here"
          onChangeText={text => onChange({name: 'lastName', text})}
          error={error.lastName || errorFetch?.last_name?.[0]}
        />
        <TextInput
          label="email"
          placeholder="Enter email Here"
          onChangeText={text => onChange({name: 'email', text})}
          error={error.email || errorFetch?.email?.[0]}
        />

        <TextInput
          label="Password"
          placeholder="Enter Password Here"
          secureTextEntry={isHide}
          icon={<Text>{isHide ? 'Show' : 'Hide'}</Text>}
          showIconFn={() => setIsHide(prev => !prev)}
          iconPosition="right"
          onChangeText={text => onChange({name: 'password', text})}
          error={error.password || errorFetch?.password?.[0]}
        />

        <CustomButton
          primary
          title="Submit"
          onPress={onSubmit}
          loading={loadingFetch}
          disabled={loadingFetch}
        />
        <View style={styles.createSection}>
          <Text style={styles.infoText}>Already have account ?</Text>
          <TouchableOpacity onPress={() => navigate(routesName.LOGIN)}>
            <Text style={styles.linkButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}
