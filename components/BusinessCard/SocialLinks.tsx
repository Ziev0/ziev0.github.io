import React from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { SPACING, COLORS } from '../../constants/theme';
import ContactButton from '../ui/ContactButton';
import { Linkedin, Instagram } from 'lucide-react-native';

interface SocialLinksProps {
  linkedin: string;
  instagram: string;
}

export default function SocialLinks({ linkedin, instagram }: SocialLinksProps) {
  // Handle LinkedIn
  const handleLinkedIn = () => {
    Linking.openURL(`https://linkedin.com/in/${linkedin}`);
  };

  // Handle Instagram
  const handleInstagram = () => {
    Linking.openURL(`https://instagram.com/${instagram}`);
  };

  return (
    <Animated.View 
      style={styles.container}
      entering={FadeInDown.duration(600).delay(300)}
    >
      <ContactButton 
        icon={<Linkedin size={20} color={COLORS.linkedin} />}
        label="LinkedIn"
        onPress={handleLinkedIn}
      />
      
      <ContactButton 
        icon={<Instagram size={20} color={COLORS.instagram} />}
        label="Instagram"
        onPress={handleInstagram}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: SPACING.md,
  },
});