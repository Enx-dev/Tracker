import { Status } from "@prisma/client";

export class StatusClass {
  stautsLabel: Status;
  constructor(data: Status) {
    this.stautsLabel = data;
  }

  get statusLabel() {
    return this.stautsLabel;
  }

  get getStatusColor() {
    switch (this.stautsLabel) {
      case Status.PENDING:
        return "text-yellow-500";
      case Status.COMPLETED:
        return "text-green-500";
      default:
        return "text-red-500";
        break;
    }
  }
}
