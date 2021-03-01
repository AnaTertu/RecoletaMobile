import * as React from 'react'
import { createAppContainer, createDrawerNavigator } from 'react-navigation'
import Home from '../pages/Home'
import QuemSomos from '../pages/QuemSomos'
import Jogos from '../pages/Jogos'
import Dicas from '../pages/Dicas'
import Cadastro from '../pages/Cadastro'
import Perfil from '../pages/Perfil'
import Fale from '../pages/Fale'

const myDrawer = createDrawerNavigator (
    {
        Home: Home,
        QuemSomos: QuemSomos,
        Jogos: Jogos,
        Dicas: Dicas,
        Cadastro: Cadastro,
        Perfil: Perfil,
        Fale: Fale
    }
)

export default createAppContainer(myDrawer)