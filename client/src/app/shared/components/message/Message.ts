export class Message {

  header: string;
  message: string;
  style: string;
  timeout: number;

  constructor(header, message, style?, timeout?) {
    this.header = header;
    this.message = message;
    this.style = style || 'info';
    this.timeout = timeout || 4000;
  }
}
