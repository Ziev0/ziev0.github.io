/**
 * Generates a vCard string from user data
 */
export function generateVCard(userData: {
  name: string;
  jobTitle: string;
  company: string;
  phone: string;
  email: string;
  linkedin?: string;
  instagram?: string;
}): string {
  const { name, jobTitle, company, phone, email, linkedin, instagram } = userData;
  
  // Split name into first and last name (simple approach)
  const nameParts = name.split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';
  
  // Format phone number (remove non-numeric characters for TEL)
  const formattedPhone = phone.replace(/[^0-9+]/g, '');
  
  // Build vCard
  let vCard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${lastName};${firstName};;;`,
    `FN:${name}`,
    `ORG:${company}`,
    `TITLE:${jobTitle}`,
    `TEL;TYPE=CELL:${formattedPhone}`,
    `EMAIL:${email}`,
  ];
  
  // Add social profiles if available
  if (linkedin) {
    vCard.push(`URL;TYPE=WORK:https://linkedin.com/in/${linkedin}`);
  }
  
  if (instagram) {
    vCard.push(`URL;TYPE=HOME:https://instagram.com/${instagram}`);
  }
  
  // End vCard
  vCard.push('END:VCARD');
  
  return vCard.join('\r\n');
}