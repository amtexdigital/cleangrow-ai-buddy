DROP POLICY IF EXISTS "Anyone can submit an application" ON public.contact_submissions;
REVOKE ALL ON public.contact_submissions FROM anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;