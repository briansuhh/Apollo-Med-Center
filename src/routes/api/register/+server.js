import bcrypt from 'bcryptjs';
import pool from '$lib/db';

export async function POST({ request }) {
    const { name, email, password } = await request.json();

    const hashedPassword = bcrypt.hashSync(password, 10);

    const connection = await pool.getConnection();

    try {
        // i should check if the email already exists
        const [rows] = await connection.execute(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );

        if (rows.length > 0) {
            connection.release();
            return new Response(JSON.stringify({ error: 'Email already exists' }), { status: 400 });
        } else {
            const [results] = await connection.execute(
                'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
                [name, email, hashedPassword]
            );
            connection.release();
            return new Response(JSON.stringify({ message: 'User registered successfully' }), { status: 201 });
        }

    } catch (error) {
        connection.release();
        return new Response(JSON.stringify({ error: 'Failed to register user' }), { status: 500 });
    }
}
