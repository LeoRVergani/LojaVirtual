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
  const id = parseInt(segments[segments.length]);
  const [produto, setProduto] = useState<Produto>();
  const [review, setReview] = useState('');

  useEffect(() => {
    const foundProduct = produtos.find((item) => item.id);
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
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
            Nos dê seu Feedback
          </Text>
          <Text style={{textAlign: 'center', width: 325, paddingTop: 25, paddingBottom: 25}}>Sua opinião é importante para nós. Por favor, compartilhe sua experiência.</Text>
          <TextInput
            placeholder="Seu nome"
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              padding: 10,
              marginVertical: 10,
              width: 325,
            }}
          />
                    <TextInput
            placeholder="Seu e-mail"
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              padding: 10,
              marginVertical: 10,
              width: 325,
            }}
          />
                    <TextInput
            placeholder="Descreva sua experiência..."
            value={review}
            onChangeText={setReview}
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              padding: 10,
              marginVertical: 10,
              width: 325,
              height: 250,
            }}
          />
          <View style={styles.btnGap}>
            <Button title="Enviar Avaliação" onPress={() => alert(`Avaliação: ${review}`)} />
            <Button title="Voltar" onPress={() => router.back()} />
          </View>
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
    },
    btnGap: {
      gap: 15
    }
})
