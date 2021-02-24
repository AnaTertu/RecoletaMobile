import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';

export default function QuemSomos({ navigate }){ 
    
    return(

        <View 
        style={{ 
            flex: 1, 
            alignItems: "center", 
            justifyContent: "center",            
            backgroundColor: "#A590C3",
            }}
        >
            
            <Text style= {{ color: "#fff", fontSize: 20, fontFamily: "Reggae One, cursive"}}>Recoleta</Text>

            <Text style= {{ color: "#fff", fontSize: 12, fontFamily: "Reggae One, cursive", paddingLeft: 60, paddingRight: 50}}>
                    <h4>Mas o que é a Recoleta? {"\n"}</h4>
                    Criado em novembro de 2020. O Recoleta é uma organização não-governamental, sem fins lucrativos,{"\n"}
                    que trabalha pela conscientização da sociedade, orientando como realizar o descarte{"\n"}
                    e consumo consciente de resíduos.{"\n"}
                    <h5>Nossa missão.{"\n"}</h5>
                    Temos como missão promover a mudança de comportamento, atuando na educação e orientação das crianças{"\n"}
                    para construção de um mundo melhor, com mais qualidade de vida.{"\n"}
                    <h5>Nossas Atividades{"\n"}</h5>
                    Pensando no bem-estar, e futuro das nossas crianças, trazemos dicas, dados e jogos para que os nossos{"\n"}
                    pequenos cresçam pensando de forma sustentável. Atuamos em duas frentes: educação e orientação. {"\n"}
                    Agregando valor ao conhecimento básico de informação, com intuito de despertar nas crianças{"\n"}
                    o senso de responsabilidade, com suas ações e com isso gerar adultos mais responsáveis e{"\n"}
                    preocupados em tomar atitudes corretas em relação ao resíduo gerado.
                    <h5>Nosso Projeto {"\n"}</h5>
                    Nosso projeto viu um problema no descarte incorreto de resíduo, no condomínio Residencial Lavras.{"\n"}
                    Comunidade retirada da favela, onde viviam em situação precária com esgoto ao ar livre, lixo, áreas de mananciais, morros sujeitos a deslizamentos. Além do perigo de incêndio. Essa comunidade foi realocadas para prédios do CDHU, porém sem uma "educação de como cuidar do ambiente onde se vive" o lindo condomínio se tornou uma favela na vertical. Onde o descarte de lixo e a falta de coletividade deixaram o lugar depreciado. Com isso o Recoleta viu uma oportunidade de mudar essa história utilizando o Condomínio Lavras como projeto-piloto, através da reeducação dos moradores, inicialmente com foco nas crianças, para a conscientização de que s
            </Text>
            
            <FlatList
                data={[
                    {key: '• Rua A, 51'},
                    {key: '• Fone (11)3333-3333'},
                    {key: '• São Paulo - SP'}
                ]}

                    renderItem={({item}) => <Text style={{  color: "#fff", padding: 5, fontSize: 15, height: 44,}}>{item.key}</Text>
                    
                }
            />
            
        </View>
    )
}
        