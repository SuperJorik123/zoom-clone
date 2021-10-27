import React from "react"
import {  View, SafeAreaView, Platform, StyleSheet, StatusBar, Text } from "react-native"
import  Header  from "../components/Header"
import MenuButtons from "../components/MenuButtons"
import  SearchBar  from '../components/SearchBar'
import ContactMenu from "../components/ContactMenu"

function Home( { navigation }) {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.AndroidSafeArea} >
                {/* Header */}
                <Header />
                {/* SearchBar */}
                <SearchBar />
                {/* Menu Buttons */}
                <MenuButtons navigation={navigation}/>
                {/* Contacts Menu */}
                <ContactMenu />
            </SafeAreaView>
        </View>
    )
}

export default Home 

const styles = StyleSheet.create({
    AndroidSafeArea: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      height: "100%",
    },
    container: {
      backgroundColor: "#1c1c1c",
      padding: 15,
    },
  });
