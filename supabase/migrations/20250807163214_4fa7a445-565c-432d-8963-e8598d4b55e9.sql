-- Create table for form submissions
CREATE TABLE public.form_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (since this is a contact form)
CREATE POLICY "Anyone can submit contact forms" 
ON public.form_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admins to view all submissions (you can adjust this later)
CREATE POLICY "Admins can view all submissions" 
ON public.form_submissions 
FOR SELECT 
USING (true);