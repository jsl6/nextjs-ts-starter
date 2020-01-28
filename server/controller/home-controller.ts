import { Context } from 'koa';
import { homeService } from '../service';
import { getVal ,setVal } from '../common/redis-cli';

class HomeController {
  public static async index(ctx: Context) {
    ctx.logger.info('hi koa-next');
    ctx.status = 200;
    ctx.body = await homeService.sayHi('koa-next');
  }

  public static async test(ctx: Context) {
    ctx.status = 200;
    ctx.body = {
      success: true,
      result: {
        num: 5
      }
    };
  }

  public static async redis(ctx: Context) {
    // await setVal('abc', 123);
    const num = await getVal('abc');
    ctx.body = {
      success: true,
      result: {
        num
      }
    };
  }
}

export default HomeController;