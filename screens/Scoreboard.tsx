import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';

export default function TabOneScreen() {
  var [score1, setScore1] = useState(0);
  var [score2, setScore2] = useState(0);
  function resetScore(){
    setScore2(score2 = 0)
    setScore1(score1 = 0)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scoreboard</Text>
      <View>
        <View style={styles.containerReset}>
          <View style={styles.leftSquare}><Text style={styles.textScore}>{score1}</Text></View>
          <View style={styles.rightSquare}><Text style={styles.textScore}>{score2}</Text></View>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 30, }}>
        <View style={styles.containerBtn}>
          <TouchableOpacity style={styles.btnAddLeft} onPress={() => setScore1(score1 + 1)}><Text style={styles.textBtn}>Add  +1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnAddRight} onPress={() => setScore2(score2 + 1)}><Text style={styles.textBtn}>Add  +1</Text></TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'column' }}>
          <TouchableOpacity style={styles.btnReset} onPress={resetScore}>
            <Text style={styles.textBtn}>Reset Score</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginTop: '4%',
    fontWeight: 'bold',
  },
  containerReset: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftSquare: {
    minWidth: '35%',
    minHeight: '65%',
    backgroundColor: 'gray',
    marginRight: '6%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSquare: {
    minWidth: '35%',
    minHeight: '65%',
    marginLeft: '6%',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textScore: {
    textAlign: 'center',
    fontSize: 96,
    bottom: 5,
  },
  containerBtn: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnReset: {
    minWidth: '85%',
    minHeight: 45,
    backgroundColor: 'rgb(255,65,95)',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnAddLeft: {
    backgroundColor: 'rgb(30,150,95)',
    minHeight: 45,
    minWidth: '37%',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '15%',
    marginRight: '5%'
  },
  btnAddRight: {
    backgroundColor: 'rgb(30,150,95)',
    minHeight: 45,
    minWidth: '37%',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '15%',
    marginLeft: '5%',
  },
  textBtn: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  },
});
