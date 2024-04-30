import conn from "./conn.js"

export async function getAllPosts() {
    const [rows] = await conn.query("SELECT * FROM posts;")
    return rows
}

export async function createPost(title, picture, description, points) {
    const [result] = await conn.query("INSERT INTO posts (title, picture, post_description, points) VALUES (?, ?, ?, ?);",
     [title, picture, description, points])
    return result
}

export async function deletePost(id) {
    await conn.query("DELETE FROM posts WHERE id = (?);", [id])
}

export async function getPost(id) {
    const[result] = await conn.query("SELECT * FROM posts WHERE id = (?)",
     [id])
    return result
}

export async function putPost(id, title, post_description, points) {
    const [result] = await conn.query("UPDATE posts SET title = (?), post_description = (?), points = (?) WHERE id = (?);",
     [title, post_description, points, id])
    return result
}

export async function verifyUser(email, password) {
    try {
        const [result] = await conn.query("SELECT * FROM users WHERE email = (?) AND password = (?)",
        [email, password]);
        console.log(result);
        return result;
        
    } catch (error) {
        console.error(error);
    }
}

export async function registerUser(name, email, password) {
    try {
        const [result] = await conn.query("INSERT INTO users (name, email, password) VALUES ((?), (?), (?))",
        [name, email, password])
    
        return result;
        
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return { success: false, message: 'El correo electrónico ya está registrado.' };
        } else {
            console.error('Error registering users', error);
            throw error;
        }
    }
}