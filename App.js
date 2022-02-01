import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { FocusHistory } from './src/features/focus/FocusHistory';
import { colors } from './src/utils/colors';
import { Timer } from './src/features/timer/Timer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { spacing } from './src/utils/sizes';

const STATUSES = {
  COMPLETE: 1,
  CANCEL: 0,
}
export default function App() {
  const [focusSubjet, setFocusSubjet] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistorySubjectWithState = (subject, status) => {
    setFocusHistory(focusHistory => [...focusHistory, {
      subject,
      status
    }]);
  };
  // useEffect(() => {
  //   if (focusSubjet != null) {
  //     setFocusHistory([...focusHistory, focusSubjet]);
  //   }
  // }, [focusSubjet]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          {focusSubjet ? (
            <Timer focusSubjet={focusSubjet} onTimerEnd={
              () => {
                addFocusHistorySubjectWithState(focusSubjet, STATUSES.COMPLETE);
                setFocusSubjet(null);
              }
            } />
          ) : (
            <View style={styles.focusContainer}>
              <View style={styles.focus}>
                <Focus addSubject={setFocusSubjet} />
              </View>
              <FocusHistory focusHistory={focusHistory} />
            </View>
          )}
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  focusContainer: {
    flex: 1,
  },
  focus: {
    flex: .5,
    paddingTop: spacing.lg,

  },

});
