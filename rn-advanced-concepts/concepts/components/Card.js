import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Card = ({ renderCard, data }) => {
  const renderCards = () => {
    return data.map((item) => {
      return renderCard(item);
    });
  };
  return <View>{renderCards()}</View>;
};
