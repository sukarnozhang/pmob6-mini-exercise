import React from 'react';
import { Card, Button } from 'react-native-paper';
import { Text, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../redux/modules/counter';

export default function Clicker() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Card style={styles.card}>
      <Text style={styles.label}>{value}</Text>
      <Button
        onPress={() => {
          dispatch(increment());
        }}>
        Increase
      </Button>
      <Button
        onPress={() => {
          dispatch(decrement());
        }}>
        Decrease
      </Button>
      <Button
        onPress={() => {
          dispatch(reset());
        }}>
        Reset
      </Button>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 40,
  },
  label: {
    textAlign: 'center',
    fontSize: 60,
  },
});
