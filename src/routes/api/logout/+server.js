export async function POST() {
    return new Response(JSON.stringify({ message: 'Logout successful' }), {
        status: 200,
        headers: {
            'Set-Cookie': `token=; Path=/; HttpOnly; Max-Age=0;`,
            'Content-Type': 'application/json'
        }
    });
}