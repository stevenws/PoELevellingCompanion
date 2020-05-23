import React, {useContext} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { globalStyles } from "../styles/global.js";
import LevellingItem from '../shared/levellingItem.js';

import { Progress } from "../data/progress.js";

import content from '../data/content.json';

export default function Levelling() {

  const [progress, setProgress] = useContext(Progress);

  const toggleState = function(id) {
    setProgress((prevState) => {
      prevState[id] = true;
      return JSON.parse(JSON.stringify(prevState));
    });
  }

  var container = [];
    for (var i = 1; i < 11; i++) {
        container.push(
            <View key={i}>
                <View style={globalStyles.section}>
                    <Text style={globalStyles.sectionText}>
                        {content.acts[i].title}
                    </Text>
                </View>

                {content.acts[i].tasks.map(item => (
                    <LevellingItem item={ item }
                                   key={ item.id }
                                   pressHandler={ toggleState } />
                ))}
            </View>
        );
    }

  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
        {container}
    </ScrollView>
  );
}
