import pg from "pg";

const client = new pg.Client({
  connectionString: "postgresql://postgres:nuyORKepukjHQWOM@db.qbgqkelarxrrifrydxvt.supabase.co:5432/postgres",
  ssl: { rejectUnauthorized: false },
});

const sql = `
-- User profiles
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  full_name text,
  country text default 'PH',
  plan text default 'free',
  tests_used_this_month int default 0,
  created_at timestamptz default now()
);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Test attempts
create table if not exists public.test_attempts (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  exam text,
  test_id text,
  score int,
  total int,
  band numeric(3,1),
  time_taken text,
  result_json jsonb,
  created_at timestamptz default now()
);

-- Row Level Security
alter table public.profiles enable row level security;
alter table public.test_attempts enable row level security;

drop policy if exists "Users can view own profile" on public.profiles;
create policy "Users can view own profile"
  on public.profiles for select using (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
  on public.profiles for update using (auth.uid() = id);

drop policy if exists "Users can view own attempts" on public.test_attempts;
create policy "Users can view own attempts"
  on public.test_attempts for select using (auth.uid() = user_id);

drop policy if exists "Users can insert own attempts" on public.test_attempts;
create policy "Users can insert own attempts"
  on public.test_attempts for insert with check (auth.uid() = user_id);
`;

await client.connect();
console.log("Connected to Supabase database.");
await client.query(sql);
console.log("✓ Tables created.");
console.log("✓ Trigger created.");
console.log("✓ RLS policies applied.");
await client.end();
console.log("\nDatabase setup complete!");
