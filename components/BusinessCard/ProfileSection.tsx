import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { COLORS, SPACING, TYPOGRAPHY } from '../../constants/theme';

interface ProfileSectionProps {
  name: string;
  jobTitle: string;
  company: string;
  photoUrl: string;
}

export default function ProfileSection({ name, jobTitle, company, photoUrl }: ProfileSectionProps) {
  return (
    <Animated.View 
      style={styles.container}
      entering={FadeInDown.duration(600).delay(100)}
    >
      <View style={styles.photoContainer}>
        <Image 
          source={{ uri: photoUrl }} 
          style={styles.photo} 
          resizeMode="cover"
        />
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
        <Text style={styles.company}>{company}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  photoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    marginBottom: SPACING.md,
    ...Platform.select({
      web: {
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
      },
    }),
    borderWidth: 3,
    borderColor: COLORS.primary,
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
  name: {
    ...TYPOGRAPHY.h1,
    textAlign: 'center',
  },
  jobTitle: {
    ...TYPOGRAPHY.h3,
    textAlign: 'center',
    marginTop: SPACING.xs,
  },
  company: {
    ...TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: SPACING.xs / 2,
  },
});