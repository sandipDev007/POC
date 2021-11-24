/* eslint-disable prettier/prettier */
import TouchID from 'react-native-touch-id';
import SecureStorage from 'react-native-secure-storage';
import config from '../../utils/config';
import {LOG} from '../../utils/logger';

const optionalConfigObject = {
  title: 'Provide your TouchID', // Android
  imageColor: '#e00606', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Touch sensor', // Android
  sensorErrorDescription: 'Failed', // Android
  cancelText: 'Cancel', // Android
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};

const handleBiometric = () => {
  TouchID.isSupported(optionalConfigObject)
    .then(biometryType => {
      if (biometryType === 'FaceID') {
        LOG.info('FaceID is supported.');
      } else {
        LOG.info('TouchID is supported.');
        TouchID.authenticate(
          'Authenticate user with TouchID',
          optionalConfigObject,
        )
          .then(success => {
            LOG.info('Authenticated Successfully', success);
            let userToken = 'Helloooo';
            SecureStorage.setItem('userToken', userToken, config);
          })
          .catch(error => {
            LOG.info('Authentication Failed', error);
          });
      }
    })
    .catch(error => {
      // Failure code
      LOG.info(error);
    });
    return null;
};

export default handleBiometric;
