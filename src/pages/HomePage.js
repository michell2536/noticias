import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function HomePage() {
    const navigation = useNavigation();
    return (     
      <View>
        <Button title="news" onPress={()=> navigation.navigate("News")}/>
        {/* <Button title="news" onPress={()=> navigation.navigate("NewsDetail")}/> */}
      </View>
   );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});  