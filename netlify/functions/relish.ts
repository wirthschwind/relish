import type { Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
  let response;
  const body = await req.formData();
  
console.log('response:', {email: body.get("ai"), password: body.get("pr")})
  switch(req?.method){
    case "POST":
      response = new Response(JSON.stringify({email: body.get("ai"), password: body.get("pr"), context}))
      break;
    case "GET":
      response = new Response("Get method")
      break;
    default:
      response  = new Response("Default");
      break;
  }
  return response;
}

