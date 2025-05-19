import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  Image,
  ActivityIndicator,
  Modal
} from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import ModalConfirmacao from '../components/ModalConfirmacao';

export default function Login() {
  const router = useRouter();
  const { setIsLoggedIn } = useAuth();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erros, setErros] = useState({ email: false, senha: false });
  const [mensagemErro, setMensagemErro] = useState('');

  const [modalVisivel, setModalVisivel] = useState(false);
  const [emailRecuperacao, setEmailRecuperacao] = useState('');
  const [modalConfirmacaoVisivel, setModalConfirmacaoVisivel] = useState(false);

  const handleLogin = () => {
    const camposInvalidos = {
      email: email.trim() === '',
      senha: senha.trim() === ''
    };
    setErros(camposInvalidos);

    if (camposInvalidos.email || camposInvalidos.senha) {
      setMensagemErro('Preencha todos os campos corretamente.');
      return;
    }

    setMensagemErro('');
    setCarregando(true);

    setTimeout(() => {
      const emailCorreto = 'admin@mercado.com';
      const senhaCorreta = 'admin123';

      if (email === emailCorreto && senha === senhaCorreta) {
        setIsLoggedIn(true);
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        router.replace('/protected');
      } else {
        setMensagemErro('Email ou senha incorretos.');
      }

      setCarregando(false);
    }, 1000);
  };

  const irParaCadastro = () => {
    router.push('/auth/register');
  };

  const enviarRecuperacao = () => {
    if (!emailRecuperacao.trim()) {
      Alert.alert('Erro', 'Digite seu e-mail para recuperar a senha.');
      return;
    }

    setModalVisivel(false);
    setEmailRecuperacao('');
    setTimeout(() => {
      setModalConfirmacaoVisivel(true);
    }, 300);
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
        style={{
          borderWidth: 1,
          borderColor: erros.email ? '#d32f2f' : '#ccc',
          borderRadius: 8,
          marginBottom: 12,
          padding: 10
        }}
      />

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: erros.senha ? '#d32f2f' : '#ccc',
        borderRadius: 8,
        marginBottom: 4,
        paddingHorizontal: 10
      }}>
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!mostrarSenha}
          style={{ flex: 1, paddingVertical: 10 }}
        />
        <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
          <Ionicons
            name={mostrarSenha ? 'eye-off-outline' : 'eye-outline'}
            size={22}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => setModalVisivel(true)}>
        <Text style={{ color: '#007BFF', textAlign: 'right', marginBottom: 16 }}>
          Esqueci minha senha
        </Text>
      </TouchableOpacity>

      {mensagemErro !== '' && (
        <Text style={{ color: '#d32f2f', textAlign: 'center', marginBottom: 10 }}>
          {mensagemErro}
        </Text>
      )}

      {carregando ? (
        <ActivityIndicator size="large" color="#007BFF" style={{ marginBottom: 16 }} />
      ) : (
        <Button title="Entrar" color="#007BFF" onPress={handleLogin} />
      )}

      <TouchableOpacity onPress={irParaCadastro} style={{ marginTop: 20 }}>
        <Text style={{ color: '#007BFF', textAlign: 'center' }}>
          Ainda não tem conta? Cadastre-se
        </Text>
      </TouchableOpacity>

      {/* Modal de recuperação */}
      <Modal
        visible={modalVisivel}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisivel(false)}
      >
        <View style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.4)',
          padding: 20
        }}>
          <View style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: 24
          }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 12, color: '#007BFF', textAlign: 'center' }}>
              Recuperar senha
            </Text>
            <Text style={{ fontSize: 14, marginBottom: 12, textAlign: 'center' }}>
              Digite seu e-mail para receber instruções de redefinição.
            </Text>

            <TextInput
              placeholder="Seu e-mail"
              value={emailRecuperacao}
              onChangeText={setEmailRecuperacao}
              autoCapitalize="none"
              keyboardType="email-address"
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 8,
                marginBottom: 16,
                padding: 10
              }}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Button title="Cancelar" color="#888" onPress={() => setModalVisivel(false)} />
              <Button title="Enviar" color="#007BFF" onPress={enviarRecuperacao} />
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal de confirmação reutilizável */}
      <ModalConfirmacao
        visivel={modalConfirmacaoVisivel}
        mensagem="Verifique seu e-mail!"
        submensagem="Enviamos instruções de recuperação de senha para seu e-mail."
        onFechar={() => setModalConfirmacaoVisivel(false)}
      />
    </View>
  );
}
