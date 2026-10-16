# O Bigode Funileiro — Firebase Authentication

Esta versão adiciona login por e-mail/senha e recuperação de senha por e-mail usando Firebase Authentication.

## Antes de usar
1. No Firebase Console, confirme Authentication > Método de login > E-mail/senha ativado.
2. Em Authentication > Usuários, adicione o e-mail do proprietário com uma senha inicial.
3. Em Authentication > Configurações, confira os domínios autorizados para o ambiente onde publicará o app (por exemplo, o domínio do Firebase Hosting).
4. Publique por HTTPS. A autenticação não funciona corretamente ao abrir o arquivo diretamente como file://.
5. Teste “Esqueci minha senha” e confira a caixa de entrada e spam.

## Importante sobre os dados
O login é autenticado pelo Firebase, mas os serviços, gastos, contas e saques continuam armazenados no localStorage do navegador/dispositivo. Esta versão ainda não sincroniza dados com Firestore e não transfere dados entre dispositivos. Faça backup antes de mudar de dispositivo ou limpar os dados do navegador.

A configuração web do Firebase está inserida no index.html. Não coloque credenciais de conta de serviço ou chaves privadas no navegador.
