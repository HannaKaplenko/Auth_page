import React from "react";
import { styles } from "./styles";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native";
import { useProductDetails } from "../presenters/useProduct";


export const ProductDetailsView = () => {
    const { productDetails, isLoading, navigation  } = useProductDetails();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll} contentContainerStyle={styles.contentContainerStyle}>
                <Image source={{ uri: productDetails?.images[0] }} style={styles.image} />
                <Text style={styles.label}>{productDetails?.title}:</Text>
                <Text style={styles.brand}>{productDetails?.category?.name}</Text>
                <Text style={styles.description}>{productDetails?.description}</Text>
                <View>
                    <Text style={styles.price}>Price: ${productDetails?.price}</Text>
                </View>
                <TouchableOpacity style={styles.buyBottom}>
                    <Text style={styles.bottomText}> Add to Cart </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
};

