import React, {useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import ExpressionContainer from "../components/ExpressionContainer";
import Header from '../components/Header';
import {EXPRESSION_TYPES, EXPRESSIONS} from "../constants/dummies";

const Main = props => {
  const [selectedType, setSelectedType] = useState(null)
  const [isMainScreen, setIsMainScreen] = useState(true)
  const [expressions, setExpressions] = useState(EXPRESSION_TYPES)
  const [selectedExpressions, setSelectedExpressions] = useState([])

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

  return(
    <View style={styles.container}>
      <Header 
        selectedExpressions={selectedExpressions} 
        onDeleteSelectedExpressions={onDeleteSelectedExpressions} 
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