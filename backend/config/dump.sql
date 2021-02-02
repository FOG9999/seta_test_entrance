--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: book; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.book (
    id integer NOT NULL,
    title character varying(50),
    numofpages integer,
    author character varying(30)
);


ALTER TABLE public.book OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying,
    name character varying,
    hashedpass character varying,
    token character varying
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: book; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.book (id, title, numofpages, author) FROM stdin;
2	Book 2	100	Author 2
3	Book 3	200	Author 3
1	Book 1	100	Author 0
9	Book 4	411	Author 5
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, name, hashedpass, token) FROM stdin;
1	username1	name1	$2a$10$MFqob4KqG6xJNyLOG5K3deQNHlN98Rl.onJ1P2cTtF4s1aBL2k8Q2	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lMSIsIm5hbWUiOiJuYW1lMSIsImlhdCI6MTYxMjI0NDU1MH0.o7R_HKeS1J5KPJwldY1XHb98bgz7JyE5uo_O4avMcWs
2	username2	name2	$2a$10$bC7EGmAL.cd9EXGsidSu/.Ps8jTRfx1d/sp0A/whEPyuL7319edYO	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lMiIsIm5hbWUiOiJuYW1lMiIsImlhdCI6MTYxMjI0NDU4Mn0.yYe8n4yK21Sh6DLEfJ5XF8XCcDJH21AhvK7A0X5Dxj0
3	username3	name3	$2a$10$2rHoS2mCDrM48infJOFQheQgRIuAG1Cdu6rDMu1siylYlgbMIAMUy	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lMyIsIm5hbWUiOiJuYW1lMyIsImlhdCI6MTYxMjI0NTcwOX0.ab9J4Dw8YusK9C_fVReY4hP6GuN3qPt5dWASIXmE6tA
\.


--
-- Name: book book_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book
    ADD CONSTRAINT book_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- PostgreSQL database dump complete
--

