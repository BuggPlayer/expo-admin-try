import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import CreatePrdcutsScreen from "../screens/Products/CreatePrdcutsScreen";
import ProductsScreen from "../screens/Products/ProductsScreen";
import DetailsProductsScreens from "../screens/Products/DetailsProductsScreens";
import Customers from "../screens/Customers/Customers";
import DetailsCustomers from "../screens/Customers/DetailsCustomers";
import Orders from "../screens/Orders/Orders";
import OrderDetails from "../screens/Orders/OrderDetails";

const Stack = createStackNavigator();

export const ProdcutsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="createProducts" component={CreatePrdcutsScreen} />
      <Stack.Screen name="Productsscreen" component={ProductsScreen} />
      <Stack.Screen name="DetailsProdcuts" component={DetailsProductsScreens} />
    </Stack.Navigator>
  );
};

export const CustomerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="customer" component={Customers} />
      <Stack.Screen name="CustomerDetails" component={DetailsCustomers} />
    </Stack.Navigator>
  );
};

export const OrderStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen  name="Order" component={Orders} />
            <Stack.Screen  name="OrderDetails" component={OrderDetails} />
        </Stack.Navigator>
    )
};
