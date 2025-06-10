import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { IProduct} from "../../../entities/product/iProduct";

export const useProductDetails = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [productDetails, setProductDetails] = useState<any>();
    const navigation = useNavigation<any>();
    const { id } = useRoute<any>().params || {};

    useEffect(() => {
        getProductDetails();
    }, []);

    const getProductDetails = async () => {
        setIsLoading(true);
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        const data = await response.json();
        setProductDetails(data);
        setIsLoading(false);
    };
    return { productDetails, isLoading, navigation }
}