import React, {useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import Main from './screens/Main'

function fetchFonts(){
  return Font.loadAsync({
    'open-sans': require('../../../projects/flavia/flavia/assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('../../../projects/flavia/flavia/assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)

  if(!dataLoaded){
    return (
      <AppLoading startAsync={fetchFonts}
                  onFinish={() => setDataLoaded(true)}
                  onError={(err) => console.error(err)}
      />
    )
  }

  return <Main />
}
