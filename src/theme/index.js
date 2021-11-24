/* eslint-disable prettier/prettier */
import customCommonColor from './customCommonColor';
import getTheme from '../../native-base-theme/components';
import textTheme from '../../native-base-theme/components/Text';
import contentTheme from '../../native-base-theme/components/Content';
import merge from 'lodash/merge';

const theme = () => {
  const nbTheme = getTheme(customCommonColor);
  const overrides = {
    'Nativebase.Text': {
        ...textTheme(),
        '.link': {
            color: '#000000',
        },
    },
    'Nativebase.Content': {
        ...contentTheme(),
        '.contentStyle':{
        },
    },
  };
  return merge(nbTheme,overrides);
};

export default theme;
