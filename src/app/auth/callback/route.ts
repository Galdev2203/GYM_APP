import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
export async function GET(request:Request){const {searchParams,origin}=new URL(request.url);const code=searchParams.get("code");if(code){const store=await cookies();const supabase=createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,{cookies:{getAll:()=>store.getAll(),setAll:(values)=>values.forEach(({name,value,options})=>store.set(name,value,options))}});await supabase.auth.exchangeCodeForSession(code);}return NextResponse.redirect(`${origin}/`)}
