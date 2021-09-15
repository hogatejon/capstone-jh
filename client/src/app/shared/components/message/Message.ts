export class Message {

  header: string;
  message: string;
  severity: string;
  timeout: number;

  constructor(header, message, severity?, timeout?) {
    this.header = header;
    this.message = message;
    this.severity = severity || 'info';
    this.timeout = timeout || 4000;
  }
}
