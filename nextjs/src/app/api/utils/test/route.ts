
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const category = searchParams.get("category");
    const indredientId = searchParams.get("indredientId");
    return Response.json({ message: "TEST API OK searchParams: " + searchParams +  "   category:" + category + "   userId:" + userId + "   indredientId: " + indredientId });
  }
