import React from 'react'
import { Input, Item, Icon} from "native-base";

const AddTodoForm = (props) => {
    const { inputValue, changeInput, onIconPress, onInputKeyPress} = props;
    return (
        <Item success>
          <Input
            placeholder='TODOを入力'
            value={inputValue}
            onChange={changeInput}
            onChangeText={onInputKeyPress}
          />
          <Icon type="Feather" name='plus-circle' onPress={onIconPress} />
        </Item>
    )
}
    
export default AddTodoForm;