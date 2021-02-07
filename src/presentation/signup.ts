import { MissignParamError } from './errors/missign-param-error'
import { badRequest } from './helpers/http-helper'
import { HttpRequest, HttpResponse } from './protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissignParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissignParamError('email'))
    }
  }
}
