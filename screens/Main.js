import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import ExpressionContainer from "../components/ExpressionContainer";
import Header from '../components/Header';
import {EXPRESSION_TYPES, EXPRESSIONS} from "../constants/data";
import { Audio } from 'expo-av';

const expressionSounds = {
  //actions
  anda:  require('../assets/sounds/anda.mp3'),
  ven:  require('../assets/sounds/ven.mp3'),
  pasear:  require('../assets/sounds/pasear.mp3'),
  // Family
  mama:  require('../assets/sounds/mama.mp3'),
  papa: require('../assets/sounds/papa.mp3'),
  abuelo: require('../assets/sounds/abuelo.mp3'),
  abuela: require('../assets/sounds/abuela.mp3'),
  tio:  require('../assets/sounds/tio.mp3'),
  tia:  require('../assets/sounds/tia.mp3'),
  primo: require('../assets/sounds/primo.mp3'),
  prima: require('../assets/sounds/prima.mp3'),
  hermano: require('../assets/sounds/hermano.mp3'),
  hermana: require('../assets/sounds/hermana.mp3'),
  amigo: require('../assets/sounds/amigo.mp3'),
  
  //Greetings
  hola: require('../assets/sounds/hola.mp3'),
  chau: require('../assets/sounds/chau.mp3'),

  //food
  agua: require('../assets/sounds/agua.mp3'),
  sopa: require('../assets/sounds/sopa.mp3'),
}

const Main = props => {
  const [selectedType, setSelectedType] = useState(null)
  const [isMainScreen, setIsMainScreen] = useState(true)
  const [expressions, setExpressions] = useState(EXPRESSION_TYPES)
  const [selectedExpressions, setSelectedExpressions] = useState([])

  useEffect(() => {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: true,
    })
  }, [])

  function selectExpressionHandler(id, expressionType=null) {
    if(!expressionType) {
      //means that an expression type was selected ex: family or greetings
      setSelectedType(id)
      const filteredExpressions = EXPRESSIONS.filter(expression => expression.type === id)
      setExpressions(filteredExpressions)
      setIsMainScreen(false)
    } else {
      // Here is when the actual expression was chosen 
      const newSelectedExpressions = [...selectedExpressions]
      const selectedExpression = EXPRESSIONS.find(expression => expression.id === id)

      newSelectedExpressions.push(selectedExpression)

      setSelectedExpressions(newSelectedExpressions)
      goBack()
    }
  }

  function goBack() {
    setSelectedType(null)
    setIsMainScreen(true)
    setExpressions(EXPRESSION_TYPES)
  }

  function onDeleteSelectedExpressions() {
    let newSelectedExpressions = [...selectedExpressions]
    newSelectedExpressions.pop()
    setSelectedExpressions(newSelectedExpressions)
  }

  async function playSound(index) {
    const { sound } = await Audio.Sound.createAsync(expressionSounds[index])

    await sound.playAsync()
        .then( async playBackStatus => {
          setTimeout(() => {
            sound.unloadAsync()
          }, playBackStatus.durationMillis)
        })
        .catch(e => {
            console.log({e})
        })

    await timeOut(800)
  }

  function timeOut(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async function onPlay() {
    for (const x of selectedExpressions) {
      await playSound(x.sound)
    }
  }

  return(
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'default'}
        showHideTransition={'fade'}
        hidden={true} />

      <Header 
        selectedExpressions={selectedExpressions} 
        onDeleteSelectedExpressions={onDeleteSelectedExpressions} 
        onPlay={onPlay}
      />
      
      <ExpressionContainer
        expressions={expressions}
        selectExpressionHandler={selectExpressionHandler}
        showGoBack={!isMainScreen}
        onGoBack={goBack}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Main;