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