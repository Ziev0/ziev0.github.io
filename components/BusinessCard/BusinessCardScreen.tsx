import React from 'react';
import { View, StyleSheet, ScrollView, Platform, SafeAreaView } from 'react-native';
import ProfileSection from './ProfileSection';
import ContactSection from './ContactSection';
import SocialLinks from './SocialLinks';
import SaveContactButton from './SaveContactButton';
import { COLORS, SPACING } from '../../constants/theme';

// Demo user data - in a real app, this would come from an API or state management
const userData = {
  name: 'Syed Muhammad Ali Ghazi Zaidi',
  jobTitle: 'Entrepreneur',
  company: 'ArenaX',
  photoUrl: 'https://res.cloudinary.com/dbwlevlbp/image/upload/v1742625262/hbvz9mliy42wmvxhomsz.jpg?auto=compress&cs=tinysrgb&w=800',
  phone: '+92 (370) 664-2065',
  whatsapp: '+923706642065',
  email: 'theghaziali@gmail.com',
  linkedin: 'muhammad-ali-ghazi',
  instagram: 'ghaziisdepressed',
};

export default function BusinessCardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cardContainer}>
          <ProfileSection 
            name={userData.name}
            jobTitle={userData.jobTitle}
            company={userData.company}
            photoUrl={userData.photoUrl}
          />
          
          <View style={styles.divider} />
          
          <ContactSection 
            phone={userData.phone}
            whatsapp={userData.whatsapp}
            email={userData.email}
          />
          
          <View style={styles.divider} />
          
          <SocialLinks 
            linkedin={userData.linkedin}
            instagram={userData.instagram}
          />
          
          <SaveContactButton userData={userData} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: SPACING.xl,
    paddingHorizontal: SPACING.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: COLORS.cardBackground,
    borderRadius: 16,
    ...Platform.select({
      web: {
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.08)',
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 5,
      },
    }),
    padding: SPACING.lg,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.divider,
    marginVertical: SPACING.lg,
    width: '100%',
  },
});