
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#7B83B9",
        paddingHorizontal: 20,
    },
    message: {
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        marginBottom: 40,
    },
    inputWrapper: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#D3AF37",
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    input: {
        height: 40,
        color: "#000000",
    },
    button: {
        height: 45,
        width: 160,
        backgroundColor: "#483D8B",
        marginTop: 30,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textColor: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 16,
    },
});