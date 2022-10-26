import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, View, StatusBar, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function RegisterPage() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../assets/perfil.png')} resizeMode='cover' />
      <Text style={styles.titulo}>Novo usuário</Text>
      
        <TextInput
          style={styles.input}
          placeholder="Nome"
        />
        <TextInput
          style={styles.input}
          placeholder="E-email"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
        />
        <TextInput
          style={styles.input}
          placeholder="Comfirmar Senha"
        />
        <Button title="Registrar" style={styles.Button} onPress={() => navigation.navigate("Login")}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    padding: 1

  },  titulo: {
      fontSize: 30,
      marginTop: -30,
      marginBottom: 30,
      textAlign: "center"

  },
    img: {
      //marginBottom: 25,
      width: 180,
      height: 190,
      margin: 50,
      padding: 100 
  },  
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
