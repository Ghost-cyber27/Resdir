import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  App: NavigatorScreenParams<AppStackParamList>;
  //Details: { itemId: number; otherParam?: string }; Details screen expects an itemId and optional otherParam
};

export type AuthStackParamList = {
  Login: undefined; // No params for Home screen
  Signup: undefined;
  ForgotPassword: undefined;
}
//images, name, price, description, likes, id
export type AppStackParamList = {
  HomeTabs: undefined;
  Details: { Id: string; name: string, price: string, description: string, likes: number, images: string[], seller: string, category: string };
  ChatDetails: {id: string, username: string, sendername: string, text: string, created_at: string, readMessage: boolean};
}


interface AppNavigatorProps {
  //session: User | null; // Pass the Supabase user session to determine which stack to show
}

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const Tab = createBottomTabNavigator();
const AppStack = createNativeStackNavigator<AppStackParamList>();
const RootStack = createNativeStackNavigator<RootStackParamList>();