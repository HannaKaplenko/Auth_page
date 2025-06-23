import { createStackNavigator } from "@react-navigation/stack";
import { AuthorizationView } from "../modules/Authorization/ui";
import { ProductsView } from "../modules/products/ui";
import { ProductDetailsView } from "../modules/productDetails/ui";

const Stack = createStackNavigator();

export const StackNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="AuthorizationView" component={AuthorizationView} />
            <Stack.Screen name="ProductsView" component={ProductsView} />
            <Stack.Screen name="ProductDetailsView" component={ProductDetailsView} />
        </Stack.Navigator>
    )
}