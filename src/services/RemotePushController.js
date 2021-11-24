/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import PushNotification from 'react-native-push-notification';
import {LOG} from '../utils/logger';

const RemotePushController = () => {
  useEffect(() => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        LOG.info('TOKEN:', token);
      },
      // (required) Called when a remote or local notification is opened or received
      onNotification: function (notification) {
        LOG.info('REMOTE NOTIFICATION ==>', notification);
        // process the notification here
        if (notification.foreground) {
          PushNotification.localNotification({
            title:notification.title,
            message:notification.message,
          });
          }
      },
      // Android only: GCM or FCM Sender ID
      senderID: '628547159249',
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }, []);
  return null;
};
export default RemotePushController;
