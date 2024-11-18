import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { Meditation } from "@/types";

export function MeditationListItem({ meditation }: { meditation: Meditation }) {
  return (
    <Link href={`/meditation/${meditation.id}`} asChild>
      <Pressable className="flex-row items-center gap-5">
        <View className="bg-green-700 p-2 rounded-full">
          <FontAwesome name="check" size={16} color="white" />
        </View>

        <View className="flex-1 p-5 py-8 border-2 border-gray-300 rounded-2xl">
          <Text className="font-semibold text-2xl mb-2">
            {meditation.title}
          </Text>

          <View className="flex-row items-center gap-1">
            <FontAwesome6 name="clock" size={16} color="#4b5563" />
            <Text className="text-gray-600">{meditation.duration} min</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}
