import { SafeAreaView, Text, StyleSheet, FlatList, View, Image, Button} from "react-native";
import { useRouter } from 'expo-router'
import produtos from '../produtos.json';

export default function listProducts() {

    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerView}>
            <Text style={styles.h1}>Lista de Produtos</Text>
            <FlatList 
                data={produtos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.rowText}>
                        <View style={styles.imageCentral}>
                            <Image 
                            source={{ uri: item.image }} 
                            style={{ width: 140, height: 140 }}
                            />
                        </View>

                        <View style={styles.gapFlat}>
                            <Text style={styles.textBold}>{item.name}</Text>
                            <Text>Descrição: {item.description}</Text>
                            <Text>R$ {item.price.toFixed(2)}</Text>
                            <Button
                                title="Avaliar Produto"
                                onPress={() => router.push(`/review/${item.id}`)}
                            />
                        </View>
                    </View>
                )}
            />
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#bab100'
    },
    rowText: {
        flexDirection: 'row',
        gap: 2
    },
    gapFlat: {
        gap: 10,
        width: 225,
        margin: 5,
        height: 142
    },
    imageCentral: {
        justifyContent: 'center'
    },
    textBold: {
        fontWeight: 'bold',
        fontSize: 16

    },
    containerView: {
        paddingTop: 50,
        alignItems: 'center'
    },
    h1: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 10
    }
})