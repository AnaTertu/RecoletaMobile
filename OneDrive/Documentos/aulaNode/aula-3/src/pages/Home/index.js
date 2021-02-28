import React from 'react'
import { Text, View, TouchableOpacity, Image, Button, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { useScrollToTop } from '@react-navigation/native';

//import Rodape from '../../components/Rodape'

//import {lazy} from 'react'
//const Rodape = lazy(() => import('../../scomponents/Rodape'))

export default function Home(props) {
    const { navigation } = props

    const ref = React.useRef(null);

    useScrollToTop(ref);

    return (
        <View        
            style={{
                flex: 1,
                backgroundColor: '#C6DE6F',
            }}
        >

            <View style={{margin: 10, alignItems: 'flex-start'}}>
                <Image source={require('../../assets/logo2.png')} /> 
            </View>
            
            <View style={{marginTop: -100, alignItems: 'stretch', marginLeft: 230, marginBottom: 5}}>
                <TouchableOpacity
                    style={{
                        marginTop: 5,
                        marginBottom: 5
                    }}
                    title='Ir para Quem Somos'
                    onPress={() => navigation.navigate('QuemSomos')}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: '#42570C',
                            fontSize: 16,
                        }}
                    >
                        Quem Somos
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        marginBottom: 5
                    }}
                    title='Ir para Jogos'
                    onPress={() => navigation.navigate('Jogos')}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',

                            color: '#42570C',
                            color: '#400',
                            fontSize: 16,
                        }}
                    >
                        Jogos
                    </Text>
                </TouchableOpacity> 
                <TouchableOpacity
                    style={{
                        marginBottom: 5
                    }}
                    title='Ir para Dicas'
                    onPress={() => navigation.navigate('Dicas')}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: '#42570C',
                            fontSize: 16,
                        }}
                    >
                        Dicas
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        marginBottom: 5
                    }}
                    title='Ir para Cadastro'
                    onPress={() => navigation.navigate('Cadastro')}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: '#42570C',
                            fontSize: 16,
                        }}
                    >
                        Cadastro
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        marginBottom: 5
                    }}
                    title='Ir para Perfil'
                    onPress={() => navigation.navigate('Perfil')}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: '#42570C',
                            fontSize: 16,
                        }}
                    >
                        Perfil
                    </Text>
                </TouchableOpacity> 

                <TouchableOpacity
                    style={{
                        marginBottom: 5
                    }}
                    title='Ir para Fale Conosco'
                    onPress={() => navigation.navigate('Fale')}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: '#42570C',
                            fontSize: 16,
                        }}
                    >
                        Fale Conosco
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView ref={ref}> 
                <View style={{margin:10}}>
                    <Text
                        style={{ 
                            fontWeight: 'bold',
                            color: '#42570C',
                            marginTop: 5,
                            paddingLeft: 10,
                            fontSize: 20,
                        }}
                    >
                        O que é o Recoleta?

                    </Text>
                    <Text
                        style={{
                            flex: 1,
                            color: '#000',
                            fontSize: 14,
                        }}
                    >
                        {'\n'}
                        Somos uma organização não-governamental sem fins lucrativos,
                        que trabalha pela educação e conscientização {'\n'} para o consumo
                        consciente e estilo de vida sustentável!{'\n'}
                    </Text>              

                </View> 
            </ScrollView> 

            <View style={{margin:10}}>
                <Button  
                title = 'Login'
                onPress={ () => navigation.navigate('Login')}/>
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={{
                    
                    marginBottom: 10,
                    alignItems: 'flex-end',
                }}
            >
                
                <Text
                    style={{
                        fontWeight: 'bold',
                        color: '#42570C',
                        fontSize: 18,
                        marginRight: 35,
                        marginBottom: -28
                    }}
                >
                    Exit
                </Text>  
                <Ionicons name='ios-exit' color='#fff' size={30} />
            </TouchableOpacity>

        </View>
    )
}
