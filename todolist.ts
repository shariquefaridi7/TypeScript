import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Sample todo list
let todoList: { id: number; text: string }[] = [
  { id: 1, text: 'Buy groceries' },
  { id: 2, text: 'Finish project' },
  // Add more items here...
];

// Delete API
app.post('/delete', (req: Request, res: Response) => {
  const { id } = req.body;

  const index = todoList.findIndex((item) => item.id === id);

  if (index === -1) {
    res.status(404).json({ message: 'Item not found' });
  } else {
    todoList.splice(index, 1);
    res.status(200).json({ message: 'Item deleted successfully' });
  }
});

// Edit API
app.post('/edit', (req: Request, res: Response) => {
  const { id, newText } = req.body;

  const index = todoList.findIndex((item) => item.id === id);

  if (index === -1) {
    res.status(404).json({ message: 'Item not found' });
  } else {
    todoList[index].text = newText;
    res.status(200).json({ message: 'Item edited successfully' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
