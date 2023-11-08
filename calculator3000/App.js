import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Bouton from './components/Bouton';

export default function App() {
  const [textToCalculate, setTextToCalculate] = useState('');

  const handleDataPicker = value => {
    console.log('app handleDataPicker :', value);

    if (value == 'AC') {
      setTextToCalculate('');
    } else if (value == 'Del') {
      setTextToCalculate(textToCalculate.slice(0, -1));
    } else if (value == '=') {
      console.log(textToCalculate);
      
      setTextToCalculate(String(eval(textToCalculate)));
    } else {
      setTextToCalculate((prevState) => prevState+ value);
    }
    console.log(textToCalculate);
  };

  return (
    <View style={styles.fullCalculator}>
      <View>
        <Text style={styles.calculatorText}>Calculator</Text>
      </View>

      <View style={styles.wannabeGrid}>
        <Text style={styles.calculatorOutput}>{textToCalculate}</Text>

        <View style={styles.rowStyle}>
          <Bouton value={'AC'} onPress={handleDataPicker}></Bouton>
          <Bouton value={'^'} onPress={handleDataPicker}></Bouton>
          <Bouton value={'%'} onPress={handleDataPicker}></Bouton>
          <Bouton value={'/'} onPress={handleDataPicker}></Bouton>
        </View>

        <View style={styles.rowStyle}>
          <Bouton value={'7'} onPress={handleDataPicker}></Bouton>
          <Bouton value={'8'} onPress={handleDataPicker}></Bouton>
          <Bouton value={'9'} onPress={handleDataPicker}></Bouton>
          <Bouton value={'*'} onPress={handleDataPicker}></Bouton>
        </View>

        <View style={styles.rowStyle}>
          <Bouton value={'4'} onPress={handleDataPicker}></Bouton>
          <Bouton value={'5'} onPress={handleDataPicker}></Bouton>
          <Bouton value={'6'} onPress={handleDataPicker}></Bouton>
          <Bouton value={'-'} onPress={handleDataPicker}></Bouton>
        </View>

        <View style={styles.rowStyle}>
          <Bouton value={'1'} onPress={handleDataPicker}></Bouton>
          <Bouton value={'2'} onPress={handleDataPicker}></Bouton>
          <Bouton value={'3'} onPress={handleDataPicker}></Bouton>
          <Bouton value={'+'} onPress={handleDataPicker}></Bouton>
        </View>

        <View style={styles.rowStyle}>
          <Bouton value={'.'} onPress={handleDataPicker}></Bouton>
          <Bouton value={'0'} onPress={handleDataPicker}></Bouton>
          <Bouton value={'Del'} onPress={handleDataPicker}></Bouton>
          <Bouton value={'='} onPress={handleDataPicker}></Bouton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 5,
  },
  wannabeGrid: {
    padding: 20,
    marginBottom: 100,
  },
  fullCalculator: {
    flex: 1,
    justifyContent: 'center',
    justifyContent: 'space-evenly',
  },
  calculatorText: {
    fontSize: 45,
    marginBottom: 20,
  },
  calculatorOutput: {
    fontSize: 50,
    marginBottom: 100,
    textAlign: 'right',
  },
});
