// Real-world photography, prioritized for local relevance to a Kenyan
// security company. Sourced from Unsplash under the Unsplash License (free
// for commercial use, no attribution required) — verified per-photo before
// inclusion. Nairobi building photography is credited to Cytonn Photography,
// a Nairobi-based real estate firm, so those images are genuinely local
// rather than generic international stock. Where a Kenya-specific photo
// wasn't available for a given role (e.g. QR scanning close-ups, control-room
// interiors), a neutral technology/operations photo is used instead and
// balanced elsewhere on the page with authentic Nairobi imagery.

export type SiteImage = {
  id: string;
  alt: string;
};

export function unsplashUrl(id: string, width: number, quality = 80) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

export const images = {
  // Nairobi, Kenya — establishing location and real local buildings
  nairobiSkylineGreen: {
    id: "1741991110666-88115e724741",
    alt: "Nairobi skyline on a sunny day, skyscrapers set among green trees",
  },
  nairobiSkylineDay: {
    id: "1611348524140-53c9a25263d6",
    alt: "Nairobi city skyline during the day",
  },
  nairobiResidentialEstate: {
    id: "1565953554309-d181306db7d5",
    alt: "A modern residential apartment development in Nairobi, Kenya",
  },
  nairobiOfficeBuilding: {
    id: "1565953522043-baea26b83b7e",
    alt: "A modern office building in Nairobi, Kenya",
  },
  nairobiProfessionalAtWork: {
    id: "1521790945508-bf2a36314e85",
    alt: "A professional working on a laptop in a Nairobi office",
  },

  // Security operations
  guardStanding: {
    id: "1485230405346-71acb9518d9c",
    alt: "Security guard standing watch at a property entrance",
  },
  guardPatrolStreet: {
    id: "1581568736305-49a04e012c13",
    alt: "Security officer on patrol during the day",
  },
  manualLogbook: {
    id: "1499010001488-d58fa63bdc05",
    alt: "Security officer writing notes by hand during a patrol",
  },

  // Verification technology
  qrScanPhone: {
    id: "1595079676601-f1adf5be5dee",
    alt: "Smartphone displaying a QR code ready to be scanned",
  },
  qrOnTablet: {
    id: "1595079834934-b78552e04b10",
    alt: "QR checkpoint code displayed on a tablet screen",
  },
  monitoringScreens: {
    id: "1652145595413-0a79398e5888",
    alt: "Room with multiple live monitoring screens and camera feeds",
  },
  controlRoomEquipment: {
    id: "1685720543547-cc4873188c75",
    alt: "Control room filled with monitoring and communications equipment",
  },
  controlRoomLights: {
    id: "1714596282575-82d224db8c70",
    alt: "Control room with multiple monitors and status indicator lights",
  },
  cctvCamera: {
    id: "1642606570507-ca8e13b8784d",
    alt: "A CCTV security camera mounted on the side of a building",
  },
  securityDog: {
    id: "1560111394-24b91a813cfa",
    alt: "A German Shepherd, a breed commonly used for security patrol work",
  },
} as const satisfies Record<string, SiteImage>;

export const serviceImageBySlug: Record<string, keyof typeof images> = {
  "manned-guarding": "guardStanding",
  "mobile-patrol": "guardPatrolStreet",
  "event-security": "qrScanPhone",
  "corporate-security-consultancy": "nairobiOfficeBuilding",
  "qr-patrol-system-integration": "qrOnTablet",
};
