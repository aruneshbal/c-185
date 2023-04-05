import React from 'react'
import { Image, View } from 'react-native';

const Filter1 = ({
    face: {
        bounds: {
            size: { width: faceWidth, height: faceHeight }
        },
        leftEyePosition,
        rightEyePosition,
        nosebasePosition
    }
}) => {

    const transformAngle = (
        angleRad = Math.atan(
            (rightEyePosition.y - leftEyePosition.y) /
            (rightEyePosition.x - leftEyePosition.x)
        )
    ) => angleRad * 180 / Math.PI
    return (
        <View style={{
            position: 'absolute',
            left: leftEyePosition.x - glassesWidth * 0.675,
            top: leftEyePosition.y - glassesHeight * 0.5
        }}>
            <Image
                source={require('../assets/crown-pic1.png')}
                style={{
                    width: glassesWidth,
                    height: glassesHeight,
                    resizeMode: 'contain',
                    transform: [{ rotate: `${transformAngle()}deg` }]
                }}
            />
        </View>
    );
};

export default Filter1