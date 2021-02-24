import React from 'react'
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

export default function Login( navigation ) {

    const TodosLogin = useSelector((state) => ( state.TodosLogin));
    

    return (
        <View 
            style={{                
                flex: 2, 
                margin: 0,
                paddingTop: 0,
                padding: 250,
                alignItems: "center",
                justifyContent: "center",             
                backgroundColor: "#099"
                }}
        >
            
            <Text 
                style={{ 
                    color: "#fff",
                    fontSize: 20,
                    fontFamily: "Reggae One, cursive"
                    }}
                   
            >    
                Login  
            </Text>

        </View>        
    )
}
