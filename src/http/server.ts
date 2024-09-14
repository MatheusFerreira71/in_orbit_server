import fastify from 'fastify';
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod';
import { createGoalRoute } from './routes/create-goal.route';
import { createCompletionRoute } from './routes/create-completion.route';
import { getPendingGoalsRoute } from './routes/get-pending-goals.route';
import { getWeekSumaryRoute } from './routes/get-week-sumary.route';
import fastifyCors from '@fastify/cors';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: '*',
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createGoalRoute);
app.register(createCompletionRoute);
app.register(getPendingGoalsRoute);
app.register(getWeekSumaryRoute);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log(`HTTP server running on port ${3333}!`);
  });
