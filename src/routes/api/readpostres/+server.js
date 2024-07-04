import { verifyToken } from "$lib/auth";
import pool from "$lib/db";

export async function GET({ request }) {
    const token = request.headers.get('cookie')?.split('token=')[1];
    if (!token) {
        return new Response(JSON.stringify({ error: 'No token provided' }), { status: 401 });
    }

    try {
        
        const decoded = verifyToken(token);
        const userId = decoded.user.id;

        const connection = await pool.getConnection();
        const [rows] = await connection.execute(
            'SELECT * FROM postresidency'
        );
        connection.release();

        const user = rows[0];
        if (user) {
            return new Response(JSON.stringify({ user }), { status: 200 });
        } else {
            return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
        }

    } catch (error) {
        return new Response(JSON.stringify({ error: 'Invalid token' }), { status: 401 });
    }
}
