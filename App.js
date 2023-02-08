import { StyleSheet, Text, View, Image } from "react-native";
import Splash from "./components/splash";
import Main from "./components/main";
import React, { useEffect, useState } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return isLoading ? <Splash /> : <Main />;
}

const styles = StyleSheet.create({
  
});
