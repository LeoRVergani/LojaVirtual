import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{
            headerShown: false

        }}>
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="listProducts" options={{ title: 'Lista de Produtos' }} />
            <Stack.Screen name="review/[id]" options={{ title: 'Avaliação dos Produtos'}}/>
        </Stack>
    )
}