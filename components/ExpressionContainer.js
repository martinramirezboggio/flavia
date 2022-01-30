import { Ionicons } from "@expo/vector-icons";
import React from "react"
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native'
import Card from "./Card";
import CustomButton from "./CustomButton";

export default function ExpressionContainer(props) {

  const { expressions, selectExpressionHandler, onGoBack, showGoBack } = props

  return(
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.expressionContainer}>
          {
            expressions.map(expression =>
              <Card key={expression.id}
                    id={expression.id}
                    title={expression.title}
                    image={expression.image}
                    type={expression.type}
                    onClick={selectExpressionHandler}
              />
            )
          }
        </View>
      </ScrollView>
      <View style={styles.goBackBtn}>
        {
          showGoBack && 
            <CustomButton 
              onPress={onGoBack} 
              label="Regresar" 
              icon={ <Ionicons name='arrow-back-circle-outline' size={25} color='white' />}
            />
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "column",
    justifyContent: 'space-between',
  },
  expressionContainer: {
    width: '80%',
    flexDirection: "row",
    paddingTop: 30,
    paddingLeft: 20,
    flexWrap: "wrap",
  },
  goBackBtn:{
    marginBottom: 20,
  }
})
