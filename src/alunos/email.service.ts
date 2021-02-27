import {Injectable} from '@nestjs/common';
const sendgrid = require('sendgrid');

@Injectable()
export class EmailService {

  sendgrid: any;
  from: string;

  constructor(
  ) {
    this.sendgrid = sendgrid(process.env.SENDGRID_API_KEY);
    this.from = 'gustavo@dicasdeprogramacao.com.br';
  }

  enviar(to: string, subject: string, body: string) {
    var request = this.sendgrid.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: {
        personalizations: [
          {
            to: [
              {
                email: to
              }
            ],
            subject: subject
          }
        ],
        from: {
          email: this.from
        },
        content: [
          {
            type: 'text/html',
            value: body
          }
        ]
      }
    });

    // With promise
    this.sendgrid.API(request)
        .then(function (response) {
          console.log(response.statusCode);
          console.log(response.body);
          console.log(response.headers);
        })
        .catch(function (error) {
          // error is an instance of SendGridError
          // The full response is attached to error.response
          console.log(error.response.statusCode);
        });
  }

}
