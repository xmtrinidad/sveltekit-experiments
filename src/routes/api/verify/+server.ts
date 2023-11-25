import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = ({ request, locals }) => {

  // console.log(request);

  return json({ thing: 'test' });
};