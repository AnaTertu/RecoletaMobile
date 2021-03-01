import React from 'react'
import { Text, View, ScrollView } from 'react-native'

import { useScrollToTop } from '@react-navigation/native'

export default function QuemSomos(navigation) {

    const ref = React.useRef(null)

    useScrollToTop(ref)

    return (
        <View 
            style={{
              flex:1,
              padding: 24,
            }}
        >
            <ScrollView ref={ref}>
                <Text 
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text>Recoleta {'\n'}</Text>
                        <Text>Criado em novembro de 2020. O Recoleta é uma organização não-governamental, sem fins lucrativos,{'\n'}
                        que trabalha pela conscientização da sociedade, orientando como realizar o descarte{'\n'}
                        e consumo consciente de resíduos.{'\n'}</Text>
                        <Text>Nossa missão.{'\n'}</Text>
                        Temos como missão promover a mudança de comportamento, atuando na educação e orientação das crianças{'\n'}
                        para construção de um mundo melhor, com mais qualidade de vida.{'\n'}
                        <Text>Nossas Atividades{'\n'}</Text>
                        Pensando no bem-estar, e futuro das nossas crianças, trazemos dicas, dados e jogos para que os nossos{'\n'}
                        pequenos cresçam pensando de forma sustentável. Atuamos em duas frentes: educação e orientação. {'\n'}
                        Agregando valor ao conhecimento básico de informação, com intuito de despertar nas crianças{'\n'}
                        o senso de responsabilidade, com suas ações e com isso gerar adultos mais responsáveis e{'\n'}
                        preocupados em tomar atitudes corretas em relação ao resíduo gerado.
                        <Text>Nosso Projeto {'\n'}</Text>
                        
                        Nosso projeto viu um problema no descarte incorreto de resíduo, no condomínio Residencial Lavras. 
                        Comunidade retirada da favela, onde viviam em situação precária com esgoto ao ar livre, lixo, 
                        áreas de mananciais, morros sujeitos a deslizamentos. Além do perigo de incêndio. Essa comunidade 
                        foi realocadas para prédios do CDHU, porém sem uma "educação de como cuidar do ambiente onde se vive"
                         o lindo condomínio se tornou uma favela na vertical. Onde o descarte de lixo e a falta de coletividade 
                         deixaram o lugar depreciado. Com isso o Recoleta viu uma oportunidade de mudar essa história utilizando 
                         o Condomínio Lavras como projeto-piloto, através da reeducação dos moradores, inicialmente com foco nas
                          crianças, para a conscientização de que se separarem o lixo haverá melhoria na qualidade de vida deles,
                           redução nos custos com limpeza, além da valorização de seus imóveis.
                        
                </Text>
            </ScrollView>
        </View>
    )
}
        