import { View, Text,Image } from "react-native";
import React from "react";
import { Folder, Forward } from "./images";

const ProfileComponent = ({icon,text}) => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        top: 41,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 20,
        borderBottomWidth: 1,
        marginBottom:19,
        borderBottomColor:'#2D2D2E'
      }}
    >
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <Image style={{ height: 20, width: 20 }} source={icon} />
        <Text style={{color:'white',fontWeight:'500',lineHeight:20,fontSize:14}}>{text}</Text>
      </View>
      <Image style={{height:22,width:22}} source={Forward} />
    </View>
  );
};

export default ProfileComponent;
