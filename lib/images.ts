// Real-world photography, prioritized for local relevance to a Kenyan
// security company. Sourced from Unsplash under the Unsplash License (free
// for commercial use, no attribution required), verified per-photo before
// inclusion. Nairobi building photography is credited to Cytonn Photography,
// a Nairobi-based real estate firm, so those images are genuinely local
// rather than generic international stock.
//
// Per client request, no photography with people in it is used anywhere on
// the site (this previously included guard/patrol/logbook photos, all now
// removed). Every image below is either a Nairobi building/skyline or a
// piece of security/verification equipment (QR devices, cameras, control-room
// screens), no faces, no staged "stock people" shots.

export type SiteImage = {
  id: string;
  alt: string;
};

export function unsplashUrl(id: string, width: number, quality = 80) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

export const images = {
  // Nairobi, Kenya, establishing location and real local buildings
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

  // Verification technology and security infrastructure, no people, by
  // client request
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
  barrierGate: {
    id: "1765710475256-1708882da66e",
    alt: "A barrier gate with red and yellow bollards controlling entry to a site",
  },
  nightStreet: {
    id: "1635971306100-100ebf38dfff",
    alt: "An empty street at night lit by streetlights, an unattended route to patrol",
  },
  emptyEventStage: {
    id: "1576514129883-2f1d47a65da6",
    alt: "An empty stage set up with production lighting ahead of an event",
  },
} as const satisfies Record<string, SiteImage>;

export const serviceImageBySlug: Record<string, keyof typeof images> = {
  "manned-guarding": "barrierGate",
  "mobile-patrol": "nightStreet",
  "event-security": "emptyEventStage",
  "corporate-security-consultancy": "nairobiOfficeBuilding",
  "qr-patrol-system-integration": "qrScanPhone",
};
