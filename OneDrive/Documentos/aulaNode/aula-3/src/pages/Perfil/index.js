import React from 'react'
import { Text, View} from 'react-native'

import { useScrollToTop } from '@react-navigation/native'

export default function Perfil(navigation) {

    const ref = React.useRef(null)

    useScrollToTop(ref)

    return (
        <View 
            style={{
              flex:1,
              padding: 24,
            }}
        >
              <Text style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  fontWeight: 'bold',
                  textAlign: 'center'
                  }}>
                    Perfil......
              </Text>
        </View>
    )
}
