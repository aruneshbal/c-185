import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from "expo-permissions";
import * as FaceDetector from 'expo-face-detector';

import Filter1 from './Filter1'
import Filter2 from './Filter2'
import Filter3 from './Filter3'
import Filter4 from './Filter4'
import Filter5 from './Filter5'
import Filter6 from './Filter6'
import Filter7 from './Filter7'
import Filter8 from './Filter8'
import Filter9 from './Filter9'
import Filter10 from './Filter10'
import Filter11 from './Filter11'
import Filter12 from './Filter12'

const data = {
    Crown:[
        {
        "id": "1",
        "image": require('../assets/crown-pic1.png')
    },
    {
        "id": "2",
        "image": require('../assets/crown-pic2.png')
    },
    {
        "id": "3",
        "image": require('../assets/crown-pic3.png')
    },
    ],
    Flower:[
        {
        "id": "4",
        "image": require('../assets/flower-pic1.png')
    },
    {
        "id": "5",
        "image": require('../assets/flower-pic2.png')
    },
    {
        "id": "6",
        "image": require('../assets/flower-pic3.png')
    },
],
    Hairs:[
        {
        "id": "7",
        "image": require('../assets/hair-pic1.png')
    },
],
    Hats:[   {

        "id": "8",
        "image": require('../assets/hat-pic1.png')
    },
    {
        "id": "9",
        "image": require('../assets/hat-pic2.png')
    },
],
   Other:[
    {
        "id": "10",
        "image": require('../assets/other-pic1.png')
    },
    {
        "id": "11",
        "image": require('../assets/other-pic2.png')
    },
    {
        "id": "12",
        "image": require('../assets/other-pic3.png')
    }
   ]
}

{this.state.faces.map(faces => (
<filter
key={`face-id-${face.faceID}`}
face={face}
source={fliters[this.state.current_filter].src}
width={fliters[this.state.current_filter].width}
height={fliters[this.state.current_filter].height}
left={fliters[this.state.current_filter].left}
right={fliters[this.state.current_filter].right}
top={fliters[this.state.current_filter].top}
/>
)) } 

<View style={styles.lowerCotainer}>
<View style={styles.lowerTopCotainer}>
    <ScrollView
    contentContainerStyle={styles.categories}
    horizontal
    showsHorizontalScrollIndicator={false}>
        {Object.keys(data).map(category => (
           <TouchableOpacity
           key={`category-button-${category}` }
           style={[
            styles.category,
            {
                backgroundColor:
                this.state.selected === category ? "#FFA384":"#E7F2F8"
            }
           ]}
           onPress={()=>
        this.setstate({
            selected: category,
            current_filter: data[category][0].id
        })
    }
    >
        <Text>{category}</Text>
    </TouchableOpacity>
        ))}
        </ScrollView>
</View>
</View>

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasCameraPermission: null,
            faces: []
        }
        this.onFacesDetected = this.onFacesDetected.bind(this);
    }
    componentDidMount() {
        Permissions
            .askAsync(Permissions.CAMERA)
            .then(this.onCameraPermission)
    }

    onCameraPermission = (status) => {
        this.setState({ hasCameraPermission: status.status === 'granted' })
    }

    onFacesDetected = (faces) => {
        this.setState({ faces: faces })
    }

    onFaceDetectionError = (error) => {
        console.log(error)
    }
    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />
        }
        if (hasCameraPermission === false) {
            return (
                <View style={styles.container}>
                    <Text>Did not give access to camera</Text>
                </View>
            )
        }

        console.log(this.state.faces)
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.headingContainer}>
                    <Text style={styles.titleText}>Look me</Text>
                </View>
                <View style={styles.cameraStyle}>
                    <Camera
                        style={{ flex: 1 }}
                        type={Camera.Constants.Type.front}
                        faceDetectorSettings={{
                            mode: FaceDetector.Constants.Mode.fast,
                            detectLandmarks: FaceDetector.Constants.Landmarks.all,
                            runClassifications: FaceDetector.Constants.Classifications.all
                        }}
                        onFacesDetected={this.onFacesDetected}
                        onFacesDetectionError={this.onFacesDetectionError}
                    />
                </View>
                <View style={styles.filterContainer}>

                </View>
                <View style={styles.actionContainer}>

                </View>
            </View>
        )
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.headingContainer}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Text style={styles.titleText1}>Look</Text><Text style={styles.titleText2}>me</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Text style={styles.subheading1}>Try Our</Text><Text style={styles.subheading2}> Filters</Text>
                    </View>
                </View>
                <View style={styles.cameraStyle}>
                    <Camera
                        style={{ flex: 1 }}
                        type={Camera.Constants.Type.front}
                        faceDetectorSettings={{
                            mode: FaceDetector.Constants.Mode.fast,
                            detectLandmarks: FaceDetector.Constants.Landmarks.all,
                            runClassifications: FaceDetector.Constants.Classifications.all
                        }}
                        onFacesDetected={this.onFacesDetected}
                        onFacesDetectionError={this.onFacesDetectionError}
                    />
                    {
                        this.state.faces.map(face => {
                            if (this.state.current_filter === "filter_1") {
                                return <Filter1 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_2") {
                                return <Filter2 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_3") {
                                return <Filter3 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_4") {
                                return <Filter4 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_5") {
                                return <Filter5 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_6") {
                                return <Filter6 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_7") {
                                return <Filter7 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_8") {
                                return <Filter8 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_9") {
                                return <Filter9 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_10") {
                                return <Filter10 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_11") {
                                return <Filter10 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_12") {
                                return <Filter10 key={face.faceID} face={face} />
                            }
                        })
                    }
                </View>
                <View style={styles.framesContainer}>
                    <ScrollView style={{ flexDirection: "row" }} horizontal showsHorizontalScrollIndicator={false}>
                        {
                            data.map(filter_data => {
                                return (
                                    <TouchableOpacity style={styles.filterImageContainer} onPress={() => this.setState({ current_filter: `filter_${filter_data.id}` })}>
                                        <Image source={filter_data.image} style={{ height: 32, width: 80 }} />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}