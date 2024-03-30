import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserNotificationService } from "./userNotification.service";
import { UserNotificationGrpcControllerBase } from "./base/userNotification.grpc.controller.base";

@swagger.ApiTags("userNotifications")
@common.Controller("userNotifications")
export class UserNotificationGrpcController extends UserNotificationGrpcControllerBase {
  constructor(protected readonly service: UserNotificationService) {
    super(service);
  }
}
