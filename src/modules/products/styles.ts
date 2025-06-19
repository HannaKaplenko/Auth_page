import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#483D8B",
        lineHeight: 16,
        alignItems: "center",
    },
    productTitle: {
        color: "#000000",
        fontWeight: "bold",
        margin: 8,
        fontSize: 20,
    },
    productCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
        marginHorizontal: 12,
        height: 550,
    },
    productImage: {
        width: 350,
        height: 400,
        borderRadius: 8,
        marginBottom: 12,
    },
    message: {
        fontSize: 16,
        color: "#333",
        marginBottom: 4,
    },
    categoryText: {
        color: "#000000",
        fontWeight: "bold",
        margin: 8,
        fontSize: 16,
    },
    button: {
        backgroundColor: "#FE4F2D",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 12,
        width: 280,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        height: 200,
        width: 380,
        marginTop: 16,
        margin: 12
    }
});
