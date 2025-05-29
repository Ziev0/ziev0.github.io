import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { COLORS, SPACING, TYPOGRAPHY } from '../../constants/theme';
import { Download } from 'lucide-react-native';
import { generateVCard } from '../../utils/vCardGenerator';

interface SaveContactButtonProps {
  userData: {
    name: string;
    jobTitle: string;
    company: string;
    phone: string;
    email: string;
    linkedin?: string;
    instagram?: string;
  };
}

export default function SaveContactButton({ userData }: SaveContactButtonProps) {
  const handleSaveContact = () => {
    if (Platform.OS === 'web') {
      // Generate vCard data
      const vCardData = generateVCard(userData);
      
      // Create a blob and download it
      const blob = new Blob([vCardData], { type: 'text/vcard' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const filename = `${userData.name.replace(/\s+/g, '_')}.vcf`;
      
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else {
      // For native platforms, we would need to use expo-file-system
      // and expo-sharing to create and share the file
      // This would require additional implementation
      console.log('Save contact functionality for native platforms needs additional implementation');
    }
  };

  return (
    <Animated.View 
      style={styles.container}
      entering={FadeInDown.duration(600).delay(400)}
    >
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleSaveContact}
        activeOpacity={0.8}
      >
        <Download size={20} color={COLORS.white} />
        <Text style={styles.buttonText}>Save Contact</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: SPACING.xl,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderRadius: 12,
    width: '100%',
    gap: SPACING.sm,
    ...Platform.select({
      web: {
        cursor: 'pointer',
        transition: 'transform 0.2s, background-color 0.2s',
        ':hover': {
          transform: 'translateY(-2px)',
          backgroundColor: COLORS.primaryDark,
        },
        ':active': {
          transform: 'translateY(0px)',
        },
      },
      default: {
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
      },
    }),
  },
  buttonText: {
    ...TYPOGRAPHY.button,
    color: COLORS.white,
  },
});