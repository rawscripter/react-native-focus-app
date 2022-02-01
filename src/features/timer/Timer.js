import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Vibration, Platform } from 'react-native';
import { colors } from '../../utils/colors';
import { fontSizes, spacing } from '../../utils/sizes';
import { Countdown } from '../../components/Countdown';
import { Timing } from '../../components/Timing';
import { RoundedButton } from '../../components/RoundedButton';
import { ProgressBar, Colors } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';


const DEFAULT_MINUTES = 0.1;
export const Timer = ({ focusSubjet, onTimerEnd }) => {
    //keep the screen awake
    useKeepAwake();
    const [isStated, setIsStated] = useState(false);
    const [progress, setProgress] = useState(0);
    const onProgress = (progress) => {
        setProgress(progress);
    }
    const onEnd = () => {
        onTimerEnd();
        vibrate();
        setMinutes(DEFAULT_MINUTES);
        setIsStated(false);
        setProgress(1);
    }
    const [minutes, setMinutes] = useState(DEFAULT_MINUTES);

    const changeMinutes = (minutes) => {
        setMinutes(minutes);
        setProgress(1);
    }

    const vibrate = () => {
        if (Platform.OS === 'ios') {
            const interval = setInterval(() => {
                Vibration.vibrate();
            }, 1000);
            setTimeout(() => {
                clearInterval(interval);
            }, 10000);
        } else {
            Vibration.vibrate(10000);
        }

    }

    const cancelFocus = () => {
        setMinutes(DEFAULT_MINUTES);
        setIsStated(false);
        setProgress(1);
        onTimerEnd();
    }
    const resetFocus = () => {
        setMinutes(DEFAULT_MINUTES);
        setIsStated(false);
        setProgress(1);
    }

    return (
        <View style={styles.container}>
            <View style={styles.countDown}>
                <Countdown onEnd={onEnd} minutes={minutes} onProgress={onProgress} isPaused={!isStated} />
                <ProgressBar progress={progress} color={Colors.white} />
            </View>
            <View>
                <Text style={styles.title}>Focusing on </Text>
                <Text style={styles.task}>  {focusSubjet} </Text>
            </View>
            <View style={styles.timingButtons}>
                <Timing
                    onChangeMinutes={changeMinutes}
                />

            </View>
            <View style={styles.buttons}>
                <RoundedButton
                    onPress={() => setIsStated(!isStated)}
                    title={isStated ? 'Pause' : 'Start'}
                    size={100}
                />
            </View>
            <View style={styles.timingButtons}>
                <View style={styles.cancelButtonContainer}>
                    <RoundedButton
                        onPress={() => cancelFocus()}
                        title="Cancel"
                        style={styles.cancelButton}
                        size={60}
                    />
                </View>
                <View style={styles.cancelButtonContainer}>
                    <RoundedButton
                        onPress={() => resetFocus()}
                        title="Reset"
                        style={styles.cancelButton}
                        size={60}
                    />
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: fontSizes.md,
        color: '#fff',
        textAlign: 'center',
        paddingTop: spacing.xxl,
    },
    task: {
        fontSize: fontSizes.xxl,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    countDown: {
        // flex: .5,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: colors.darkBlue,
    },
    buttons: {
        flex: .3,
        padding: spacing.xl,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.darkBlue,
    },
    timingButtons: {
        flex: .3,
        padding: spacing.xl,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cancelButtonContainer: {
        flex: .3,
        padding: spacing.xl,
    },
    cancelButton: {

    }
});