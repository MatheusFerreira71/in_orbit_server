import { z } from 'zod';
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { createGoal } from '../../services/create-goal';

export const createGoalRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/goals',
    {
      schema: {
        body: z.object({
          title: z.string(),
          desiredWeeklyFrequency: z.number().int().min(1).max(7),
        }),
      },
    },
    async (req, res) => {
      const { desiredWeeklyFrequency, title } = req.body;

      const { goal } = await createGoal({
        title,
        desiredWeeklyFrequency,
      });

      return res.send(goal);
    }
  );
};
