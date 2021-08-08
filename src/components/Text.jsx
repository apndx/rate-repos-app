import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  languageTab: {
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    padding: 2
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  heading: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textPrimary
  },
  description: {
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.textSecondary,
    flexWrap: 'wrap'
  },
  tab: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
    padding: theme.padding.small
  },
});

const Text = ({ color, fontSize, fontWeight, style, type, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    type === 'heading' && styles.heading,
    type === 'language' && styles.languageTab,
    type === 'description' && styles.description,
    type === 'tab' && styles.tab,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
