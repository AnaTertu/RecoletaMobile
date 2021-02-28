import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

//export default function Login( navigation ) {
export default function Login(props) {
    const { navigation } = props
    
    //const TodosLogin = useSelector((state) => ( state.TodosLogin))
    

    return (
        <View
        style={{ 
                flex: 1,            
                backgroundColor: "##FADAB9",
                paddingLeft: 0
            }}
        >
        
        <Text
            style= {{ 
                color: "#400",
                marginTop: 20,
                fontSize: 20,
                paddingBottom:10
            }}
        >
            Faça seu Login aqui!
        </Text>
        
        <View>
            <TextInput                      
                placeholder='Usuário'
                style= {{ 
                    color: "#400",
                    marginTop: 20,
                    fontSize: 20,
                    paddingBottom:10
                }}
            />
            <TextInput  
                placeholder='Senha' 
                secureTextEntry={true}                            
                style= {{ 
                    color: "#400",
                    marginTop: 20,
                    fontSize: 20,
                    paddingBottom:10
                }}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
            >
                <Text
                    style= {{ 
                        color: "#400",
                        marginTop: 20,
                        fontSize: 20,
                        paddingBottom:10
                    }}
                >
                    Entrar
                </Text>
            </TouchableOpacity>
        </View>

            <TouchableOpacity
                title='Cadastro'
                onPress={() => 
                navigation.navigate('Cadastro')}
            >

                <Text
                    style={{
                        fontWeight: "bold",
                        color: "#846",
                        fontSize: 13,
                        paddingTop: 50,
                        paddingLeft: 200
                    }}
                >
                    Já possui cadastro?{"\n"}
                    Faça o login clicando aqui!
                </Text>
            </TouchableOpacity>
        </View>  
    )
}
