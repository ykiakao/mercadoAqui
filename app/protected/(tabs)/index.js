import { View, Text, TextInput, ScrollView, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>
          <Text style={{ color: '#007BFF' }}>Mercado</Text>Aqui
        </Text>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="gray" />
        <TextInput
          placeholder="Pesquisar"
          style={styles.searchInput}
        />
      </View>

      {/* Categorias */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Categorias</Text>
        <Text style={styles.sectionLink}>Ver mais</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {['Mercearia', 'Padaria', 'Bebidas', 'Hortifruti', 'Frios'].map((cat, index) => (
          <View key={index} style={styles.categoryItem}>
            <Ionicons name="leaf-outline" size={24} color="white" />
            <Text style={styles.categoryText}>{cat}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Ofertas */}
      <Text style={styles.sectionTitle}>Ofertas</Text>
      <View style={styles.offerGrid}>
        {[1, 2].map((item) => (
          <View key={item} style={styles.productCard}>
            <Image
              source={{
                uri: item === 1
                  ? 'https://static.paodeacucar.com/img/uploads/1/51/659051.jpg'
                  : 'https://static.paodeacucar.com/img/uploads/1/986/32854986.png',
              }}
              style={styles.productImage}
            />
            <Text style={styles.price}>R$ {item === 1 ? '31,49' : '7,49'}</Text>
            <View style={styles.discountRow}>
              <Text style={styles.discount}>
                -{item === 1 ? '10%' : '15%'}
              </Text>
              <Text style={styles.oldPrice}>
                R$ {item === 1 ? '44,99' : '9,99'}
              </Text>
            </View>
            <Text style={styles.productName}>
              {item === 1
                ? 'Arroz Tio Urbano Tipo 5kg'
                : 'Leite UHT Piracanjuba Caixa 1L'}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  logo: { fontSize: 24, fontWeight: 'bold' },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: 10, paddingHorizontal: 10, marginBottom: 20 },
  searchInput: { marginLeft: 8, flex: 1, height: 40 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  sectionTitle: { fontSize: 16, fontWeight: '600', marginBottom: 12 },
  sectionLink: { fontSize: 14, color: '#007BFF' },
  categoryScroll: { marginBottom: 24 },
  categoryItem: {
  width: 80, height: 80, backgroundColor: '#007BFF', borderRadius: 10, padding: 10, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  categoryText: { color: 'white', fontSize: 12, marginTop: 4 },
  offerGrid: { flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 },
  productCard: { width: '48%', borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 8 },
  productImage: { width: '100%', height: 100, resizeMode: 'contain', marginBottom: 8 },
  price: { fontWeight: 'bold', fontSize: 16 },
  discountRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  discount: { color: 'green', fontWeight: 'bold', marginRight: 6 },
  oldPrice: { textDecorationLine: 'line-through', color: '#888' },
  productName: { fontSize: 12, color: '#333' }
});
