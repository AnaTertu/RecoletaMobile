import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
//import {lazy} from 'react';

import Home from './src/pages/Home'
import QuemSomos from './src/pages/QuemSomos'
import Jogos from './src/pages/Jogos'
import Dicas from './src/pages/Dicas'
import Cadastro from './src/pages/Cadastro'
import Perfil from './src/pages/Perfil'
import Fale from './src/pages/Fale'
import Login from './src/pages/Login'

//import Rodape from './src/components/Rodape'
//const Rodape = lazy(() => import('./components/Rodape'));

const Stack = createStackNavigator()

export default function App(){
    return(

        <NavigationContainer initialRouteName='Home' headerMode='screen'  >          
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} option={{tittle: 'Home'}}/>
                <Stack.Screen name='QuemSomos' component={QuemSomos} option={{tittle:'Quem Somos'}} />
                <Stack.Screen name='Jogos' component={Jogos} option={{tittle:'Jogos'}} />
                <Stack.Screen name='Dicas' component={Dicas} option={{tittle:'Dicas'}} />
                <Stack.Screen name='Cadastro' component={Cadastro} option={{tittle:'Cadastro'}} />
                <Stack.Screen name='Perfil' component={Perfil} option={{tittle:'Perfil'}} />
                <Stack.Screen name='Fale' component={Fale} option={{tittle:'Fale Conosco'}} /> 
                <Stack.Screen name='Login' component={Login} option={{tittle:'Login'}} /> 
                {/* <Stack.Screen name='Rodape' component={Rodape} option={{tittle:'Rodape'}} />  */}
                {/* <Rodape/> */}
            </Stack.Navigator>
        </NavigationContainer>  
                
    );
}
