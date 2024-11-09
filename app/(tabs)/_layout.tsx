import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

// Define the type for each screen's configuration
const screens = [
  { name: "index", title: "Home", icon: "home" as const },
  { name: "wallet", title: "Wallet", icon: "wallet" as const },
  { name: "addExpense", title: "", icon: "add" as const },
  { name: "statistics", title: "Statistics", icon: "stats-chart" as const },
  { name: "profile", title: "Profile", icon: "person" as const },
];

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const activeTintColor = Colors[colorScheme ?? "light"].tint;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeTintColor,
        headerShown: false,
      }}
    >
      {screens.map((screen) => (
        <Tabs.Screen
          key={screen.name}
          name={screen.name}
          options={{
            tabBarShowLabel : false,
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[
                  screen.name === "addExpense"
                    ? {
                        position: "absolute",
                        bottom: 10, // Move the icon above the bottom navigation
                        left: "50%", // Center horizontally
                        transform: [{ translateX: -24 }], // Offset to perfectly center the circle
                        width: 48, // Set width of the circle
                        height: 48, // Set height of the circle
                        borderRadius: 24, // Make the circle
                        backgroundColor: "#808080", // Grey background color
                        justifyContent: "center",
                        alignItems: "center",
                      }
                    : {},
                ]}
              >
                <TabBarIcon
                  name={focused ? screen.icon : `${screen.icon}-outline`}
                  color={screen.name === "addExpense" ? "#ffffff" : color} // Keep the plus icon white
                  size={screen.name === "addExpense" ? 40 : 24} // Adjust the icon size
                />
              </View>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
