import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Input, Image, Button } from "react-native-elements";
import { color } from "react-native-reanimated";
import InputField from "../../components/UI/InputField";
import ImagePicker from "react-native-image-picker";

const CreatePrdcutsScreen = (props) => {
  console.log("navigation", props);

  const options = {
    title: "Select Avatar",
    customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
    storageOptions: {
      skipBackup: true,
      path: "images",
    },
  };

  ImagePicker.showImagePicker(options, (response) => {
    console.log("Response = ", response);

    if (response.didCancel) {
      console.log("User cancelled image picker");
    } else if (response.error) {
      console.log("ImagePicker Error: ", response.error);
    } else if (response.customButton) {
      console.log("User tapped custom button: ", response.customButton);
    } else {
      const source = { uri: response.uri };

      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    }
  });

  const [input1, setinput1] = React.useState("");

  return (
    <View style={{ alignSelf: "center" }}>
      <Text style={{ alignSelf: "center", marginTop: 20, fontSize: 20 }}>
        Add New product
      </Text>
      <TouchableOpacity onPress={ImagePicker} style={{ margin: 10 }}>
        <Image
          source={source}
          style={{ width: 150, height: 150, marginHorizontal: 100 }}
        />
      </TouchableOpacity>
      <View style={{ margin: 25 }}>
        <InputField
          ph="enter product title"
          errmsg="ENTER A VALID TITLE"
          onChangeText={(text) => setinput1(text)}
          inputfun={input1}
          color="black"
        />
        <InputField
          ph="Price"
          errmsg="ENTER A VALID PRICE HERE"
          onChangeText={(text) => setinput1(text)}
          inputfun={input1}
          color="green"
        />
        <InputField
          ph="Unit"
          errmsg="ENTER A VALID ERROR HERE"
          onChangeText={(text) => setinput1(text)}
          inputfun={input1}
          color="green"
        />
        <InputField
          ph="Mrp"
          errmsg="ENTER A VALID ERROR HERE"
          onChangeText={(text) => setinput1(text)}
          inputfun={input1}
          color="green"
        />
        <InputField
          ph="STOCK"
          errmsg="ENTER A VALID ERROR HERE"
          onChangeText={(text) => setinput1(text)}
          inputfun={input1}
          color="green"
        />
        <InputField
          ph="Description"
          errmsg="ENTER A VALID ERROR HERE"
          onChangeText={(text) => setinput1(text)}
          inputfun={input1}
          color="green"
        />
      </View>
      <View>
        <Button
          title="Solid Button"
          style={{ height: 50, width: 150, marginHorizontal: 100 }}
          onPress={() => props.navigation.navigate("Products")}
        />
      </View>
    </View>
  );
};

export default CreatePrdcutsScreen;
