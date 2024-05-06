import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	console.log("========| Middleware Running |========");
	console.log("=> Request URL: ", request.url);
	console.log("=> Request Method: ", request.method);

	const cookies = request.cookies;
	
	const session = cookies.get("authjs.session-token");
	console.log("=> Session: ", session);
	

	if (!session) {
		return NextResponse.redirect(new URL("/login", request.url).toString());
	}else{
		return NextResponse.redirect(new URL("/", request.url).toString());
	}
}

// multiple middleware
export const config = {
	matcher: ["/myshop",'/add',"/edit",'/delete','/logout'],
};