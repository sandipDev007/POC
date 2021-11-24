/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
mainBody: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
  },
  backImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  loginContainer:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    backgroundColor: '#FFFFFF',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  buttonStyle: {
    backgroundColor: 'rgba(69, 156, 255, 1)',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  homeUserNameText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '800',
    marginVertical: 5,
  },
  homeView: {
    backgroundColor: '#D01E21',
    marginBottom: 80,
  },
  homeContent: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  image: {
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  logoImage: {
    width: '50%',
    height: 100,
    resizeMode: 'contain',
    margin: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  subContent: {
    flex: 1,
    },
  content: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  center: {
    alignItems: 'center',
  },
});
