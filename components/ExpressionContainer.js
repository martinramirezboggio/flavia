import React from "react"
import {
  View,
  ScrollView,
  StyleSheet, Text, Button
} from 'react-native'
import Card from "./Card";

export default function ExpressionContainer(props) {

  const { expressions, selectExpressionHandler, onGoBack, showGoBack } = props

  return(
    <View>
      <ScrollView>
        <View style={styles.container}>
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
      <View>
        {
          showGoBack && <Button onPress={onGoBack} title="Regresar" />
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: "row",
    paddingTop: 30,
    paddingLeft: 20,
    flexWrap: "wrap"
  }
})
