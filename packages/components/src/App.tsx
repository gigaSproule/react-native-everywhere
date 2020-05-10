import React, {FC, useState} from 'react';
import {LayoutChangeEvent, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';

import {AppHeader} from './AppHeader'

export const App: FC = () => {

    const [state, setState] = useState({isWide: false});

    const handleLayout = ({nativeEvent}: LayoutChangeEvent) => {
        console.log(state.isWide);
        setState({isWide: nativeEvent.layout.width > 800})
        console.log(`${nativeEvent.layout.width} is wide? ${state.isWide}`);
    }

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <ScrollView onLayout={handleLayout}
                            contentInsetAdjustmentBehavior="automatic"
                            style={styles.scrollView}>
                    <AppHeader/>
                    {global.HermesInternal == null ? null : (
                        <View style={styles.engine}>
                            <Text style={styles.footer}>Engine: Hermes</Text>
                        </View>
                    )}
                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Code sharing using Monorepo</Text>
                            <Text style={styles.sectionDescription}>
                                Edit <Text style={styles.highlight}>packages/components/App.tsx</Text> to change this
                                screen and then come back to see your edits (in the phone or the browser).
                            </Text>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle} onLayout={handleLayout}>Web support via
                                react-native-web</Text>
                            <Text style={styles.sectionDescription}>
                                Run <Text style={styles.highlight}>yarn workspace web start</Text> to
                                open this app in the browser.
                            </Text>
                            <Text style={styles.sectionDescription}>
                                It will share the same code from mobile, unless you create platform-specific files
                                using the <Text style={styles.highlight}>.web.tsx</Text> extension
                                (also supports <Text style={styles.highlight}>.android</Text>,{' '}
                                <Text style={styles.highlight}>.ios</Text>,{' '}
                                <Text style={styles.highlight}>.native</Text>, etc).
                            </Text>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'stretch',
                    }}>
                        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                        <View style={{height: 50, backgroundColor: 'skyblue'}}/>
                        <View style={{height: 100, backgroundColor: 'steelblue'}}/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: 'white',
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: 'gray',
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: 'gray',
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

declare var global: any
