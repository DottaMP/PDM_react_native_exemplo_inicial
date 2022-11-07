import {
  Button,  
  StyleSheet, 
  TextInput, 
  View 
} from 'react-native';

import { useState } from 'react';

export default function App() {
  const [lembrete, setLembrete] = useState('')
  const [lembretes, setLembretes] = useState([])
  const capturarTexto = (lembreteDigitado) => {

    lembreteDigitado = lembreteDigitado.toUpperCase()
    // não faça isso!
    // lembrete = lembreteDigitado
    // faça isso
    setLembrete(lembreteDigitado)
  }

  const adicionarLembrete = () => {
    setLembretes([lembrete, ...lembretes]) //operador spread [...] : permite que você espalhe elementos de um objeto iterável, como um array, um map, ou um conjunto.
    setLembrete("")
    console.log(lembretes)
  }

  //Single Source of Truth
  return (
    <View style={{padding:40}}>
      <View>
        <TextInput 
          style={{borderBottomColor:"#CCC", borderBottomWidth:2, padding: 12, marginBottom: 4}}
          placeholder="lembrar..."
          onChangeText={capturarTexto}
          value={lembrete}
        />
        <Button
          title='OK'
          onPress={adicionarLembrete}
        />
      </View>
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
