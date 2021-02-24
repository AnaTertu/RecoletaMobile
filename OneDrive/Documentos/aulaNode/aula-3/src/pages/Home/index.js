import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Home(props) {
    const { navigation } = props;

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                alignText: "center",
                justifyContent: "center",
                backgroundColor: "#C6DE6F",
            }}
        >
            {/* <Image
                style={{ height: 128, width: 128, marginTop: 10 }}
                source={require("../../../assets/images/recoletaLogo.PNG")}
            /> */}
            <Text style={{ color: "#42570C", marginTop: 10, fontFamily: "Reggae One, cursive" }}>
                O que é a Recoleta?
            </Text>
            <Text
                style={{
                    flexDirection: "row",
                    color: "#000",
                    fontSize: 14,
                    width: 400,
                    height: 100,
                    paddingLeft: 25
                }}
            >
                {"\n"}
            Somos uma organização não-governamental sem fins lucrativos,
            que trabalha pela educação e conscientização {"\n"} para o consumo
            consciente e estilo de vida sustentável!
            </Text>
            {"\n"}

            <TouchableOpacity
                style={{
                    width: 200,
                    height: 60,
                    borderRadius: 5,
                    marginTop: 15,
                }}
                title="Ir para QuemSomos"
                onPress={() => navigation.navigate("QuemSomos")}
            >
                <Text
                    style={{
                        fontWeight: "bold",
                        color: "#400",
                        fontSize: 20,
                        fontFamily: "Reggae One, cursive"
                    }}
                >
                    Quem Somos
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: 200,
                    height: 60,
                    borderRadius: 5,
                }}
                title="Ir para Jogos"
                onPress={() => navigation.navigate("Jogos")}
            >
                <Text
                    style={{
                        fontWeight: "bold",
                        color: "#400",
                        fontSize: 20,
                        fontFamily: "Reggae One, cursive"
                    }}
                >
                    Jogos
                </Text>
            </TouchableOpacity> 
            <TouchableOpacity
                style={{
                    width: 200,
                    height: 60,
                    borderRadius: 5,
                }}
                title="Ir para Dicas"
                onPress={() => navigation.navigate("Dicas")}
            >
                <Text
                    style={{
                        fontWeight: "bold",
                        color: "#400",
                        fontSize: 18,
                        fontFamily: "Reggae One, cursive"
                    }}
                >
                    Dicas
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    width: 200,
                    height: 60,
                    borderRadius: 5,
                }}
                title="Ir para Cadastro"
                onPress={() => navigation.navigate("Cadastro")}
            >
                <Text
                    style={{
                        fontWeight: "bold",
                        color: "#400",
                        fontSize: 18,
                        fontFamily: "Reggae One, cursive"
                    }}
                >
                    Cadastro
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    width: 200,
                    height: 60,
                    borderRadius: 5,
                }}
                title="Ir para Perfil"
                onPress={() => navigation.navigate("Perfil")}
            >
                <Text
                    style={{
                        fontWeight: "bold",
                        color: "#400",
                        fontSize: 18,
                        fontFamily: "Reggae One, cursive"
                    }}
                >
                    Perfil
                </Text>
            </TouchableOpacity> 

            <TouchableOpacity
                style={{
                    width: 200,
                    height: 60,
                    borderRadius: 5,
                }}
                title="Ir para Fale"
                onPress={() => navigation.navigate("Fale")}
            >
                <Text
                    style={{
                        fontWeight: "bold",
                        color: "#400",
                        fontSize: 18,
                        fontFamily: "Reggae One, cursive"
                    }}
                >
                    Fale Conosco
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={{
                    borderRadius: 35,
                    width: 200,
                    height: 60,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Ionicons name='ios-add' color='#fff' size={30} />
            </TouchableOpacity>
        </View>
    );
}
