import { NextRequest } from "next/server";


export async function POST(req: NextRequest){
    try{
        const { email, password, confirmPassword, secret } = await req.json();

        

    }catch(e){
        console.log(e);
        return Response.json({ msg: "Internal Server Error", success: false })
    }
}