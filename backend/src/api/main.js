import express from 'express'
import { getAllPosts, createPost, deletePost, getPost, putPost, verifyUser, registerUser } from '../api/dbs.js'
import cors from 'cors'

const app = express()
const port = 3000
app.use(express.json())

app.use(cors({
  origin: "http://localhost:5173"
}))

app.post('/admin/posts', async (req, res) => {
  const { title, picture, post_description, points } = req.body

  try {
    const post = await createPost(title, picture, post_description, points)
    res.status(201).json(post)
    
  } catch (error) {
    res.status(500).send("Error del servidor.")
    console.error(error)
  }
})

app.get('/user/posts', async (req, res) => {
  try {
    const posts = await getAllPosts()
    res.json(posts).status(200)
  } catch (error) {
    console.error(error)
    res.status(500).send("Error del servidor.")
  }
})

app.put('/admin/posts/:postId', async (req, res) => {
  const {postId} = req.params;
  const {title, post_description, points} = req.body;

  try {
    const post = await putPost(postId, title, post_description, points);
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error del servidor.");
  }
});

app.delete('/admin/posts/:postID', async (req, res) => {
  const {postID} = req.params
  try {
    await deletePost(postID)
    res.status(204).send("Eliminado con éxito.")
    
  } catch (error) {
    res.status(500).send("Error del servidor.")
    console.error(error)
  }
})

app.get('/user/posts/:postID', async (req, res) => {
  const { postID } = req.params
  try {
    const post = await getPost(postID)
    res.json(post).status(200)

  } catch (error) {
    res.status(500).send("Error del servidor.")
    console.error(error)
  } 
})

app.post('/user/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const verifiedUser = await verifyUser(email, password);
    res.status(200).json(verifiedUser);
  } catch (error) {
    res.status(500).json({ error: error });
  };
});

app.post('/user/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
      const registeredUser = await registerUser(name, email, password);
      res.status(201).json(registeredUser);

  } catch (error) {
    res.status(500).json({ error: error });
  }
});

async function unimplementedMethod(req, res) {
  if (req.method != "GET" && req.method != "POST" && req.method != "PUT" && req.method != "DELETE") {
    res.status(501).send("Método no implementado.")
  }
}

app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`)
})