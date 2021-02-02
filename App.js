import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';

import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


export default function App() {

  const [weight,setWeight] = useState();
  const [promiles,setPromiles] = useState(0);
  const [bottles,setBottles] = useState(1);
  const [time,setTime] = useState(1);
  var [gender,setGender] = useState(0);
  
 

  function calculate(){
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight /10;
    const gramsleft = grams - burning * time;
    let result = 0;

    // const result = gramsleft / (weight * 0.7)
     if (gender === 'male'){
       result = grams / (weight * 0.7)
     }else{
       result = grams / (weight * 0.6)
     }
     setPromiles(result)

     if (result < 0){
      setPromiles(0);
     }else
    setPromiles(result);
  };
  

  return (
    <View style={styles.container}>
      <Text>Weight</Text>
      <TextInput  style={{paddingLeft:50}} placeholder="Enter your  weight" keyboardType="numeric" value={weight} onChangeText={text => setWeight(text)}></TextInput>
      
      <View style={[styles.margin10, {zIndex:6000}]}>
      <Text>Bottles</Text>
      <DropDownPicker style={styles.dropdownstyle}
      items={[
          {label: '1 bottle', value: 1},
          {label: '2 bottles', value: 2},
          {label: '3 bottles', value: 3},
          {label: '4 bottles', value: 4},
          {label: '5 bottles', value: 5},
          {label: '6 bottles', value: 6},
          {label: '7 bottles', value: 7},
          {label: '8 bottles', value: 8},
          {label: '9 bottles', value: 9},
      ]}
      defaultIndex={0}
      containerStyle={{height: 40}}
      defaultValue={bottles}
      onChangeItem={item => setBottles(item.value)}
      labelStyle={{color:"#0275d8"}}
      
      />
      </View >
      <View style={[styles.margin10, {zIndex:5000}]}>
      <Text style= {styles.dropdownstyle}>Time</Text>
      <DropDownPicker
      items={[
          {label: '1 hour', value: 1},
          {label: '2 hours', value: 2},
          {label: '3 hours', value: 3},
          {label: '4 hours', value: 4},
          {label: '5 hours', value: 5},
          {label: '6 hours', value: 6},
          {label: '7 hours', value: 7},
          {label: '8 hours', value: 8},
          {label: '9 hours', value: 9},
          
      ]}
      defaultIndex={0}
      containerStyle={{height: 40}}
      defaultValue={time}
      onChangeItem={item => setTime(item.value)}
      labelStyle={{color:"#0275d8"}}
      />
      </View>
      <View style={styles.margin10}>
      <Text>Gender</Text>
      <RadioForm
      radio_props={[
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female'}
      ]}
      
      onPress={(value) => {setGender(value)}}
    />
    </View>
    <View style={styles.margin10}>
      <Text>Promilles</Text>
      <Text style={{fontWeight:'bold'}}>{promiles.toFixed(2)}</Text>
    </View>
      <Button onPress={calculate} title="Calculate"></Button>


     {/*  <Text>testit</Text>
      <Text>pullo {bottles}</Text>
      <Text>promilet {promiles}</Text> THIS IS ONLY FOR TESTIN
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
  margin10:{
    margin:10
  },
 


  
  
});
