CREATE TABLE IF NOT EXISTS addresses(
  id SERIAL PRIMARY KEY,
  shared VARCHAR(20),
  ip1 VARCHAR(20),
  time1 NUMERIC(25),
  ip2 VARCHAR(20),
  time2 NUMERIC(25)
)
