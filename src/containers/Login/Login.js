/* eslint-disable prettier/prettier */
import React, {useEffect, useState, useContext,createRef} from 'react';
import {
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Alert,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import styles from '../styles/loginStyles';
import {AuthContext} from '../../containers/context/context';
import BiometricAuthentication from './BiometricAuthentication';

const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');
  const { signIn } = useContext(AuthContext);
  const passwordInputRef = createRef();
  useEffect(() => {
    SplashScreen.hide();
    BiometricAuthentication();
  }, []);
  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      Alert.alert('', 'Please fill Email');
      return;
    }
    if (!userPassword) {
      Alert.alert('', 'Please fill Password');
      return;
    }
    if (userEmail && userPassword) {
      signIn(userEmail, userPassword);
    }
  };
   return (
    <ImageBackground source={require('../../images/BackgroundLogo.png')} style={styles.backImage}>
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.loginContainer}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={styles.center}>
              <Image
                source={require('../../images/CapgeminiLogo.png')}
                style={styles.image}
              />
            </View>
            <Text
              style={styles.signInText}
            >
              Sign in to get started
            </Text>
            <View style={styles.SectionStyle}>
              <Image source={require('../../images/MenuIcons/user.png')} style={styles.MenuIconStyle} />
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserEmail => setUserEmail(UserEmail)}
                placeholder="UserName"
                placeholderTextColor="#A2A2A2"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
            <Image source={require('../../images/MenuIcons/password.png')} style={styles.MenuIconStyle} />
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                placeholder="Password"
                placeholderTextColor="#A2A2A2"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext !== '' ? (
              <Text style={styles.errorTextStyle}>{errortext}</Text>
            ) : null}
            <Text
              style={styles.forgetPassword}
              onPress={() => Alert.alert('','Forget password link pressed')}
            >
              Forget password ?
            </Text>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              Get New Account ... SIGN UP
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
    </ImageBackground>
  );
};
export default LoginScreen;
