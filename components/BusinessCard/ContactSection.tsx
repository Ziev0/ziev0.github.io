import React from 'react';
import { View, StyleSheet, Linking, Platform } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { SPACING } from '../../constants/theme';
import ContactButton from '../ui/ContactButton';
import { Phone, Mail, MessageCircle } from 'lucide-react-native';

interface ContactSectionProps {
  phone: string;
  whatsapp: string;
  email: string;
}

export default function ContactSection({ phone, whatsapp, email }: ContactSectionProps) {
  // Handle phone call
  const handleCall = () => {
    Linking.openURL(`tel:${phone}`);
  };

  // Handle WhatsApp
  const handleWhatsApp = () => {
    Linking.openURL(`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`);
  };

  // Handle email
  const handleEmail = () => {
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <Animated.View 
      style={styles.container}
      entering={FadeInDown.duration(600).delay(200)}
    >
      <ContactButton 
        icon={<Phone size={20} />}
        label={phone}
        onPress={handleCall}
      />
      
      <ContactButton 
        icon={<MessageCircle size={20} />}
        label="WhatsApp"
        onPress={handleWhatsApp}
      />
      
      <ContactButton 
        icon={<Mail size={20} />}
        label={email}
        onPress={handleEmail}
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