import React from 'react'
import { Input } from "react-native-elements";

const InputField = (props) => {
    return (
        <Input
        style={{ color: props.color }}
        onChangeText={props.onChangeText}
        errorStyle={{ color: "red" }}
        errorMessage={props.inputfun.length <= 0 ? props.errmsg : ""}
        placeholder={props.ph}
      />
    )
}

export default InputField
