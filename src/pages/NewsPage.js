import React, { useContext, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Touchable, TouchableHighlight, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { NewsContext } from '../contexts/News';
export default function NewsPage() {
  const navigation = useNavigation();
  const route = useRoute();
  

  const { newsList } = useContext(NewsContext);

  return (
    <View style={{ flex: 1, }}>
      <ImageBackground style={{ flex: 1 }} source={require('../../assets/fundo9.gif')} >
        <View>
          <Text style={styles.nome0}>Noticias sobre {route.params.game.name}</Text>
        </View>

        {newsList.filter((news) => news.gameId == route.params.game.id).map((n) => (
          <TouchableHighlight onPress={() => navigation.navigate("NewsDetail", {
            news:n
          })}>
            <View style={styles.linha}>
              <Image style={styles.img} source={require(`../../assets/${n.image}`)} resizeMode='cover' />
              <Text style={styles.nome}>{n.title}</Text>
            </View>
          </TouchableHighlight>
        ))}
          {newsList.filter((news) => news.game == route.params.game).map((n) => (
          <TouchableHighlight onPress={() => navigation.navigate("Newsguild", {
            news:n
          })}>
            <View style={styles.linha}>
              <Image style={styles.img} source={require(`../../assets/${n.image}`)} resizeMode='cover' />
              <Text style={styles.nome}>{n.title}</Text>
            </View>
          </TouchableHighlight>
        ))}
         {newsList.filter((news) => news.game == route.params.game).map((n) => (
          <TouchableHighlight onPress={() => navigation.navigate("NewsArena", {
            news:n
          })}>
            <View style={styles.linha}>
              <Image style={styles.img} source={require(`../../assets/${n.image}`)} resizeMode='cover' />
              <Text style={styles.nome}>{n.title}</Text>
            </View>
          </TouchableHighlight>
        ))}

        {/* <TouchableHighlight onPress={() => navigation.navigate("NewsDetail")}>
          <View style={styles.linha}>
            <Image style={styles.img} source={require('../../assets/newheroes.png')} resizeMode='cover' />
            <Text style={styles.nome}>Veja a Atualização do Warspear Online 11.0: Novas Lendas. Prévia</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate("Newsguild")}>
          <View style={styles.linha}>
            <Image style={styles.img} source={require('../../assets/guildevent.png')} resizeMode='cover' />
            <Text style={styles.nome}>Veja o Evento da semana “Força das Guildas” e Festa da Temporada!</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate("NewsArena")}>
          <View style={styles.linha}>
            <Image style={styles.img} source={require('../../assets/arenaws.png')} resizeMode='cover' />
            <Text style={styles.nome}>Sejam bem-vindos à temporada da arena LXXIII!</Text>
          </View>
        </TouchableHighlight> */}
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
    color: "#CAD0E0",
    fontSize: 30,
    marginTop: 0,
    marginBottom: 30,
    textAlign: "center"
  },
  nome: {
    color: "#CAD0E0",
    marginLeft: 6,
    flex: 1,
    fontSize: 14,
    marginTop: 35,
    marginBottom: 30
  },

  img: {
    marginBottom: 15,
    width: 150,
    height: 100
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }



});