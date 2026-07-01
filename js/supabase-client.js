// Configuração e Inicialização do Cliente Supabase
const SUPABASE_URL = 'https://nflzoccdqswwwlezkssi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mbHpvY2NkcXN3d3dsZXprc3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4MDM4ODEsImV4cCI6MjA4NzM3OTg4MX0.scpbg54YIqbTM2gBHl25eCyejKuaWZOGGlK-j1tr7nQ';

// O objeto window.supabase é fornecido pelo CDN importado no index.html
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
