import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Touchable, TouchableHighlight, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { NewsContext } from '../contexts/News';



export default function HomeNews() {
  const navigation = useNavigation();
  const { games } = useContext(NewsContext);

  return (
    <View style={{ flex: 1, }}>
      <ImageBackground style={{ flex: 1, }} source={require('../../assets/fundo7.png')} >
        <Text style={styles.nome0}>Noticias RPG</Text>

        {games.map((game) => (
          <TouchableHighlight onPress={() => navigation.navigate("News", {
            game
          })}  >
            <View style={styles.linha}>
              <Image style={styles.img} source={require(`../../assets/${game.image}`)} resizeMode='cover' />
              <Text style={styles.nome}>{game.name}</Text>
            </View>
          </TouchableHighlight>
        ))}
        

        {/* <TouchableHighlight onPress={() => navigation.navigate("News")}  >
          <View style={styles.linha}>
            <Image style={styles.img} source={require('../../assets/warspear.jpg')} resizeMode='cover' />
            <Text style={styles.nome}>Noticias sobre ws</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate("NewsTb")}  >
          <View style={styles.linha}>
            <Image style={styles.img} source={require('../../assets/tibia.jpg')} resizeMode='cover' />
            <Text style={styles.nome}>Tibia atts</Text>
          </View>
        </TouchableHighlight> */}
      </ImageBackground >






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
    color: "#000000",
    fontSize: 30,
    marginTop: 20,
    marginBottom: 30,
    textAlign: "center"
  },
  nome: {
    color: "#252629",
    marginLeft: 10,
    flex: 1,
    fontSize: 18,
    marginTop: 60,
    marginBottom: 30,

  },

  img: {
    marginBottom: 20,
    width: 240,
    height: 150
  },

  linha: {

    flexDirection: 'row',
    justifyContent: 'flex-start'
  }




});