export class SignUpController {
  handle (httpResquest: any): any {
    return { statusCode: 400, body: new Error('Missign param: name') }
  }
}
