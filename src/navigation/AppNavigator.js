import * as React from 'react';
import { View, Image, Text, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GestureRecognizer from 'react-native-swipe-gestures';
import { Styles } from '../common';
import DoubleTap from '../components/DoubleTap';
import ProfilePage from '../screens/ProfilePage';

const Stack = createStackNavigator()

function MainStackNavigator() {

    const [firstLaunch, setFirstLaunch] = React.useState(null);
    React.useEffect(() => {
        async function setData() {
            const appData = await AsyncStorage.getItem("appLaunched");
            if (appData == null) {
                setFirstLaunch(true);
                AsyncStorage.setItem("appLaunched", "false");
            } else {
                setFirstLaunch(false);
            }
        }
        setData();
    }, []);

    LogBox.ignoreAllLogs();

    return (
        firstLaunch != null && (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    {firstLaunch && (
                        <>
                            <Stack.Screen name="FirstPage" component={FirstPage} />
                            <Stack.Screen name="SecondPage" component={SecondPage} />
                        </>
                    )}
                    <Stack.Screen name="ProfilePage" component={ProfilePage} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    );
}

export default MainStackNavigator

const FirstPage = ({ navigation }) => {
    const toggleLike = () => navigation.navigate('SecondPage');
    return (
        <LinearGradient colors={['#000000E6', '#000000CC']} style={Styles.linearGradient}>
            <Section title="If you want to be friends with someone" sectionTitle={Styles.sectionTitle}>
                Double-tap to <Text style={Styles.highlight}>LIKE</Text>
            </Section>
            <DoubleTap onDoubleTap={toggleLike}>
                <Image style={Styles.tinyLogo} source={require('../assets/tap.png')} />
            </DoubleTap>
            <Section title={"Double-tap to\n continue"} sectionTitle={Styles.secText} />
        </LinearGradient>
    );
};
const SecondPage = ({ navigation }) => {
    const onSwipeUp = () => navigation.navigate('ProfilePage');
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };
    return (
        <GestureRecognizer
            onSwipeUp={(state) => onSwipeUp(state)}
            config={config}
            style={{ flex: 1 }}>
            <LinearGradient colors={['#000000E6', '#000000CC']} style={Styles.linearGradient}>
                <Section title="If you don't like someone" sectionTitle={Styles.sectionTitle}>
                    Swipe up to <Text style={Styles.highlight1}>PASS</Text>
                </Section>
                <Image style={Styles.tinyLogo} source={require('../assets/swipe.png')} />
                <Section title={"Swipe-up to\n continue"} sectionTitle={Styles.secText} />
            </LinearGradient>
        </GestureRecognizer>
    );
};


const Section = ({ children, title, sectionTitle }) => {
    return (
        <View style={Styles.sectionContainer}>
            <Text
                style={sectionTitle}>
                {title}
            </Text>
            <Text
                style={Styles.sectionDescription}>
                {children}
            </Text>
        </View>
    );
};