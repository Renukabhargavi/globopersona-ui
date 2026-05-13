import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/admin";

export async function GET() {
  try {
    const snapshot = await db.collection("campaigns").orderBy("createdAt", "desc").get();
    const campaigns = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    // Fallback if no data in firestore
    if (campaigns.length === 0) {
      return NextResponse.json([
        { id: "1", name: "Summer Sale 2026", status: "Active", sent: "12,000", clicks: "3,400", date: "May 13, 2026" },
        { id: "2", name: "Welcome Series Flow", status: "Completed", sent: "5,430", clicks: "1,200", date: "May 10, 2026" }
      ]);
    }

    return NextResponse.json(campaigns);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch campaigns" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const docRef = await db.collection("campaigns").add({
      ...data,
      status: "Draft",
      sent: "-",
      clicks: "-",
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      createdAt: new Date().toISOString()
    });
    
    return NextResponse.json({ id: docRef.id, ...data }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create campaign" }, { status: 500 });
  }
}
