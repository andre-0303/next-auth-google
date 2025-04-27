# Projeto de Autenticação com Google (Next.js + NextAuth)

Este projeto utiliza **Next.js** com **NextAuth** para implementar login via **Google**, com visualização de perfil e funcionalidade de logout.

## Funcionalidades

- **Login com Google** integrado usando OAuth 2.0.
- **Dashboard de Usuário** com nome, email e imagem de perfil.
- **Logout** para encerrar a sessão com segurança.

## Tecnologias Usadas

- Next.js
- NextAuth.js
- React
- Tailwind CSS

## Como Rodar o Projeto Localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd seu-repositorio
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Crie um arquivo `.env.local` e adicione suas credenciais do Google:
   ```
   GOOGLE_CLIENT_ID=SEU_CLIENT_ID
   GOOGLE_CLIENT_SECRET=SEU_CLIENT_SECRET
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=uma_chave_segura
   ```

5. Configure o domínio da imagem no `next.config.js`:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     images: {
       domains: ["lh3.googleusercontent.com"],
     },
   };

   export default nextConfig;
   ```

6. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

7. Acesse o projeto:
   ```
   http://localhost:3000
   ```

## Estrutura do Projeto

```
/app
  /api
    /auth
      [...nextauth]/route.ts
  /dashboard
    page.tsx
  /components
    LoginBtn.tsx
    LogoutBtn.tsx
/public
  g-icon.png
/styles
next.config.js
package.json
.env.local
```

## Observações

- As credenciais do Google devem ser geradas no [Google Cloud Console](https://console.cloud.google.com/).
- Certifique-se de adicionar o domínio `http://localhost:3000` como URI autorizada de redirecionamento.

## Licença

Este projeto está licenciado sob a licença MIT.

