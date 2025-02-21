import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Modal,
    TouchableWithoutFeedback,
    Platform,
  } from "react-native";
  import React, { useCallback, useState } from "react";
  import { AntDesign } from "@expo/vector-icons";
  


  
  export default function Dropdown({
    data,
    onChange,
    placeholder,
    valueTOV
  }) {
    const [expanded, setExpanded] = useState(false);
  
    const toggleExpanded = useCallback(() => setExpanded(!expanded), [expanded]);
  
    const [value, setValue] = useState(valueTOV);
  
  
    const [top, setTop] = useState(0);
  
    const onSelect = useCallback((item) => {
      onChange(item);
      setValue(item.label);
      setExpanded(false);
    }, []);
    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={toggleExpanded}
        >
          <Text style={styles.text}> {value || placeholder} </Text>
          <AntDesign name={expanded ? "caretup" : "caretdown"} />
        </TouchableOpacity>
        {expanded ? (
          <Modal visible={expanded} transparent>
            <TouchableWithoutFeedback onPress={() => setExpanded(false)}>
              <View style={styles.backdrop}>
                <View
                  style={[
                    styles.options,
                    {
                      top,
                    },
                  ]}
                >
                  <FlatList
                    keyExtractor={(item) => item.value}
                    data={data}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.optionItem}
                        onPress={() => onSelect(item)}
                      >
                        <Text>{item.label}</Text>
                      </TouchableOpacity>
                    )}
                    ItemSeparatorComponent={() => (
                      <View style={styles.separator} />
                    )}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        ) : null}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    flatlister:{},
    backdrop: {
      padding: 100,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      // marginTop:50,
    },
    optionItem: {
      height: 40,
      justifyContent: "space-evenly",
    },
    separator: {
      height: 1
    },
    options: {
      position: "static",
      // top: 53,
      backgroundColor: "#FFD6A1",
      width: "80%",
      padding: 5,
      borderRadius: 20,
      maxHeight: 250,
    },
    text: {
      fontSize: 15,
      opacity: 0.8,
    },
    button: {
      height: 35,
      justifyContent: "space-between",
      backgroundColor: "#FFD6A1",
      flexDirection: "row",
      width: "65%",
      alignItems: "center",
      marginHorizontal: 45,
      borderRadius: 8,
    },
  });