import * as graphql from "@nestjs/graphql";
import { CompanyRecognitionResolverBase } from "./base/companyRecognition.resolver.base";
import { CompanyRecognition } from "./base/CompanyRecognition";
import { CompanyRecognitionService } from "./companyRecognition.service";

@graphql.Resolver(() => CompanyRecognition)
export class CompanyRecognitionResolver extends CompanyRecognitionResolverBase {
  constructor(protected readonly service: CompanyRecognitionService) {
    super(service);
  }
}
