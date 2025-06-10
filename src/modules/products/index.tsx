import React from 'react';
import { useState, useEffect } from 'react';
import { styles } from './styles';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export const ProductsView = () => {
    const navigation = useNavigation<any>();
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        setIsLoading(true);
        const response = await fetch('https://api.escuelajs.co/api/v1/products')
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
    }

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.productCard}>
                        <Text style={styles.productTitle}>{item.title}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('ProductDetailsView', { id: item.id })}>
                            <Image source={{ uri: item.images?.[0] }} style={styles.productImage} />
                        </TouchableOpacity>
                        <Text style={styles.message}>Price: {item.price} $ </Text >
                        <Text style={styles.message}>
                            <Text style={styles.categoryText}>Category name: </Text> {item.slug} </Text>
                    </View>
                )}
            ></FlatList>
            <Image source={require('../../../assets/images/pic.png')} style={styles.image} />
            <View><TouchableOpacity> <Text style={styles.buttonText}>Add to cart</Text></TouchableOpacity></View>
        </View>
    );
};
