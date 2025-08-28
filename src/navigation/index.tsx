import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from './screens/auth/welcome';
import { Login } from './screens/auth/login';
import { SignUp } from './screens/auth/signup';
import { ForgotPassword } from './screens/auth/forgotPassword';
import { Home } from './screens/Home';
import { Chat } from './screens/Chat';
import { Details } from './screens/details';
import { ProfileDetails } from './screens/profileDetails';
import { TabBar } from '../components/TabBar';

type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  App: NavigatorScreenParams<AppStackParamList>;
  //Details: { itemId: number; otherParam?: string }; Details screen expects an itemId and optional otherParam
};

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined; // No params for Home screen
  Signup: undefined;
  ForgotPassword: undefined;
}
//for pages : home, cha notification, user profile, profile details, details 
export type AppStackParamList = {
  HomeTabs: undefined;
  Details: { Id: string; name: string, price: string, description: string, likes: number, images: string[], seller: string, category: string };
  ProfileDetails: {id: string, username: string, sendername: string, text: string, created_at: string, readMessage: boolean};
}


interface AppNavigatorProps {
  //session: User | null; // Pass the Supabase user session to determine which stack to show
}

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const Tab = createBottomTabNavigator();
const AppStack = createNativeStackNavigator<AppStackParamList>();
const RootStack = createNativeStackNavigator<RootStackParamList>();

function HomeTabs(){
  return(
    <Tab.Navigator tabBar={(props) => <TabBar {...props}/>} screenOptions={{ headerShown: true}}>
      <Tab.Screen name= "Home" component={Home} options={{headerShown: false}}/>
      <Tab.Screen name= "Chat" component={Chat} />
    </Tab.Navigator>
  );
}

const AuthStackNav: React.FC = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={SignUp} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
};

const AppStackNav: React.FC = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="HomeTabs" component={HomeTabs} />
      <AppStack.Screen name="Details" component={Details} />
      <AppStack.Screen name="ProfileDetails" component={ProfileDetails} />
    </AppStack.Navigator>
  );
};

const AppNavigator: React.FC<AppNavigatorProps> = () => {
  return (
    
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="App" component={AppStackNav} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

/*onReady={() => {
            SplashScreen.hideAsync();
          }}*/

export default AppNavigator;