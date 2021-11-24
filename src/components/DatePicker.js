/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

export default () => {
  const [date, setDate] = useState(new Date());

  return <DatePicker
  mode="date"
  minimumDate={date}
  date={date} onDateChange={setDate} />;
};
