import React, {useContext} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Progress } from "../data/progress.js";
import FormattedText from "../shared/formattedText.js";

export default function LevellingItem({item, complete, pressHandler}) {

  const [progress, setProgress] = useContext(Progress);

  var objectiveStyle = [];
  var rewardStyle    = [styles.infoItem];
  if ( item.id in progress) {
    objectiveStyle.push(styles.complete)
    rewardStyle.push(styles.complete);
  }
  if ( !item.optional ) {
    objectiveStyle.push(styles.required)
  }

  var objectiveLine = [];

  var key = item.id;

    var objectiveLine = item.text.map((value, index) => {
        return (<FormattedText taskId={item.id}
                                key={key + index}
                                style={objectiveStyle}>
                   {value}
                </FormattedText>);
    });

    return (
        <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <View style={styles.container}>
                <View style={[styles.label, item.hasWp ? styles.waypointLabelActive : styles.waypointLabelInactive]}>
                    <Text style={styles.labelTextLeft}>Waypoint</Text>
                </View>
                <View style={styles.centerBlock}>{ objectiveLine }</View>
                {item.optional
                    ? <Text></Text>
                    : <View style={[styles.label, styles.requiredLabel]}>
                        <Text style={styles.labelTextRight}>Required</Text>
                    </View>
                }
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        minHeight: 140,
        paddingTop: 2,
        paddingBottom: 2,
        borderBottomWidth: 2,
        borderColor: "#4d4d4d"
    },
    label: {
        display: "flex",
        alignItems: "center",
        width: 30,
        justifyContent: "center",
    },
    labelTextLeft: {
        fontSize: 20,
        marginRight: 6,
        color: "white",
        transform: [
            {rotate: "-90deg"}
        ]
    },
    labelTextRight: {
        fontSize: 20,
        marginLeft: 6,
        color: "white",
        transform: [
            {rotate: "90deg"}
        ]
    },
    waypointLabelActive: {
        backgroundColor: "#84a9e1"
    },
    waypointLabelInactive: {},
    centerBlock: {
        flexGrow: 1
    },
    requiredLabel:{
        backgroundColor: "#aade87"
    },
    
  item: {
    padding:10,
    marginTop: 10,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10
  },
  objective: {
    flexDirection: "row"
  },
  info: {
    flexDirection: "row"
  },
  infoItem: {
    padding: 5
  },
  complete: {
    textDecorationLine: "line-through",
    opacity: .25
  },
  required: {
    fontWeight: "bold"
  },
  boss: {
    //TODO
    color: "red"
  },
  area: {
    //TODO
    color: "blue"
  },
  quest: {
    //TODO
    color: "green"
  },
  waypoint: {
    //TODO
    color: "lightblue"
  },
  trial: {
    //TODO
    color: "teal"
  }
})
