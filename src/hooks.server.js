import { parse } from 'cookie';
import { verifyToken } from '$lib/auth';
import { redirect } from '@sveltejs/kit';

// const protectedRoutes = ['/main', '/protected1'];
const protectedRoutes = ['/main'];

export async function handle({ event, resolve }) {
  const cookies = parse(event.request.headers.get('cookie') || '');
  const token = cookies.token;
  const isProtectedRoute = protectedRoutes.some(route => event.url.pathname.startsWith(route));

  // to check if this shit is working
  console.log(token, isProtectedRoute, event.url.pathname);

  if (isProtectedRoute) {
    if (!token) {
      throw redirect(302, '/login');
    }

    try {
      const verified = verifyToken(token);
      event.locals.user = verified;
    } catch (err) {
      console.log(err);
      throw redirect(302, '/login');
    }
  }

  return await resolve(event);
}
