import { View, Text, TextInput, Button, TouchableOpacity, Alert, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const router = useRouter();
  const { setIsLoggedIn } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    const emailCorreto = 'admin@mercado.com';
    const senhaCorreta = 'admin123';

    if (email === emailCorreto && senha === senhaCorreta) {
      setIsLoggedIn(true);
      setTimeout(() => {
        router.replace('/protected');
      }, 100);
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos.');
    }
  };

  const irParaCadastro = () => {
    router.push('/auth/register');
  };

  return (
    <View style={{ flex: 1, padding: 20, paddingTop: 60, backgroundColor: 'white', justifyContent: 'flex-start' }}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={{
          width: 240,
          height: 240,
          resizeMode: 'contain',
          alignSelf: 'center',
          marginBottom: 10
        }}
      />

      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginBottom: 12, padding: 10 }}
      />

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginBottom: 20, padding: 10 }}
      />

      <Button title="Entrar" color="#007BFF" onPress={handleLogin} />

      <TouchableOpacity onPress={irParaCadastro} style={{ marginTop: 20 }}>
        <Text style={{ color: '#007BFF', textAlign: 'center' }}>
          Ainda não tem conta? Cadastre-se
        </Text>
      </TouchableOpacity>
    </View>
  );
}
