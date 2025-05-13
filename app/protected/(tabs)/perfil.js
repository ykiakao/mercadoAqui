import { View, Text, Button, StyleSheet, Alert, Modal, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function Perfil() {
  const router = useRouter();
  const { setIsLoggedIn } = useAuth();

  const [modalVisible, setModalVisible] = useState(false);
  const [nome, setNome] = useState('Kaiky Oliveira');
  const [email, setEmail] = useState('admin@mercado.com');
  const [editNome, setEditNome] = useState(nome);
  const [editEmail, setEditEmail] = useState(email);

  const handleLogout = () => {
    Alert.alert(
      "Sair da conta",
      "Tem certeza que deseja sair?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Sair",
          style: "destructive",
          onPress: () => {
            setIsLoggedIn(false);
            router.replace('/auth/login');
          },
        }
      ]
    );
  };

  const salvarEdicao = () => {
    if (!editNome.trim() || !editEmail.trim()) {
      Alert.alert("Erro", "Nome e e-mail não podem estar vazios.");
      return;
    }

    setNome(editNome);
    setEmail(editEmail);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Perfil</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>{nome}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{email}</Text>
      </View>

      <View style={styles.button}>
        <Button title="Editar Perfil" color="#007BFF" onPress={() => setModalVisible(true)} />
      </View>

      <View style={styles.button}>
        <Button title="Sair" color="#d32f2f" onPress={handleLogout} />
      </View>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Editar Perfil</Text>

            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={editNome}
              onChangeText={setEditNome}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={editEmail}
              onChangeText={setEditEmail}
              autoCapitalize="none"
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.cancelBtn} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveBtn} onPress={salvarEdicao}>
                <Text style={styles.saveText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 24, color: '#007BFF', textAlign: 'center' },
  infoBox: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 10,
    marginBottom: 32
  },
  label: { fontSize: 14, fontWeight: '600', marginTop: 8 },
  value: { fontSize: 16, marginBottom: 8 },
  button: { marginBottom: 16 },

  // Modal
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  modalContainer: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 16,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cancelBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  cancelText: {
    color: '#888'
  },
  saveBtn: {
    backgroundColor: '#007BFF',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  saveText: {
    color: 'white',
    fontWeight: '600'
  }
});
