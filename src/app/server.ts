import { app } from "./app";
import { serve } from 'bun';

serve({
  fetch: app.fetch,
  port: 3000,
});

console.log('🚀 Server running on http://localhost:3000');
