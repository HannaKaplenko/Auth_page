import { createStackNavigator } from "@react-navigation/stack";
import { AuthorizationView } from "../modules/Authorization";
import { ProductsView } from "../modules/products";

const Stack = createStackNavigator();

export const StackNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="AuthorizationView" component={AuthorizationView} />
            <Stack.Screen name="ProductsView" component={ProductsView} />
        </Stack.Navigator>
    )
}