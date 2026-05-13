import * as admin from "firebase-admin";

const MOCK_FIREBASE = process.env.NODE_ENV === "production" && !process.env.FIREBASE_PROJECT_ID;

if (!admin.apps.length && !MOCK_FIREBASE) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID || "mock-project",
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL || "mock@mock-project.iam.gserviceaccount.com",
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n") || "-----BEGIN PRIVATE KEY-----\nMOCK\n-----END PRIVATE KEY-----\n",
      }),
    });
  } catch (error) {
    console.error("Firebase admin initialization error", error);
  }
}

// Fallback mock db methods when building on Vercel without environment variables
export const db = MOCK_FIREBASE ? {
  collection: (collectionName: string) => ({
    get: async () => ({ docs: [] }),
    add: async () => ({ id: "mock-id" }),
    doc: (id: string) => ({
      update: async () => {},
      delete: async () => {},
    })
  })
} as any : admin.firestore();
