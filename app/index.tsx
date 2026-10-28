import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

 
  const emailCorretoADA = 'aluno@escola.com';
  const senhaCorretaADA = '123456';

  
  const [emailADA, setEmailADA] = useState<string>('');
  const [senhaADA, setSenhaADA] = useState<string>('');
  const [mensagemErroADA, setMensagemErroADA] = useState<string>('');

  const verificarLoginADA = () => {
    setMensagemErroADA(''); 
   
    if (emailADA.trim() === '' || senhaADA.trim() === '') {
      setMensagemErroADA('Por favor, preencha todos os campos!');
      return;
    }

    
    if (emailADA !== emailCorretoADA) {
      setMensagemErroADA('E-mail incorreto!');
      return;
    }

    
    if (senhaADA !== senhaCorretaADA) {
      setMensagemErroADA('Senha incorreta!');
      return;
    }

   
    router.replace('/(tabs)');
  };

  return (
    <View style={stylesADA.container}>
      <Text style={stylesADA.titulo}>Login</Text>

      {}
      <TextInput
        style={stylesADA.input}
        placeholder="Digite seu e-mail:aluno@escola.com"
        value={emailADA}
        onChangeText={setEmailADA}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Caixa de Entrada de Senha */}
      <TextInput
        style={stylesADA.input}
        placeholder="Digite sua senha:123456"
        value={senhaADA}
        onChangeText={setSenhaADA}
        secureTextEntry
      />

      {}
      {mensagemErroADA !== '' && (
        <Text style={stylesADA.textoErro}>{mensagemErroADA}</Text>
      )}

      {}
      <TouchableOpacity style={stylesADA.botao} onPress={verificarLoginADA}>
        <Text style={stylesADA.textoBotao}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const stylesADA = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1a1a1a',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  botao: {
    width: '100%',
    height: 50,
    backgroundColor: '#002B9A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textoErro: {
    color: '#d9534f',
    marginBottom: 10,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});