import React from 'react';
import { View, Text } from 'react-native';
import Jogos from '.';

export default function Jogos({ navigation }) {
    
    
    return (
        <View 
        style={{ 
            margin: 10,
            paddingTop: 20,
            flex: 1, 
            alignItems: "flex-start", 
            justifyContent: "center",          
            backgroundColor: "#757",
            }}
        >  
            <Text style= {{
                color: "#000", fontSize: 20, 
                fontFamily: "Reggae One, cursive" 
                }}
            >
                Jogos
            </Text>

            <Text style= {{
                color: "#000", fontSize: 20, 
                fontFamily: "Reggae One, cursive" 
                }}
            >
                Realize primeiro seu cadastro, para acessar os jogos!
            </Text>

            <Login/>


        </View>
    )
}
       