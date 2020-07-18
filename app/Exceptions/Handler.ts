import ExceptionHandler from "../../vendor/Foundation/Http/Exceptions/mod.ts";

export default class Handler extends ExceptionHandler {
  /**
   *
   *
   * @param {number} exception
   * @memberof Handler
   */
  report(exception: number) {
    super.report(exception);
  }

  /**
   *
   *
   * @param {any} request
   * @param {number} exception
   * @memberof Handler
   */
  render(request: any, exception: number) {
    super.render(request, exception);
  }
}
