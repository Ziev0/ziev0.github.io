import React, { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, Platform, View } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from '../../constants/theme';

interface ContactButtonProps {
  icon: ReactNode;
  label: string;
  onPress: () => void;
}

export default function ContactButton({ icon, label, onPress }: ContactButtonProps) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <Text style={styles.label} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.buttonBackground,
    padding: SPACING.md,
    borderRadius: 12,
    ...Platform.select({
      web: {
        cursor: 'pointer',
        transition: 'background-color 0.2s, transform 0.2s',
        ':hover': {
          backgroundColor: COLORS.buttonBackgroundHover,
          transform: 'translateY(-2px)',
        },
        ':active': {
          transform: 'translateY(0px)',
        },
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
      },
    }),
  },
  iconContainer: {
    marginRight: SPACING.md,
  },
  label: {
    ...TYPOGRAPHY.button,
    color: COLORS.text,
    flex: 1,
  },
});