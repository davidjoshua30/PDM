import { Button } from 'react-native';
import{Stack} from 'expo-router';

export default function RootStackLayout(){
return(
    
    <Stack  initialRouteName="auth/login" screenOptions={{

        headerShown: true, 

        headerStyle:{
            backgroundColor:'#121382'
        },

        headerTintColor: '#fff',

        headerTitleAlign:'center',
        
    }}>

<Stack.Screen name="index" options={{
    title:'Home',
    headerRight: ()=><Button title="Ir Sobre"/>
}} />

<Stack.Screen name="auth/login"  options={{
    title:'Tela de login'
}} />

    </Stack>
);

}