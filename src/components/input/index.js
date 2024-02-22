import {StyleSheet, Text, View} from 'react-native';
import {Box, Input, NativeBaseProvider} from 'native-base';
import React from 'react';

const Inputs = ({placeholder, w, style, type = 'text'}) => {
  return (
    <NativeBaseProvider>
      <Box alignItems="center">
        <Input type={type} style={style} placeholder={placeholder} w={w} />
      </Box>
    </NativeBaseProvider>
  );
};

export default Inputs;

const styles = StyleSheet.create({});
