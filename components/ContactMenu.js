import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"

const contactMenuButtons = [
    {
        type: "starred",
        name: "starred",

    },
    {
        type:"contact",
        name: "SuperJorik",
        photo: require("../assets/SuperJorik.jpg")
    },
    {
        type: "contact",
        name: "SuperJorik2",
        photo: require("../assets/SuperJorik2.jpg")
    },
    {
        type: "contact",
        name: "SuperJorik3",
        photo: require("../assets/SuperJorik3.jpg")
    }
]
function ContactMenu() {
    return (
     <View style = {styles.container}> 
                {/* Contact Container */}
                { contactMenuButtons.map((contact, index) => 
                    
                    <View  style={styles.row} key={index}> 
                    {/* Image */}
                    {contact.type == "starred" ? (
                                        <View style={styles.starredIcon}>  
                                        <AntDesign name="star" size={30} color="#efefef" />
                                        </View> ) : 
                                        (
                                            <Image source= {contact.photo} style={styles.image} />
                                        ) 
                    }
                    {/* Text */}
                    <Text style={styles.text}> 
                    {contact.name}
                    </Text>
                 </View>
                )}

        </View>
    )
}

export default ContactMenu

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
    },
    starredIcon: {
backgroundColor: "#333333",
width: 55,
height: 55,
justifyContent: "center",
alignItems: "center",
borderRadius: 20,

    },
    text: {
        color: "white",
        paddingLeft: 15,
        fontSize: 18,

    },
    image : {
        width: 55,
        height: 55,
        borderRadius:20,
    }
})