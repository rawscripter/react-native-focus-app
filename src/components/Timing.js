import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';
import { RoundedButton } from './RoundedButton';
export const Timing = ({
    onChangeMinutes,
}) => {
    return (
        <>
            <View style={styles.container}>
                <RoundedButton style={styles.timingButton} textStyle={styles.timingText} onPress={
                    () => onChangeMinutes(.1)
                } title="1" size={75} />
            </View>
            <View style={styles.container}>
                <RoundedButton style={styles.timingButton} textStyle={styles.timingText} onPress={
                    () => onChangeMinutes(5)
                } title="5" size={75} />
            </View>
            <View style={styles.container}>
                <RoundedButton style={styles.timingButton} textStyle={styles.timingText} onPress={
                    () => onChangeMinutes(10)
                } title="10" size={75} />
            </View>
            {/* <View style={styles.container}>
                <RoundedButton style={styles.timingButton} textStyle={styles.timingText} onPress={
                    () => onChangeMinutes(10)
                } title="15" size={50} />
            </View> */}
        </>
    );
};

const styles = StyleSheet.create({
    timingButton: {
        backgroundColor: '#fff',
    },
    timingText: {
        color: '#000',
        fontSize: fontSizes.md,
    }
});