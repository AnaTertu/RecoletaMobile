import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import Home from './src/pages/Home'
import QuemSomos from './src/pages/QuemSomos'
// import Jogos from './src/pages/Jogos'
// import Dicas from './src/pages/Dicas'
// import Cadastro from './src/pages/Cadastro'
// import Perfil from './src/pages/Perfil'
import Fale from './src/pages/Fale'
import Login from './src/pages/Login'


const Stack = createStackNavigator()

export default function App(){
    return(
           
                <NavigationContainer initialRouteName='Home' headerMode='screen'>          
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={Home} option={{tittle: 'Home'}} />
                        <Stack.Screen name="QuemSomos" component={QuemSomos} option={{tittle:'QuemSomos'}} />
                        {/*<Stack.Screen name="Jogos" component={Jogos} option={{tittle:'Jogos'}} />
                        <Stack.Screen name="Dicas" component={Dicas} option={{tittle:'Dicas'}} />
                        <Stack.Screen name="Cadastro" component={Cadastro} option={{tittle:'Cadastro'}} />
                        <Stack.Screen name="Perfil" component={Perfil} option={{tittle:'Perfil'}} /> */}
                        <Stack.Screen name="Fale" component={Fale} option={{tittle:'Fale'}} /> 
                        <Stack.Screen name="Login" component={Login} option={{tittle:'Login'}} />    
                    </Stack.Navigator>
                </NavigationContainer>  
                
    );
}
