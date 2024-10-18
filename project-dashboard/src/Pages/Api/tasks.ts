import { NextApiRequest, NextApiResponse } from 'next';
import { Task } from '@/Utils/types';

let tasks: Task[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(tasks);
  } else if (req.method === 'POST') {
    const newTask: Task = req.body; 
    tasks.push(newTask);
    res.status(201).json(newTask);
  }
}
