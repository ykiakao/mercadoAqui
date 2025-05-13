import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Cesta() {
  const cestas = [
    {
      id: '1',
      mercado: 'Atacadão Central',
      data: '12/05/2025 às 11:00',
      produtos: [
        { nome: 'Arroz Tio Urbano 5kg', preco: 31.49 },
        { nome: 'Feijão Carioca Namorado 1kg', preco: 6.89 },
        { nome: 'Óleo de Soja Liza 900ml', preco: 5.99 }
      ]
    },
    {
      id: '2',
      mercado: 'Supermercado Bom Preço',
      data: '12/05/2025 às 10:45',
      produtos: [
        { nome: 'Arroz Tio Urbano 5kg', preco: 32.90 },
        { nome: 'Feijão Carioca Namorado 1kg', preco: 7.49 },
        { nome: 'Óleo de Soja Liza 900ml', preco: 6.10 }
      ]
    },
    {
      id: '3',
      mercado: 'Mercado Econômico',
      data: '12/05/2025 às 10:30',
      produtos: [
        { nome: 'Arroz Tio Urbano 5kg', preco: 30.99 },
        { nome: 'Feijão Carioca Namorado 1kg', preco: 6.79 },
        { nome: 'Óleo de Soja Liza 900ml', preco: 6.20 }
      ]
    }
  ];

  const calcularTotal = (produtos) =>
    produtos.reduce((soma, item) => soma + item.preco, 0).toFixed(2);

  const renderCesta = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.mercado}>{item.mercado}</Text>
      <Text style={styles.total}>Total: R$ {calcularTotal(item.produtos)}</Text>
      <View style={styles.produtosBox}>
        {item.produtos.map((produto, index) => (
          <View key={index} style={styles.produtoRow}>
            <Text style={styles.produtoNome}>{produto.nome}</Text>
            <Text style={styles.produtoPreco}>R$ {produto.preco.toFixed(2)}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.data}>Atualizado em: {item.data}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Comparativo de Cestas Básicas</Text>
      <FlatList
        data={cestas}
        keyExtractor={(item) => item.id}
        renderItem={renderCesta}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 16 },
  titulo: { fontSize: 20, fontWeight: 'bold', color: '#007BFF', marginBottom: 20, textAlign: 'center' },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#f9f9f9'
  },
  mercado: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  total: { fontSize: 14, fontWeight: '600', marginBottom: 8, color: '#007BFF' },
  produtosBox: { marginBottom: 8 },
  produtoRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  produtoNome: { fontSize: 14 },
  produtoPreco: { fontSize: 14, fontWeight: '600' },
  data: { fontSize: 12, color: '#666', textAlign: 'right' }
});
