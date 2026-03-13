CREATE TABLE posts (
  id integer GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL,
  title text NOT NULL,
  author text NOT NULL,
  content text NOT NULL,
  image text,
  CONSTRAINT posts_pkey PRIMARY KEY (id)
);
CREATE TABLE comments (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  post_id bigint NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  author text NOT NULL DEFAULT 'guest_user'::text,
  content text NOT NULL,
  CONSTRAINT comments_pkey PRIMARY KEY (id),
  CONSTRAINT comments_post_id_fkey FOREIGN KEY (post_id) REFERENCES posts(id)
);