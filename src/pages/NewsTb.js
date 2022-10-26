import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Touchable, TouchableHighlight, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function NewsTb() {
  const navigation = useNavigation();
  return (
   
    <View style={{flex:1, }}>
    <ImageBackground style={{flex:1}} source={require('../../assets/fundo9.gif')} >
      <View>
        <Text style={styles.nome0}>Tibia News</Text>
      </View>
      <TouchableHighlight onPress={() => navigation.navigate("NewsDetailTb")}>
      <View style={styles.linha}>        
      <Image style={styles.img} source={require('../../assets/tibiant.png')} resizeMode='cover' />
      <Text style={styles.nome}>AJUSTE DE DANO E CURA POR LEVEL</Text>
      </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate("NewsBer")}>
      <View style={styles.linha}>        
      <Image style={styles.img} source={require('../../assets/tibiabebados.png')} resizeMode='cover' />
      <Text style={styles.nome}>ORCSOBERFEST</Text>
      </View>
      </TouchableHighlight>
      <View style={styles.linha}>        
      <Image style={styles.img} source={require('../../assets/tibiasom.png')} resizeMode='cover' />
      <Text style={styles.nome}>Lançamento do som no Tibia</Text>
      </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
    
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  nome0: {
    color: "#E6ECFF",
    fontSize: 30,
    marginTop: 0,
    marginBottom: 30,
    textAlign: "center"
  },
  nome: {
    color: "#E6ECFF",
    marginLeft: 6,
    flex: 1,
    fontSize: 14,
    marginTop: 45,
    marginBottom: 30
  },
  
  img: {
    marginBottom: 15,
    width: 200,
    height: 120
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
 


});