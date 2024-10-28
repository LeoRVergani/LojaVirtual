import { View, Text, Button, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter, useSegments } from 'expo-router';
import { useState, useEffect } from 'react';
import produtos from '../../produtos.json';

interface Produto {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function Review() {
  const router = useRouter();
  const segments = useSegments();
  const id = parseInt(segments[segments.length - 1], 10);
  const [produto, setProduto] = useState<Produto | undefined>(undefined);
  const [review, setReview] = useState('');

  useEffect(() => {
    const foundProduct = produtos.find((item) => item.id === id);
    setProduto(foundProduct);
  }, [id]);

  if (!produto) {
    return (
      <SafeAreaView style={styles.container}>
              <View style={{ padding: 20 }}>
                <Text>Produto não encontrado.</Text>
                <Button title="Voltar" onPress={() => router.back()} />
              </View>
      </SafeAreaView>

    );
  }

  return (
    <SafeAreaView style={styles.container}>


        <View style={styles.container}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Avaliação para: {produto.name}
          </Text>
          <TextInput
            placeholder="Escreva sua avaliação aqui"
            value={review}
            onChangeText={setReview}
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              padding: 10,
              marginVertical: 10,
            }}
          />
          <Button title="Enviar Avaliação" onPress={() => console.log(`Avaliação: ${review}`)} />
          <Button title="Voltar" onPress={() => router.back()} />
      </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      backgroundColor: '#bab100'
    }
})
