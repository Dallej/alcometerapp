import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';

import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


export default function App() {

  const [weight,setWeight] = useState();
  const [promiles,setPromiles] = useState(0);
  const [bottles,setBottles] = useState(0);
  const [time,setTime] = useState(0);
  var [gender,setGender] = useState(0);
  
  var radio_props = [
    {label: 'Male', value: 0},
    {label: 'Female', value: 1 }
  ];

  function calculate(){
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight /10;
    const gramsleft = grams - burning * time;

    const result = gramsleft / (weight * 0.7)
    /*  if (radio_props.value = 0){
       const result = grams / (weight * 0.7)
     }else{
       const result = grams / (weight * 0.6)
     }
 */
     if (result < 0){
      setPromiles(0);
     }else
    setPromiles(result);
  };
  

  return (
    <View style={styles.container}>
      <Text>Weight</Text>
      <TextInput placeholder="Enter your  weight" keyboardType="numeric" value={weight} onChangeText={text => setWeight(text)}></TextInput>
      

      <Text>Bottles</Text>
      <DropDownPicker
      items={[
          {label: '1 pullo', value: '1'},
          {label: '2 pullo', value: '2'},
          {label: '3 pullo', value: '3'},
          {label: '4 pullo', value: '4'},
          {label: '5 pullo', value: '5'},
          {label: '6 pullo', value: '6'},
          {label: '7 pullo', value: '7'},
          {label: '8 pullo', value: '8'},
          {label: '9 pullo', value: '9'},
      ]}
      defaultIndex={0}
      containerStyle={{height: 40}}
      onChangeItem={item => setBottles(item.value)}
      
      />
      <Text style= {styles.dropdownstyle}>Time</Text>
      <DropDownPicker
      items={[
          {label: '1 tunti', value: '1'},
          {label: '2 tuntia', value: '2'},
          {label: '3 tuntia', value: '3'},
          {label: '4 tuntia', value: '4'},
          {label: '5 tuntia', value: '5'},
          {label: '6 tuntia', value: '6'},
          {label: '7 tuntia', value: '7'},
          {label: '8 tuntia', value: '8'},
          {label: '9 tuntia', value: '9'},
          
      ]}
      defaultIndex={0}
      containerStyle={{height: 40}}
      onChangeItem={item => setTime(item.value)}
      />

      <Text>Gender</Text>
      <RadioForm
      radio_props={radio_props}
      initial={0}
      onPress={(value) => setGender({value:value})}
    />

      <Text>Promilles</Text>
      <Text style={{fontWeight:'bold'}}>{promiles.toFixed(2)}</Text>

      <Button onPress={calculate} title="Calculate"></Button>
     {/*  <Text>testit</Text>
      <Text>pullo {bottles}</Text>
      <Text>promilet {promiles}</Text>
      <Text>gender {gender}</Text>
      <Text>aika {time}</Text>
      <Text>paino {weight}</Text>
      <Text>prop </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  dropdownstyle:{
    marginTop:20
  }
  
  
});
