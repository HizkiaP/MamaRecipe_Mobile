import {StyleSheet, Text, View} from 'react-native';
import {Box, Button, NativeBaseProvider} from 'native-base';
import React from 'react';

const Buttons = ({title, onPress, style}) => {
  return (
    <NativeBaseProvider>
      <Box alignItems="center">
        <Button style={style} onPress={onPress}>
          {title}
        </Button>
      </Box>
    </NativeBaseProvider>
  );
};

export default Buttons;

const styles = StyleSheet.create({});
