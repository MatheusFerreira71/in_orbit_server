import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { getWeekPendingGoals } from '../../services/get-week-pending-goals';

export const getPendingGoalsRoute: FastifyPluginAsyncZod = async app => {
  app.get('/pending-goals', async (_, res) => {
    const { pendingGoals } = await getWeekPendingGoals();

    return res.send(pendingGoals);
  });
};
