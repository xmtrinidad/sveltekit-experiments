import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ fetch, locals }) => {
  const verifyUser = fetch('/api/verify');

  console.log(locals);
};