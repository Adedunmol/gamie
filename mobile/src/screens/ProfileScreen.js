import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import {
  Background,
  Folder,
  Gift,
  HalfShield,
  People,
  Profile,
} from "../components/images";
import ProfileComponent from "../components/ProfileComponent";
import LoginOption from "../components/LoginOption";

const ProfileScreen = () => {
  return (
    <View style={{ paddingTop: 40, backgroundColor: "black", flex: 1 }}>
      <View style={{ height: 126, width: "100%" }}>
        <Image source={Background} style={{ width: "100%" }} />
      </View>
      <View style={{ left: 20, top: -40 }}>
        <View
          style={{
            borderRadius: 100,
            borderWidth: 3,
            width: 72,
            alignItems: "center",
            height: 72,
            justifyContent: "center",
          }}
        >
          <Image source={Profile} style={{ height: 68, width: 68 }} />
        </View>
        <View style={{ top: 16, gap: 4 }}>
          <Text
            style={{
              color: "#FDFDFD",
              fontSize: 18,
              fontWeight: "600",
              lineHeight: 18,
            }}
          >
            Adedamolajoke
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 14,
              fontWeight: "400",
              lineHeight: 14,
            }}
          >
            @designhashira
          </Text>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          width: "100%",
          alignItems: "center",
          borderBottomColor: "#2D2D2E80",
        }}
      />
      <ProfileComponent text={"Assets"} icon={Folder} />
      <ProfileComponent text={"Loyalities"} icon={Gift} />
      <ProfileComponent text={"Referrals"} icon={People} />
      <ProfileComponent text={"Privacy & Security"} icon={HalfShield} />
      <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Pressable
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
            height: 50,
            flexDirection: "row",
            borderRadius: 4,
            paddingHorizontal: 24,
            paddingVertical: 10,
            backgroundColor: "#1C1C1D",
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              lineHeight: 24,
              color: "white",
            }}
          >
            Log Out
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileScreen;
