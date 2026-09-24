# VetorTécnica SaaS

Painel responsivo para gestão de clientes, ordens de serviço, equipes, checklists e laudos de vistoria.

## Publicar

Este protótipo é estático e pode ser publicado na Vercel conectando este repositório. Para ativar dados reais, crie um projeto Supabase, execute `supabase/schema.sql` e configure as variáveis de `.env.example`.

O esquema já inclui organizações, perfis, clientes, ordens, checklist e políticas RLS por organização. Nunca exponha a chave `service_role` no navegador.
