import { Text, SafeAreaView, StyleSheet, View, Modal, FlatList, Button} from 'react-native';
import * as Progress from 'react-native-progress'
import {useState} from "react";
import TaskRender from '../assets/Tasks'

export default function TaskManager() {
  const [tasks, updateTasks] = useState([
    {id: "1", description: "First task"},
    {id: "2", description: "Second"},
    {id: "3", description: "Third"},
    {id: "4", description: "Fourth"},
    {id: "5", description: "Fifth"},
  ]);
  const [progress, setProgress] = useState(0.0);
  const [visable, setVisable] = useState(false);

  const handleSubmit = (id) =>{
    const newTasks = tasks.filter(obj => obj.id !== id) 
    updateTasks(newTasks)
    setProgress(progress + 0.2)
    console.log(progress)
    if(progress == 0.8){
      setVisable(true)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Modal transparent={false} visible = {visable} onRequestClose={()=>{setVisable(false)}}>
          <View style = {styles.modalContainer}>
            <View style = {styles.modal}>
              <Text>Congratulation you have completed all your daily tasks!!!</Text>
              <Button title = 'Ok'  onPress ={() =>setVisable(false)}/>
            </View>
          </View>
        </Modal>
        <Text>Daily Tasks time to get moving</Text>
        <Progress.Bar progress = {progress} color = "blue" width = {333} height = {10} />
        <Text>{progress * 100}%</Text>
        <FlatList
        data={tasks}
        renderItem={({item}) => <TaskRender item = {item} remove = {handleSubmit}/>}
        keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  modal:{
    width: '80%',
    textAlign: 'center',
    backgroundColor: 'white',
    height: '20%',
    borderWidth: 2,
    borderStyle: 'solid',
    paddingTop: 10,
    paddingBottom: 10,
  },
  modalContainer:{
    backgroundColor:"rgba(0,0,0,0.8)",
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});
