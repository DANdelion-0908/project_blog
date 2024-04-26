import express from 'express'
import { getAllPosts, createPost, deletePost, getPost, putPost } from './dbs.js'
import cors from 'cors'

const app = express()
const port = 3000
app.use(express.json())

app.use(cors({
  origin: "http://localhost:8080"
}))

app.post('/posts', async (req, res) => {
  const { title, picture, post_description, points } = req.body

  try {
    const post = await createPost(title, picture, post_description, points)
    res.status(201).json(post)
    
  } catch (error) {
    res.status(500).send("Error del servidor.")
    console.error(error)
  }
})

app.get('/posts', async (req, res) => {
  try {
    const posts = await getAllPosts()
    res.json(posts).status(200)
  } catch (error) {
    console.error(error)
    res.status(500).send("Error del servidor.")
  }
})

app.put('/posts/:postId', async (req, res) => {
  const {postId} = req.params;
  const {title, picture, post_description, points} = req.body;

  try {
    const post = await putPost(postId, title, picture, post_description, points);
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error del servidor.");
  }
});

app.delete('/posts/:postID', async (req, res) => {
  const {postID} = req.params
  try {
    await deletePost(postID)
    res.status(204).send("Eliminado con éxito.")
    
  } catch (error) {
    res.status(500).send("Error del servidor.")
    console.error(error)
  }
})

app.get('/posts/:postID', async (req, res) => {
  const { postID } = req.params
  try {
    const post = await getPost(postID)
    res.json(post).status(200)

  } catch (error) {
    res.status(500).send("Error del servidor.")
    console.error(error)
  } 
})

async function unimplementedMethod(req, res) {
  if (req.method != "GET" && req.method != "POST" && req.method != "PUT" && req.method != "DELETE") {
    res.status(501).send("Método no implementado.")
  }
}

app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`)
})