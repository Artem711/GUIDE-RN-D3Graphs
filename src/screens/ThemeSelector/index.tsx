// PLUGINS IMPORTS //
import React, { useState } from "react"
import { Text, StyleSheet, View } from "react-native"
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler"
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
} from "react-native-reanimated"
import { snapPoint } from "react-native-redash"

// COMPONENTS IMPORTS //
import Circle, { IPosition, COLOR_WIDTH } from "./components/Circle"
import { colors, snapPoints } from "./constants"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export default function ThemeSelector() {
  const [colorSelection, setColorSelection] = useState({
    previous: colors[0],
    current: colors[0],
    position: { x: 0, y: 0 },
  })

  const translateX = useSharedValue(0)
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number }
  >({
    onStart: (_, ctx) => {
      ctx.x = translateX.value
    },
    onActive: ({ translationX }, ctx) => {
      translateX.value = translationX + ctx.x
    },
    onEnd: ({ velocityX }) => {
      const dest = snapPoint(translateX.value, velocityX, snapPoints)
      translateX.value = withSpring(dest)
    },
  })

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={styles.wrapper}>
        <View style={styles.placeholder} />
        {colors.map((color, index) => (
          <Circle
            key={color.id}
            index={index}
            gradient={color}
            translateX={translateX}
            onPress={(position: IPosition) => {
              "worklet"
              translateX.value = withSpring(-index * COLOR_WIDTH)
              setColorSelection({
                position,
                previous: colorSelection.current,
                current: color,
              })
            }}
          />
        ))}
      </Animated.View>
    </PanGestureHandler>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  placeholder: {
    width: COLOR_WIDTH,
  },
})
