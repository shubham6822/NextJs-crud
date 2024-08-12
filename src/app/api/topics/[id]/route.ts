import connectMogoDB from "@/libs/mongodb";
import Topic from "@/models/topicModel";
import { NextRequest, NextResponse } from "next/server";

// PATCH method is used to update a topic
export async function PATCH(req: NextRequest, { params }: { params: any }) {
    const { id } = params;
    const { title, description } = await req.json();
    await connectMogoDB();
    await Topic.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Topic updated successfully" }, { status: 200 });
}

// GET method is used to fetch a single topic
export async function GET(req: NextRequest, { params }: { params: any }) {
    const { id } = params;
    await connectMogoDB();
    const topic = await Topic.findOne({ _id: id });
    return NextResponse.json(topic);
}