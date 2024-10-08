import { client, db } from '.';
import { goalCompletions, goals } from './schema';

async function seed() {
  await db.delete(goalCompletions);
  await db.delete(goals);

  const result = await db
    .insert(goals)
    .values([
      {
        title: 'Acordar cedo',
        desiredWeeklyFrequency: 5,
      },
      {
        title: 'Me exercitar',
        desiredWeeklyFrequency: 3,
      },
      {
        title: 'Meditar',
        desiredWeeklyFrequency: 1,
      },
    ])
    .returning();

  await db
    .insert(goalCompletions)
    .values([{ goalId: result[0].id }, { goalId: result[1].id }]);
}

seed().finally(() => {
  client.end();
});
