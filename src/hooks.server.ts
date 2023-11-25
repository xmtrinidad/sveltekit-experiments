import type { Handle } from '@sveltejs/kit';


// Define a User type according to your needs
interface User {
  id: string;
  name: string;
  // Add more user properties as needed
}

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.user = {
    id: '123',
    name: 'Test User',
  }

  const response = await resolve(event);

  return response;
};
