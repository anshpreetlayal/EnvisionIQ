import {View, SafeAreaView, Button} from 'react-native';

export default function TaskRender({item, remove}){

  return(
    <SafeAreaView>
      <View>{item.description}{item.id} <Button title = "Complete?" onPress = {() =>remove(item.id)}/></View>
    </SafeAreaView>
  );
}