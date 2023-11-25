// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      user?: {
        id: string;
        name: string;
        // ... other user properties
      }
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export { };
