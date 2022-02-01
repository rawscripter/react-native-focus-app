import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';
const minutesToMilliseconds = (minutes) => {
    return minutes * 60 * 1000;
}
const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

export const Countdown = ({
    minutes,
    isPaused,
    onProgress,
    onEnd
}) => {
    const interval = React.useRef(null);
    const [timeLeft, setTimeLeft] = useState(minutesToMilliseconds(minutes));

    const countDown = () => {
        setTimeLeft((timeLeft) => {
            if (timeLeft == 0) {
                clearInterval(interval.current);
                onEnd();
                return timeLeft;
            }
            onProgress(timeLeft / minutesToMilliseconds(minutes));
            return timeLeft - 1000;
        });
    }

    useEffect(() => {
        if (isPaused) {
            if (interval.current) clearInterval(interval.current);
            return;
        }
        interval.current = setInterval(countDown, 1000);
        return () => clearInterval(interval.current);

    }, [isPaused]);
    useEffect(() => {
        setTimeLeft(minutesToMilliseconds(minutes));

    }, [minutes]);

    return (
        <Text style={styles.text}>{formatTime(timeLeft)}</Text>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    text: {
        fontSize: fontSizes.xxxl,
        color: '#fff',
        textAlign: 'center',
        padding: spacing.lg,
        fontWeight: 'bold',
        backgroundColor: 'rgba(94, 132, 226, 0.4)',
    },

});