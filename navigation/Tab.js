import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackActions } from "@react-navigation/native";
import { CustomerStack, OrderStack, ProdcutsStack } from "./Stack";

const Tab = createBottomTabNavigator();

export const TabButtom = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="products" component={ProdcutsStack} />
      <Tab.Screen name="customer" component={CustomerStack} />
      <Tab.Screen name="order" component={OrderStack} />
    </Tab.Navigator>
  );
};
