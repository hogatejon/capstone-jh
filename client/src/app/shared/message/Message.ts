export class Message {

  header: string;
  message: string;
  style: string;
  dismissed: boolean = false;

  constructor(header, message, style?) {
    this.header = header;
    this.message = message;
    this.style = style || 'info';
  }
}
