# 🛒 MercadoAqui – Comparador de Preços de Supermercado

O **MercadoAqui** é um aplicativo mobile desenvolvido em **React Native com Expo**, que permite ao usuário:

- Criar listas de compras
- Comparar preços entre mercados
- Ver ofertas e cestas básicas atualizadas
- Gerenciar seu perfil e histórico de comparações

---

## 🚀 Tecnologias utilizadas

- React Native (com Expo)
- Expo Router
- Context API para autenticação
- `@expo/vector-icons` para ícones
- `expo-checkbox` para validação de termos
- `FlatList`, `Modal`, `ScrollView`, `StyleSheet`, `TouchableOpacity`, `Alert`

---

## 📁 Estrutura do projeto

app/
├── auth/                 # Telas públicas (Login, Cadastro)
├── protected/(tabs)/    # Telas com navegação por aba
│   ├── index.js         # Home
│   ├── cesta.js         # Cesta básica
│   ├── lista.js         # Lista de compras
│   ├── historico.js     # Histórico de comparações
│   └── perfil.js        # Perfil do usuário
├── components/          # Componentes reutilizáveis (Modal de confirmação, etc)
└── context/             # Contexto de autenticação (AuthContext.js)

---

## ⚙️ Como rodar o projeto localmente

### 1. Clonar o repositório

git clone https://github.com/ykiakao/mercadoAqui.git
cd mercadoAqui

### 2. Instalar as dependências

npm install
# ou
yarn

### 3. Instalar pacotes nativos (se ainda não tiver)

npx expo install @react-native-community/checkbox
npx expo install expo-checkbox expo-router

### 4. Iniciar o projeto

npx expo start

Você pode abrir no seu celular com o app **Expo Go**, em um emulador ou navegador (modo web).

---

## 👤 Usuário de Teste

Use o seguinte login de teste:

- Email: admin@mercado.com
- Senha: admin123

---

## ✅ Funcionalidades já implementadas

- [x] Login com validação e redirecionamento seguro  
- [x] Cadastro com confirmação e aceite dos termos  
- [x] Home com categorias, banner e ofertas  
- [x] Lista de compras manual (via botão flutuante)  
- [x] Comparação de cestas básicas ordenadas por preço  
- [x] Tela de perfil com edição, avatar e logout  
- [x] Modal para exclusão de conta com confirmação  
- [x] Design responsivo e estilização consistente  

---

## 📌 Observações

- Projeto ideal para aprendizado em React Native com navegação por abas  
- A estrutura está preparada para integrar com Firebase ou backend real  
- Fácil expansão para uso com banco de dados e notificações push  

---

## 📄 Licença

Projeto de código aberto para fins educacionais.  
Desenvolvido por **Kaiky Oliveira** e colaboradores.