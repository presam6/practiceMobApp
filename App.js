import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

// function for custom button (ma edit ang text color)
const CustomButton = ({
  onPress,
  title,
  textColor,
  width,
  buttonStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.customButton, { width: width }, buttonStyle]}
    >
      <Text style={{ color: textColor }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textTitle}>Sample Text</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.buttons}>
        <Button title='hello' onPress={() => Alert.alert('Hello')} />
      </View>

      <View style={styles.buttons}>
        <Button
          title='login'
          disabled
          color={'skyblue'}
          onPress={() => Alert.alert('Welcome bruv')}
        />
      </View>

      <View style={styles.centeredButtons}>
        <CustomButton
          onPress={() => Alert.alert('Custom Button Pressed')}
          title="GPT button"
          textColor="white"
          buttonStyle={{ backgroundColor: 'pink' }}
          width={200}
        />
        <CustomButton
          onPress={() => Alert.alert('Noice')}
          title='Subscribe'
          textColor='white'
          buttonStyle={{ backgroundColor: 'red' }}
          width={150}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  textTitle: {
    marginVertical: 10,
    fontSize: 24,
    color: 'white',
    fontStyle: 'italic',
  },
  buttons: {
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '95%',
    borderRadius: 5,
    marginVertical: 5,
  },
  centeredButtons: {
    flexDirection: 'col',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 10,
  },
  customButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 10,
  },
});