import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { colors } from '../styles/colors';

interface Transaction {
  id: string;
  amount: string;
  date: string;
  status: string;
}

const TransactionHistoryScreen: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Placeholder data to simulate transaction history
  const placeholderTransactions: Transaction[] = [
    { id: '1', amount: '0.5 SOL', date: '2024-12-01', status: 'Completed' },
    { id: '2', amount: '1.0 SOL', date: '2024-12-05', status: 'Pending' },
    { id: '3', amount: '0.2 SOL', date: '2024-12-10', status: 'Completed' },
    { id: '4', amount: '3.0 SOL', date: '2024-12-12', status: 'Failed' },
  ];

  useEffect(() => {
    // Simulate fetching transaction data
    setTimeout(() => {
      setTransactions(placeholderTransactions);
      setLoading(false);
    }, 1000); // Simulate network delay
  }, []);

  const renderTransactionItem = ({ item }: { item: Transaction }) => {
    return (
      <TouchableOpacity style={styles.transactionItem}>
        <View style={styles.transactionDetails}>
          <Text style={styles.transactionAmount}>{item.amount}</Text>
          <Text style={styles.transactionDate}>{item.date}</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.transactionStatus}>{item.status}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>

      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} style={styles.loadingIndicator} />
      ) : (
        <FlatList
          data={transactions}
          renderItem={renderTransactionItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.transactionList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Light',  // Custom font for titles
    color: colors.black,
    marginBottom: 20,
  },
  loadingIndicator: {
    marginTop: 50,
  },
  transactionList: {
    marginBottom: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
  },
  transactionDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionAmount: {
    fontSize: 18,
    fontFamily: 'Poppins-Light',
    color: colors.black,
  },
  transactionDate: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: colors.darkGray,
    marginLeft: 10,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionStatus: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: (status: string) => {
      switch (status) {
        case 'Completed':
          return colors.primary;
        case 'Pending':
          return colors.secondary;
        case 'Failed':
          return colors.red;
        default:
          return colors.darkGray;
      }
    },
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: (status: string) => {
      switch (status) {
        case 'Completed':
          return colors.greenLight;
        case 'Pending':
          return colors.blueLight;
        case 'Failed':
          return colors.redLight;
        default:
          return colors.lightGray;
      }
    },
  },
});

export default TransactionHistoryScreen;
