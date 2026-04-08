export const MENNIE_NAME = "Mennie";
export const MENNIE_FULL_NAME =
  "Medical Empowerment and Neural Navigation Intelligence Engine";
export const MENNIE_ROUTE = "/healthmate";
export const MENNIE_TEASER_VIDEO = "/videos/mennie-teaser.mp4";
export const MENNIE_WAITLIST_LABEL = `Join ${MENNIE_NAME} Waitlist`;
export const MENNIE_LEGAL_LABEL = `${MENNIE_NAME} Terms`;
export const MENNIE_PRIVACY_LABEL = `${MENNIE_NAME} Privacy`;

export function renameHealthMateReferences(value: string) {
  return value.replace(/HealthMate/g, MENNIE_NAME).replace(/healthmate/g, MENNIE_NAME.toLowerCase());
}
