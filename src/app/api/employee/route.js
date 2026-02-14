import { employee } from "@/db/db";
import { NextResponse } from "next/server";

// This is the API route for fetching employee

export const GET = () => {
    const data = employee;
    return NextResponse.json(data,{status: 200})
}