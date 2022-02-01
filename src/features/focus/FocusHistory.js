import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { spacing } from '../../utils/sizes';
export const FocusHistory = ({
    focusHistory,
}) => {

    if (focusHistory.length === 0) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.focusTitle}> Focus History </Text>
            {focusHistory.map((subject, index) => (
                <TouchableOpacity key={index} style={styles.item}>
                    <Text style={styles.text}>{subject.subject}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: spacing.lg,
        paddingTop: 0,
    },
    item: {
        width: '100%',
        padding: spacing.md,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#000',
    },
    focusTitle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        padding: spacing.md,
    },
});
