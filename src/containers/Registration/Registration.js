/* eslint-disable prettier/prettier */
import React, {useState, createRef} from 'react';
import {
  TextInput,
  View,
  Text,
  Image,
  ImageBackground,
  Alert,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../styles/registrationStyle';
import Loader from '../../components/Loader';

const RegisterScreen = props => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const emailInputRef = createRef();
  const ageInputRef = createRef();
  const addressInputRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) {
      Alert.alert('', 'Please fill Name');
      return;
    }
    if (!userEmail) {
      Alert.alert('', 'Please fill Email');
      return;
    }
    if (!userAge) {
      Alert.alert('', 'Please fill Age');
      return;
    }
    if (!userAddress) {
      Alert.alert('', 'Please fill Address');
      return;
    }
    if (!userPassword) {
      Alert.alert('', 'Please fill Password');
      return;
    }
    //Show Loader
    setLoading(true);
    if (userName && userEmail && userAge && userAddress && userPassword) {
      setLoading(false);
      Alert.alert('Registraion', 'Successfully registraion done.', [
        {text: 'OK', onPress: () => props.navigation.navigate('LoginScreen')},
      ]);

    }
  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={styles.container}>
        <Image
          source={require('../../images/CapgeminiLogo.png')}
          style={styles.image}
        />
        <Text style={styles.successTextStyle}>Registration Successful</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <ImageBackground source={require('../../images/BackgroundLogo.png')} style={styles.backImage}>
    <View style={styles.subContent}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.content}>
        <View style={styles.center}>
          <Image
            source={require('../../images/CapgeminiLogo.png')}
            style={styles.logoImage}
          />
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserName => setUserName(UserName)}
              underlineColorAndroid="#f000"
              placeholder="FullName"
              placeholderTextColor="#A2A2A2"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              underlineColorAndroid="#f000"
              placeholder="UserName"
              placeholderTextColor="#A2A2A2"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserPassword => setUserPassword(UserPassword)}
              underlineColorAndroid="#f000"
              placeholder="Password"
              placeholderTextColor="#A2A2A2"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
                ageInputRef.current && ageInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserAge => setUserAge(UserAge)}
              underlineColorAndroid="#f000"
              placeholder="Age"
              placeholderTextColor="#A2A2A2"
              keyboardType="numeric"
              ref={ageInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                addressInputRef.current && addressInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserAddress => setUserAddress(UserAddress)}
              underlineColorAndroid="#f000"
              placeholder="Address"
              placeholderTextColor="#A2A2A2"
              autoCapitalize="sentences"
              ref={addressInputRef}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          {errortext !== '' ? (
            <Text style={styles.errorTextStyle}>{errortext}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
    </ImageBackground>
  );
};
export default RegisterScreen;
