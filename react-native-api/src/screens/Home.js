import React from "react";
import { View, Linking, Image, StyleSheet, ImageBackground } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  Button,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {

  //const staticImage = require("./src/assets/icon.png");
  const { isDarkmode, setTheme } = useTheme();

  const styles = StyleSheet.create({

    logo: {
      width: 26,
      height: 28,
    },
    ImageBackground: {
      flex: 1,
      resizeMode: "cover",
      width: "100%",
      alignItems: "center",
    },



    

   
  });



  return (
    <Layout>
      <TopNav
        middleContent="App Mobil"
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Section>
          <SectionContent>
            <Text  style={{ textAlign: "center" }}>
            <Image
              resizeMode="contain"
              style={{
                height: 100,
                width: 100,
                padding: 0,
              }}
              
              source={require("../../assets/icon.png")}
            />
             {"\n"}
             {"\n"}
             {"\n"}
             {"\n"}
             {"\n"}
              Welcome App Mobil
              </Text>
              
            <Button
              style={{ marginTop: 10 }}
              text="Iniciar Session"
              status="info"
              //onPress={() => Linking.openURL("https://rapi-ui.kikiding.space/")}
            />
            <Button
              text="Crear nueva cuenta"
              onPress={() => {
                navigation.navigate("SecondScreen");
              }}
              style={{
                marginTop: 10,
              }}
            />
            <Button
              text="About"
              onPress={() => {
                navigation.navigate("About");
              }}
              style={{
                marginTop: 10,
              }}
            />
            <Button
              text="Login"
              onPress={() => {
                navigation.navigate("Login");
              }}
              style={{
                marginTop: 10,
              }}
            />



            
            
            
            
          </SectionContent>
        </Section>
        
          <View  fontWeight="bold" style={{ textAlign: "center", color: "#ddd", padding: 16 }}>
            <Text>
              DalePlay © 2012 - 2022
            </Text>
          </View>
        
          
     
    

      </View>
    </Layout>
  );
}
