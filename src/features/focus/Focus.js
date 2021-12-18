import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';
export const Focus = ({ addSubject }) => {
    const [tempItem, setTempItem] = useState('g');
    const onSubmitEdit = () => {
        addSubject(tempItem);
        setTempItem('');
    }

    return (
        <View style={styles.container} >
            <View style={styles.titleContainer}>
                <Text style={styles.title} >What you want to focus on?? </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        ode="outlined"
                        theme={{
                            colors: {
                                primary: '#fff'
                            }
                        }}

                        value={tempItem}
                        style={styles.inputField}
                        onChangeText={text => setTempItem(text)}
                    />
                    <RoundedButton
                        onPress={onSubmitEdit}
                        title="+" size={50}
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
    titleContainer: {
        flex: 0.5,
        padding: spacing.lg,
        justifyContent: 'center',

    },
    title: {
        fontSize: fontSizes.lg,
        color: '#fff',
        marginBottom: spacing.md,
        fontWeight: 'bold',
    },

    inputField: {
        height: 60,
        backgroundColor: '#fff',
        flex: 1,
        marginRight: spacing.md,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
});