import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from "expo-permissions";
import * as FaceDetector from 'expo-face-detector';

const filters = {
    "crown-pic1": {
    src: require("../assets/crown-pic1.png"),
    width:3.5,
    height:0.7,
    left:0.46,
    right:0.15,
    top:1.5
    },
    "crown-pic2": {
        src: require("../assets/crown-pic2.png"),
        width:3.5,
        height:0.7,
        left:0.46,
        right:0.15,
        top:1.5
        },
        "crown-pic3": {
            src: require("../assets/crown-pic3.png"),
            width:3.5,
            height:0.7,
            left:0.46,
            right:0.15,
            top:1.5
            },
            "flower-pic1": {
                src: require("../assets/flower-pic1.png"),
                width:3.5,
                height:0.7,
                left:0.46,
                right:0.15,
                top:1.5
                },
                "flower-pic2": {
                    src: require("../assets/flower-pic2.png"),
                    width:3.5,
                    height:0.7,
                    left:0.46,
                    right:0.15,
                    top:1.5
                    },
                    "flower-pic3": {
                        src: require("../assets/flower-pic3.png"),
                        width:3.5,
                        height:0.7,
                        left:0.46,
                        right:0.15,
                        top:1.5
                        },
                        "hair-pic1": {
                            src: require("../assets/hair-pic1.png"),
                            width:3.5,
                            height:0.7,
                            left:0.46,
                            right:0.15,
                            top:1.5
                            },
                            "hat-pic1": {
                                src: require("../assets/hat-pic1.png"),
                                width:3.5,
                                height:0.7,
                                left:0.46,
                                right:0.15,
                                top:1.5
                                },
                                "hat-pic2": {
                                    src: require("../assets/hat-pic2.png"),
                                    width:3.5,
                                    height:0.7,
                                    left:0.46,
                                    right:0.15,
                                    top:1.5
                                    },
                                    "other-pic1": {
                                        src: require("../assets/other-pic1.png"),
                                        width:3.5,
                                        height:0.7,
                                        left:0.46,
                                        right:0.15,
                                        top:1.5
                                        },
                                        "other-pic2": {
                                            src: require("../assets/other-pic2.png"),
                                            width:3.5,
                                            height:0.7,
                                            left:0.46,
                                            right:0.15,
                                            top:1.5
                                            },
                                            "other-pic3": {
                                                src: require("../assets/other-pic3.png"),
                                                width:3.5,
                                                height:0.7,
                                                left:0.46,
                                                right:0.15,
                                                top:1.5
                                                }
}