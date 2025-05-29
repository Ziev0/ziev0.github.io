// Color palette
export const COLORS = {
  primary: '#0075FF',
  primaryDark: '#0066E0',
  secondary: '#8E8E93',
  accent: '#FF3B30',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF2D55',
  
  // Text colors
  text: '#000000',
  textSecondary: '#6E6E73',
  textTertiary: '#8E8E93',
  
  // Background colors
  background: '#F2F2F7',
  cardBackground: '#FFFFFF',
  buttonBackground: '#F5F5F7',
  buttonBackgroundHover: '#EBEBF0',
  
  // Utility colors
  divider: '#E5E5EA',
  white: '#FFFFFF',
  black: '#000000',
  
  // Social colors
  linkedin: '#0077B5',
  instagram: '#E4405F',
};

// Spacing system (based on 8px)
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Typography
export const TYPOGRAPHY = {
  h1: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.5,
    color: COLORS.text,
  },
  h2: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    lineHeight: 28,
    color: COLORS.text,
  },
  h3: {
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    lineHeight: 24,
    color: COLORS.text,
  },
  body: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.text,
  },
  button: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.textSecondary,
  },
};