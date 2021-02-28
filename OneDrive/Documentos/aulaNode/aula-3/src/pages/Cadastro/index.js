import React from 'react'
import { Text, View, TextInput, TouchableOpacity  } from 'react-native'

import { useScrollToTop } from '@react-navigation/native'
import { RadioButton } from 'react-native-paper'

//export default function Cadastro(navigation) {
export default function Login(props) {
        const { navigation } = props
    
    const ref = React.useRef(null)
    const [checked, setChecked] = React.useState('first')

    useScrollToTop(ref)

    return (
        <View
        style={{ 
            flex: 1,            
            backgroundColor: '##FADAB9',
            paddingLeft: 20
            }}
        >
            
            <Text
                style= {{ 
                    color: '#400',
                    marginTop: 20,
                    fontSize: 20,
                    paddingBottom:20
                }}
            >
                Faça seu Cadastro aqui!
            </Text>
            
            <View>
                <Text>
                    <TextInput                      
                        placeholder='Nome'
                        style= {{ 
                            color: '#400',
                            marginTop: 20,
                            fontSize: 20,
                            paddingBottom:10
                        }}
                    />

                    <TextInput                      
                        placeholder='Email'
                        style= {{ 
                            color: '#400',
                            marginTop: 20,
                            fontSize: 20,
                            paddingBottom:10
                        }}
                    />

                    <TextInput                      
                        placeholder='Telefone'
                        style= {{ 
                            color: '#400',
                            marginTop: 20,
                            fontSize: 20,
                            paddingBottom:10
                        }}
                    />
                    
                    <TextInput  
                        placeholder='Senha' 
                        secureTextEntry={true}                            
                        style= {{ 
                            color: '#400',
                            marginTop: 20,
                            fontSize: 20,
                            paddingBottom:10
                        }}
                    />

                    <TextInput  
                        placeholder='Confirme sua Senha' 
                        secureTextEntry={true}                            
                        style= {{ 
                            color: '#400',
                            marginTop: 20,
                            fontSize: 20,
                            paddingBottom:10
                        }}
                    />
                </Text>
                <Text>
                    <RadioButton
                        value='first'
                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('first')}
                        
                    />             
                        Aceitar termos e condições
                </Text>

                <TouchableOpacity
                    
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text
                        style= {{ 
                            color: '#400',
                            marginTop: 20,
                            fontSize: 20,
                            paddingBottom:10
                        }}
                    >
                        Click para logar!
                        
                    </Text>       
                </TouchableOpacity>
                
            </View>
        </View>  
    )
}
