import { Pressable, Text } from "react-native";
import { useState } from "react";

export default function HeartButton() {
  const [liked, setLiked] = useState(false);

  return (
    <Pressable onPress={() => setLiked(!liked)}>
      <Text style={{ fontSize: 24 }}>
        {liked ? "❤️" : "🤍"}
      </Text>
    </Pressable>
  );
}