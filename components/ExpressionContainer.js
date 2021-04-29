import React from "react"
import {
  View,
  ScrollView,
  StyleSheet, Text, Button
} from 'react-native'
import Card from "./Card";

export default function ExpressionContainer(props) {

  const { expressionsTypes, selectExpressionHandler, onGoBack, showGoBack } = props
  return(
    <View>
      <ScrollView>
        <View style={styles.container}>
          {
            expressionsTypes.map(expressionType =>
              <Card key={expressionType.id}
                    id={expressionType.id}
                    title={expressionType.title}
                    image={expressionType.image}
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
