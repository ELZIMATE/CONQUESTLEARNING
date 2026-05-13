# ToDoList 400 Error Notes

Issue to fix later: adding list data from `src/components/ToDoList.jsx` is returning a 400 from Supabase.

Likely failing call:

```js
supabase
  .from("daily_logs")
  .upsert([thing], { onConflict: "user_id, date" })
```

The object sent from `Listadd()` looks like:

```js
{
  date: selectedDate,
  user_id: user.id,
  ToDos: [
    { task, complete, priority, type }
  ]
}
```

Things to check:

1. `daily_logs` needs a unique constraint on `user_id` and `date` for the upsert conflict target.
2. Try changing `onConflict: "user_id, date"` to `onConflict: "user_id,date"`.
3. Confirm the Supabase column is actually named `ToDos` with that exact capitalization.
4. Confirm `ToDos` is a JSON/JSONB column so it can store an array of task objects.
5. The `Routines` table does not currently have a `tasks` column. Saving a Routine task with `{ user_id, tasks: [...] }` will cause a Supabase 400 until that column exists.

Plain-English summary:

The frontend is asking Supabase to insert or update the daily log for one user on one date. A 400 usually means the table does not match the request shape, or Supabase cannot find a matching unique rule for the upsert.
