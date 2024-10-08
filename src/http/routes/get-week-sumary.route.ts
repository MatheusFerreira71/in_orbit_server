import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { getWeekSumary } from '../../services/get-week-sumary';

export const getWeekSumaryRoute: FastifyPluginAsyncZod = async app => {
  app.get('/summary', async (_, res) => {
    const { sumary } = await getWeekSumary();

    return res.send(sumary);
  });
};
