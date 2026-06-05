import { useEffect, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { getSports } from "../services/sportsApi";

type Sport = {
  id: string;
  title: string;
  description: string;
  type: string;
  image: string;
};

export default function Home() {
  const [sports, setSports] = useState<Sport[]>([]);

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const data = await getSports();
        setSports(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSports();
  }, []);

  return (
    <FlatList
      data={sports}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ margin: 10 }}>
          <Image
            source={{ uri: item.image }}
            style={{ width: 200, height: 120 }}
          />
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      )}
    />
  );
}