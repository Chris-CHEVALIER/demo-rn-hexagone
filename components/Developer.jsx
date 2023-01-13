import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

export default function Developer (props) {
  const [isHungry, setIsHungry] = useState(true)

  return (
    <View>
      <Text>
        Je m'appelle {props.firstName} et{' '}
        {isHungry ? "j'ai faim" : "j'ai bien mangé"} !
      </Text>
      <Button
        title={isHungry ? "J'ai faim" : 'Merci'}
        onPress={() => setIsHungry(false)}
        disabled={!isHungry}
      />
    </View>
  )
}

create
