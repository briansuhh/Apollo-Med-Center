import bcrypt from 'bcryptjs';
import { generateToken } from '$lib/auth';
import pool from '$lib/db';

export async function POST({ request }) {
    const { email, password } = await request.json();

    const connection = await pool.getConnection();

    try {
        const [rows] = await connection.execute(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );
        connection.release();

        const user = rows[0];
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken({ user });
            return new Response(JSON.stringify({ message: 'Login successful' }), {
                status: 200,
                headers: {
                'Set-Cookie': `token=${token}; Path=/; HttpOnly`
                }
            });
        } else {
            return new Response(JSON.stringify({ error: 'Invalid email or password' }), { status: 401 });
        }
    } catch (error) {
        connection.release();
        return new Response(JSON.stringify({ error: 'Failed to retrieve user' }), { status: 500 });
    }
}
