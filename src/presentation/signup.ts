import { MissignParamError } from './errors/missign-param-error'
import { HttpRequest, HttpResponse } from './protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return { statusCode: 400, body: new MissignParamError('name') }
    }
    if (!httpRequest.body.email) {
      return { statusCode: 400, body: new MissignParamError('email') }
    }
  }
}
