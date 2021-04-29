import React, {useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import ExpressionContainer from "./components/ExpressionContainer";
import {EXPRESSION_TYPES, EXPRESSIONS} from "./constants/dummies";

function fetchFonts(){
  return Font.loadAsync({
    'open-sans': require('../../../projects/flavia/flavia/assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('../../../projects/flavia/flavia/assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)
  const [selectedType, setSelectedType] = useState(null)
  const [expressions, setExpressions] = useState(EXPRESSION_TYPES)
  const [isMainScreen, setIsMainScreen] = useState(true)

  function selectExpressionHandler(id, expressionType=null) {
    if(!expressionType) {
      //means that an expression type was selected
      setSelectedType(id)
      const selectedExpressions = EXPRESSIONS.filter(expression => expression.type === id)
      setExpressions(selectedExpressions)
      setIsMainScreen(false)
    }
  }

  function goBack() {
    setExpressions(EXPRESSION_TYPES)
    setIsMainScreen(true)
  }

  if(!dataLoaded){
    return (
      <AppLoading startAsync={fetchFonts}
                  onFinish={() => setDataLoaded(true)}
                  onError={(err) => console.error(err)}
      />
    )
  }

  return (
    <View style={styles.container}>
      {/*<Header />*/}
      <ExpressionContainer
        expressionsTypes={expressions}
        selectExpressionHandler={selectExpressionHandler}
        showGoBack={!isMainScreen}
        onGoBack={goBack}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
