import { Button, StyleSheet, Text, View } from 'react-native';
import {useState} from 'react'
//hooks do React

export default function App() {
  /*
  const vetor = useState('com esse valor')
  const texto = vetor[0]
  const setTexto = vetor[1]
  */

 //desestruturação em js = hooks
 const [contador, setContador] = useState(0)

 const incrementar = () => {
    setContador(contador + 1)
 }

  return (
    <View style={styles.container}>
      <Text>{contador}</Text>
      <Button
        title='Incrementar'
        onPress={incrementar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
