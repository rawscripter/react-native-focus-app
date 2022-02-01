import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';
export const Focus = ({ addSubject }) => {
    const [subject, setSubject] = useState('');
    const onSubmitEdit = () => {
        addSubject(subject);
        setSubject('');
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

                        value={subject}
                        style={styles.inputField}
                        onChangeText={text => setSubject(text)}
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
        color: colors.white,
        marginBottom: spacing.md,
        fontWeight: 'bold',
    },

    inputField: {
        height: 60,
        backgroundColor: colors.white,
        flex: 1,
        marginRight: spacing.md,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
});