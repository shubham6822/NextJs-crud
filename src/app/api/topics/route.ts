import connectMogoDB from "@/libs/mongodb";
import Topic from "@/models/topicModel";
import { NextRequest, NextResponse } from "next/server";

// POST method is used to create a topic
export async function POST(req: NextRequest) {
    const { title, description } = await req.json();
    await connectMogoDB();
    await Topic.create({ title, description });
    return NextResponse.json({ message: "Topic created successfully" }, { status: 201 });
}

// GET method is used to fetch all topics
export async function GET() {
    await connectMogoDB();
    const topics = await Topic.find();
    return NextResponse.json(topics);
}

// DELETE method is used to delete a topic
export async function DELETE(req: NextRequest) {
    const id = req.nextUrl.searchParams.get("id");
    await connectMogoDB();
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({ message: "Topic deleted successfully" }, { status: 200 });
}