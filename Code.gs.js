// Code.gs

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function delegateAccess(senderEmail, delegateEmail) {
  try {
    var service = getService(senderEmail);
    if (!service.hasAccess()) {
      return 'Erro: Acesso não autorizado. Verifique as permissões.';
    }

    var url = 'https://www.googleapis.com/gmail/v1/users/' + senderEmail + '/settings/delegates';
    var payload = {
      'delegateEmail': delegateEmail
    };

    var options = {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload),
      headers: {
        Authorization: 'Bearer ' + service.getAccessToken()
      },
      muteHttpExceptions: true
    };

    var response = UrlFetchApp.fetch(url, options);
    var result = JSON.parse(response.getContentText());

    if (response.getResponseCode() === 200) {
      return 'Delegação realizada com sucesso.';
    } else {
      return 'Erro ao delegar acesso: ' + result.error.message;
    }
  } catch (error) {
    return 'Erro inesperado: ' + error.message;
  }
}

function getService(userEmail) {
  return OAuth2.createService('Gmail:' + userEmail)
    .setTokenUrl('https://oauth2.googleapis.com/token')
    .setPrivateKey(PRIVATE_KEY)
    .setIssuer(CLIENT_EMAIL)
    .setSubject(userEmail)
    .setPropertyStore(PropertiesService.getScriptProperties())
    .setScope('https://www.googleapis.com/auth/gmail.settings.sharing');
}
