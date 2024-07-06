import { verifyToken } from "$lib/auth";
import pool from "$lib/db";
import { parse } from "cookie";

export async function GET({ request }) {
    const cookies = parse(request.headers.get('cookie') || '');
    const token = cookies.token;

    if (!token) {
        return new Response(JSON.stringify({ error: 'No token provided' }), { status: 401 });
    }

    try {
        
        const decoded = verifyToken(token);
        const userId = decoded.user.id;

        const connection = await pool.getConnection();
        const [rows] = await connection.execute(
            'SELECT * FROM residency WHERE applicantID = (SELECT applicantID FROM applicant WHERE userID = ?)',
            [userId]
        );
        connection.release();

        const user = rows;
        if (user) {
            return new Response(JSON.stringify({ user }), { status: 200 });
        } else {
            return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
        }

    } catch (error) {
        return new Response(JSON.stringify({ error: 'Invalid token' }), { status: 401 });
    }
}
