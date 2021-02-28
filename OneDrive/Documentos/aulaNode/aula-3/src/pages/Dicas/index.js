import React from 'react'
import { Text, View, ScrollView, Image } from 'react-native'

import { useScrollToTop } from '@react-navigation/native'

export default function Dicas(navigation) {

    const ref = React.useRef(null)

    useScrollToTop(ref)

    return (
        <View 
            style={{
                flex:1,
                padding: 20,
            }}
        >
            <Text style={{
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 15,
                fontWeight: 'bold',
            }}>
                    Nos diga sua sugestão:
            </Text>
        </View>
    )
}
