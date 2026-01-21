# Delegação de Acesso ao Gmail com Google Apps Script

Este projeto permite delegar o acesso a uma conta do Gmail para outro usuário utilizando Google Apps Script e uma conta de serviço (Service Account). Isso é útil para automatizar a concessão de permissões de acesso a caixas de entrada de e-mail dentro de uma organização.

![alt text](image.png)

## Funcionalidades

- Interface web para inserir e-mails do remetente e do delegado.
- Script que utiliza uma conta de serviço para conceder acesso delegado ao Gmail.
- Utilização de credenciais seguras armazenadas no script.

## Como Funciona

1. **Interface Web**: Um formulário HTML (`index.html`) coleta os e-mails do remetente e do delegado.
2. **Script do Google Apps**: O arquivo `code.gs` processa os dados do formulário e utiliza a conta de serviço para conceder o acesso delegado.
3. **Credenciais**: As credenciais da conta de serviço são armazenadas em `credentials.gs` e utilizadas para autenticação.

## Configuração

### 1. Criar uma Conta de Serviço

1. Acesse o [Console do Google Cloud](https://console.cloud.google.com/).
2. Crie um novo projeto ou selecione um existente.
3. Navegue até **IAM & Admin > Contas de serviço**.
4. Clique em **Criar conta de serviço**.
5. Forneça um nome e uma descrição para a conta.
6. Conclua a criação sem atribuir funções adicionais.
7. Após criada, vá para a conta de serviço e clique em **Chaves > Adicionar chave > Criar nova chave**.
8. Selecione o formato **JSON** e clique em **Criar**.
9. Salve o arquivo JSON em um local seguro.

### 2. Ativar Delegação em Toda a Conta (Domain-Wide Delegation)

1. No Console do Google Cloud, vá para a conta de serviço criada.
2. Clique em **Mostrar painel**.
3. Marque a opção **Ativar delegação em toda a conta**.
4. Anote o **ID do cliente** exibido.

### 3. Autorizar a Conta de Serviço no Admin Console

1. Acesse o [Admin Console do Google](https://admin.google.com/).
2. Navegue até **Segurança > Controles de API > Gerenciar acesso de cliente à API**.
3. Clique em **Adicionar novo**.
4. Insira o **ID do cliente** anotado anteriormente.
5. No campo de escopos, insira: `https://www.googleapis.com/auth/gmail.settings.sharing`
6. Clique em **Autorizar**.



### 4. Configurar o Projeto no Google Apps Script

1. Crie um novo projeto no [Google Apps Script](https://script.google.com/).
2. Adicione os seguintes arquivos:
   - `code.gs`: Contém a lógica para delegar o acesso.
   - `credentials.gs`: Armazena as credenciais da conta de serviço.
   - `index.html`: Interface web para entrada de dados.
3. No `credentials.gs`, insira as informações da conta de serviço:

   ```javascript
   var CLIENT_EMAIL = 'seu-email-da-conta-de-serviço@seu-projeto.iam.gserviceaccount.com';

   var PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----
   SUA_CHAVE_PRIVADA_AQUI
   -----END PRIVATE KEY-----`;
   
### 5. Libera o Auth2 na conta de e-mail que criou no Google Cloud 
 1. Entra na conta que precisa liberar
 2. vai em contas de serviço
 3. configurações avançadas e ativa o Auth2


### 6 Ativações 

1. Ativar a delegação no google admin
2. Ir no Google Cloud e ativar API do gmail
3. Adicionar em Serviços a API Gmail


### 7 Adicionar a biblioteca do Auth2 e API do Gmail

1. ID: 1B7FSrk5Zi6L1rSxxTDgDEUsPzlukDsi4KGuTMorsTQHhGBzBkMun4iDF
2. Ir no Google Cloud e ativar API do gmail
3. Adicionar em Serviços a API Gmail


### 8 Ativar delegacao das contas dos usuarios no google admin

1. apps/google workspace/gmail
2. Ir no configuração de usuario
3. delegação de e-mail
https://admin.google.com/ac/apps/gmail/usersettings
