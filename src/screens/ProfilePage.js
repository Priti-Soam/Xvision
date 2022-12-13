import React, { useState, useEffect, useCallback } from 'react';
import { BackHandler } from 'react-native';
import Toast from 'react-native-simple-toast';
import { useFocusEffect } from '@react-navigation/native';
import MainPage from './MainPage';

export default function ProfilePage() {
    const [backPressedCount, setBackPressedCount] = useState(0);
    //To handle the device back button
    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener('hardwareBackPress', () => {
                setBackPressedCount((backPressedCount) => backPressedCount + 1);
                return true;
            });
            return () =>
                BackHandler.removeEventListener('hardwareBackPress', () => true);
        }, []),
    );
    useEffect(() => {
        if (backPressedCount >= 2) {
            BackHandler.exitApp();
        }
        if (backPressedCount === 1) {
            Toast.show('Press double tap to exit app!', Toast.LONG);
        }
    }, [backPressedCount]);

    return (
        <MainPage />
    );
}