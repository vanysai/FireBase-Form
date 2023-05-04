import React, { useState } from 'react';
import firebase from 'firebase';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Formulario = () => {
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  const enviarFormulario = () => {
    console.log('CPF:', cpf);
    console.log('Nome:', nome);
    console.log('Sobrenome:', sobrenome);
    // aqui você pode enviar os dados do formulário para o servidor
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={(text) => setSobrenome(text)}
      />
      <Button
        style={styles.button}
        title="Enviar"
        color= 'pink'
        onPress={enviarFormulario}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginVertical: 10,
    width: '40%',
  },
});

export default Formulario;
