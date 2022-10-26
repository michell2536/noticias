import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { SegurancaContext} from "../contexts/Seguranca";
import { globalStyles } from "../../App";

export default function LoginPage() {
    const navigation = useNavigation();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const { login } = React.useContext(SegurancaContext);

    const loginHandle = () => {
        login(email, password);
        navigation.navigate("Home");
    }
  return (
   <View style={globalStyles.container}>
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../assets/perfil2.png')} resizeMode='contain' />
      <TextInput 
        style={styles.input}
        placeholder="E-mail"  value={email} onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"  value={password} onChangeText={setPassword}
        secureTextEntry={true}
      />
      <View style={styles.botao1}>
        <Button title="Entrar"  onPress={() => loginHandle()}></Button>
      </View>
      <View style={styles.botao2}>
         <View >
         <Button title="Novo usuario" style={styles.Button} onPress={() => navigation.navigate("Register")} />
         </View >
      </View>
      <View style={styles.botao3}>
        <Button title="Esqueci Minha Senha" style={styles.Button}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    //justifyContent: 'center',
    padding: 40
  },
  img: {
    //marginBottom: 25,
    width: "100%",
    height: 170,
    marginBottom: 40
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 2,
    padding: 10,
  },
  botao1: {
    marginTop: 30,
    marginBottom: 15,
  },
  botao2: {
    marginBottom: 15,

  },
  botao3: {
    marginBottom: 15,

  },
});
