import { View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
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
        router.replace('/protected'); // ✅ redireciona para a Home/tabbar
      }, 100); // pequeno delay para garantir que o contexto atualize
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos.');
    }
  };

  const irParaCadastro = () => {
    router.push('/auth/register');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 20, padding: 8 }}
      />

      <Button title="Entrar" onPress={handleLogin} />

      <TouchableOpacity onPress={irParaCadastro} style={{ marginTop: 20 }}>
        <Text style={{ color: 'blue', textAlign: 'center' }}>
          Ainda não tem conta? Cadastre-se
        </Text>
      </TouchableOpacity>
    </View>
  );
}
