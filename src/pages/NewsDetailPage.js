import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
export default function NewsDetailTb() {
  const navigation = useNavigation();
  const route = useRoute();
  const news = route.params.news;

  if (!news) return <Text>Notícia não encontrada</Text>


  return (

    <View style={{ flex: 1, }}>
      <ImageBackground style={{ flex: 1 }} source={require('../../assets/fundo14.jpg')} >
        <ScrollView>
          <Text style={styles.titulo}>{news.title}</Text>
          <Image style={styles.img} source={require(`../../assets/${news.image}`)} resizeMode='cover' />
          <Text style={styles.texto}>{news.content}</Text>
        </ScrollView>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  titulo: {
    color: "#E6ECFF",
    fontSize: 30,
    marginTop: 20,
    marginBottom: 30,
    textAlign: "center"
  },
  texto: {
    color: "#E6ECFF",
    marginLeft: 6,
    flex: 1,
    fontSize: 18,
    marginTop: 35,
    marginBottom: 30
  },
  img: {
    marginBottom: 10,
    width: 400,
    height: 200
  },
});