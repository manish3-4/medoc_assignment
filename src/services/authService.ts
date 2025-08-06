import Agent from '../models/Agent';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export class AuthService {
  async register(name: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const agent = new Agent({ name, email, password: hashedPassword });
    await agent.save();
    return agent;
  }

  async login(email: string, password: string) {
    const agent = await Agent.findOne({ email });
    if (!agent) throw new Error('Agent not found');

    const isMatch = await bcrypt.compare(password, agent.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = jwt.sign({ id: agent._id }, JWT_SECRET, { expiresIn: '1h' });
    return { token, agent };
  }

  verifyToken(token: string) {
    return jwt.verify(token, JWT_SECRET);
  }
}
