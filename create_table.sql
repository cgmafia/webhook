CREATE TABLE IF NOT EXISTS record (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  r_id VARCHAR,
  r_action VARCHAR,
  r_entity_type VARCHAR,
  r_time VARCHAR,
  r_modified_fields VARCHAR,
  r_name VARCHAR,
  r_file_type VARCHAR,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);
