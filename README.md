# O Bigode Funileiro — versão 1.4

## Identidade visual e layout
- Usa o logotipo enviado pelo proprietário como logo do aplicativo e ícone PWA.
- Tema preto e dourado.
- Tela principal organizada em uma estrutura fixa: cabeçalho e barra inferior permanecem no lugar, e somente a área central rola, evitando a sensação de telas flutuantes.
- Login por e-mail/senha e recuperação de senha via Firebase Authentication.

## Publicação
1. Envie o conteúdo desta pasta para a raiz do repositório GitHub. O `index.html` deve ficar na raiz.
2. Pode publicar pelo GitHub Pages em Settings > Pages > Deploy from a branch > main > /(root).
3. No Firebase Console, Authentication > Settings/Configurações > Authorized domains, adicione o domínio exato do site publicado (por exemplo, `SEU-USUARIO.github.io`).
4. Teste o login e o link de recuperação por e-mail.

## Limitação importante
A autenticação usa Firebase Authentication, mas serviços, gastos, contas e saques ainda são armazenados no localStorage do navegador. Não há sincronização em nuvem com Firestore nesta versão. Faça backup regularmente e não use como única cópia dos registros financeiros.

A configuração web Firebase está no `index.html`. Não inclua credenciais de conta de serviço nem chaves privadas no navegador.
