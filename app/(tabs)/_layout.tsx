import{Tabs} from "expo-router";
import Feather from '@expo/vector-icons/Feather';


export default function RootTabsLayout(){
    return(
        <Tabs  screenOptions={{
            tabBarActiveBackgroundColor:'#15d967',
            tabBarActiveTintColor:'#fff',
            tabBarInactiveBackgroundColor:'#9f8b8bf',
            tabBarInactiveTintColor:'#6ee5e5',
            tabBarStyle:{
height: 65
            },
            tabBarLabelStyle:{
                fontSize:16
            }
        }}>
            <Tabs.Screen name='contatos'
            options={{
                tabBarIcon:(({color})=>(<Feather name="phone" size={24} color={color} />))
            }}
            />
             <Tabs.Screen name='index'
            options={{
                tabBarIcon:(({color})=>(<Feather name="home" size={24} color={color} />))
    
    }}/>
        </Tabs>
    )

}