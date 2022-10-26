import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/pages/LoginPage";
import RegisterPage from "./src/pages/RegisterPage";
import NewsPage from "./src/pages/NewsPage";
import SettingsPage from "./src/pages/SettingsPage";
import { SegurancaContext } from "./src/contexts/Seguranca";
import NewsDetailPage from "./src/pages/NewsDetailPage";
import HomeNews from "./src/pages/HomeNews";

const Tab= createBottomTabNavigator();


function Home() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeNews} />
            <Tab.Screen name="Settings" component={SettingsPage} />
            
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    const { authorized } = React.useContext(SegurancaContext);

    return (
        <Stack.Navigator initialRouteName='Login'>
            {authorized ? (
                <>
                    
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name="News" component={NewsPage} />
                    <Stack.Screen name="NewsDetail" component={NewsDetailPage} />
                   
                </>
            ) : (
                <>
                    <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
                    <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false }} />
                </>
            )}
        </Stack.Navigator>
    )
}