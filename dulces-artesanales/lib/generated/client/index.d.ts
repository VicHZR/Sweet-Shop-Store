
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Dulce
 * 
 */
export type Dulce = $Result.DefaultSelection<Prisma.$DulcePayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model CierreDiario
 * 
 */
export type CierreDiario = $Result.DefaultSelection<Prisma.$CierreDiarioPayload>
/**
 * Model CierreSemanal
 * 
 */
export type CierreSemanal = $Result.DefaultSelection<Prisma.$CierreSemanalPayload>
/**
 * Model CierreMensual
 * 
 */
export type CierreMensual = $Result.DefaultSelection<Prisma.$CierreMensualPayload>
/**
 * Model BannerOferta
 * 
 */
export type BannerOferta = $Result.DefaultSelection<Prisma.$BannerOfertaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Dulces
 * const dulces = await prisma.dulce.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Dulces
   * const dulces = await prisma.dulce.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.dulce`: Exposes CRUD operations for the **Dulce** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dulces
    * const dulces = await prisma.dulce.findMany()
    * ```
    */
  get dulce(): Prisma.DulceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cierreDiario`: Exposes CRUD operations for the **CierreDiario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CierreDiarios
    * const cierreDiarios = await prisma.cierreDiario.findMany()
    * ```
    */
  get cierreDiario(): Prisma.CierreDiarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cierreSemanal`: Exposes CRUD operations for the **CierreSemanal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CierreSemanals
    * const cierreSemanals = await prisma.cierreSemanal.findMany()
    * ```
    */
  get cierreSemanal(): Prisma.CierreSemanalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cierreMensual`: Exposes CRUD operations for the **CierreMensual** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CierreMensuals
    * const cierreMensuals = await prisma.cierreMensual.findMany()
    * ```
    */
  get cierreMensual(): Prisma.CierreMensualDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bannerOferta`: Exposes CRUD operations for the **BannerOferta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BannerOfertas
    * const bannerOfertas = await prisma.bannerOferta.findMany()
    * ```
    */
  get bannerOferta(): Prisma.BannerOfertaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Dulce: 'Dulce',
    Pedido: 'Pedido',
    CierreDiario: 'CierreDiario',
    CierreSemanal: 'CierreSemanal',
    CierreMensual: 'CierreMensual',
    BannerOferta: 'BannerOferta'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "dulce" | "pedido" | "cierreDiario" | "cierreSemanal" | "cierreMensual" | "bannerOferta"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Dulce: {
        payload: Prisma.$DulcePayload<ExtArgs>
        fields: Prisma.DulceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DulceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DulcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DulceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DulcePayload>
          }
          findFirst: {
            args: Prisma.DulceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DulcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DulceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DulcePayload>
          }
          findMany: {
            args: Prisma.DulceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DulcePayload>[]
          }
          create: {
            args: Prisma.DulceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DulcePayload>
          }
          createMany: {
            args: Prisma.DulceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DulceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DulcePayload>[]
          }
          delete: {
            args: Prisma.DulceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DulcePayload>
          }
          update: {
            args: Prisma.DulceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DulcePayload>
          }
          deleteMany: {
            args: Prisma.DulceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DulceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DulceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DulcePayload>[]
          }
          upsert: {
            args: Prisma.DulceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DulcePayload>
          }
          aggregate: {
            args: Prisma.DulceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDulce>
          }
          groupBy: {
            args: Prisma.DulceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DulceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DulceCountArgs<ExtArgs>
            result: $Utils.Optional<DulceCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      CierreDiario: {
        payload: Prisma.$CierreDiarioPayload<ExtArgs>
        fields: Prisma.CierreDiarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CierreDiarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreDiarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CierreDiarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreDiarioPayload>
          }
          findFirst: {
            args: Prisma.CierreDiarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreDiarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CierreDiarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreDiarioPayload>
          }
          findMany: {
            args: Prisma.CierreDiarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreDiarioPayload>[]
          }
          create: {
            args: Prisma.CierreDiarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreDiarioPayload>
          }
          createMany: {
            args: Prisma.CierreDiarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CierreDiarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreDiarioPayload>[]
          }
          delete: {
            args: Prisma.CierreDiarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreDiarioPayload>
          }
          update: {
            args: Prisma.CierreDiarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreDiarioPayload>
          }
          deleteMany: {
            args: Prisma.CierreDiarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CierreDiarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CierreDiarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreDiarioPayload>[]
          }
          upsert: {
            args: Prisma.CierreDiarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreDiarioPayload>
          }
          aggregate: {
            args: Prisma.CierreDiarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCierreDiario>
          }
          groupBy: {
            args: Prisma.CierreDiarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<CierreDiarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.CierreDiarioCountArgs<ExtArgs>
            result: $Utils.Optional<CierreDiarioCountAggregateOutputType> | number
          }
        }
      }
      CierreSemanal: {
        payload: Prisma.$CierreSemanalPayload<ExtArgs>
        fields: Prisma.CierreSemanalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CierreSemanalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreSemanalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CierreSemanalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreSemanalPayload>
          }
          findFirst: {
            args: Prisma.CierreSemanalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreSemanalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CierreSemanalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreSemanalPayload>
          }
          findMany: {
            args: Prisma.CierreSemanalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreSemanalPayload>[]
          }
          create: {
            args: Prisma.CierreSemanalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreSemanalPayload>
          }
          createMany: {
            args: Prisma.CierreSemanalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CierreSemanalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreSemanalPayload>[]
          }
          delete: {
            args: Prisma.CierreSemanalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreSemanalPayload>
          }
          update: {
            args: Prisma.CierreSemanalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreSemanalPayload>
          }
          deleteMany: {
            args: Prisma.CierreSemanalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CierreSemanalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CierreSemanalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreSemanalPayload>[]
          }
          upsert: {
            args: Prisma.CierreSemanalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreSemanalPayload>
          }
          aggregate: {
            args: Prisma.CierreSemanalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCierreSemanal>
          }
          groupBy: {
            args: Prisma.CierreSemanalGroupByArgs<ExtArgs>
            result: $Utils.Optional<CierreSemanalGroupByOutputType>[]
          }
          count: {
            args: Prisma.CierreSemanalCountArgs<ExtArgs>
            result: $Utils.Optional<CierreSemanalCountAggregateOutputType> | number
          }
        }
      }
      CierreMensual: {
        payload: Prisma.$CierreMensualPayload<ExtArgs>
        fields: Prisma.CierreMensualFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CierreMensualFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreMensualPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CierreMensualFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreMensualPayload>
          }
          findFirst: {
            args: Prisma.CierreMensualFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreMensualPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CierreMensualFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreMensualPayload>
          }
          findMany: {
            args: Prisma.CierreMensualFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreMensualPayload>[]
          }
          create: {
            args: Prisma.CierreMensualCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreMensualPayload>
          }
          createMany: {
            args: Prisma.CierreMensualCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CierreMensualCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreMensualPayload>[]
          }
          delete: {
            args: Prisma.CierreMensualDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreMensualPayload>
          }
          update: {
            args: Prisma.CierreMensualUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreMensualPayload>
          }
          deleteMany: {
            args: Prisma.CierreMensualDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CierreMensualUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CierreMensualUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreMensualPayload>[]
          }
          upsert: {
            args: Prisma.CierreMensualUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreMensualPayload>
          }
          aggregate: {
            args: Prisma.CierreMensualAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCierreMensual>
          }
          groupBy: {
            args: Prisma.CierreMensualGroupByArgs<ExtArgs>
            result: $Utils.Optional<CierreMensualGroupByOutputType>[]
          }
          count: {
            args: Prisma.CierreMensualCountArgs<ExtArgs>
            result: $Utils.Optional<CierreMensualCountAggregateOutputType> | number
          }
        }
      }
      BannerOferta: {
        payload: Prisma.$BannerOfertaPayload<ExtArgs>
        fields: Prisma.BannerOfertaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BannerOfertaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerOfertaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BannerOfertaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerOfertaPayload>
          }
          findFirst: {
            args: Prisma.BannerOfertaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerOfertaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BannerOfertaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerOfertaPayload>
          }
          findMany: {
            args: Prisma.BannerOfertaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerOfertaPayload>[]
          }
          create: {
            args: Prisma.BannerOfertaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerOfertaPayload>
          }
          createMany: {
            args: Prisma.BannerOfertaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BannerOfertaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerOfertaPayload>[]
          }
          delete: {
            args: Prisma.BannerOfertaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerOfertaPayload>
          }
          update: {
            args: Prisma.BannerOfertaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerOfertaPayload>
          }
          deleteMany: {
            args: Prisma.BannerOfertaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BannerOfertaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BannerOfertaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerOfertaPayload>[]
          }
          upsert: {
            args: Prisma.BannerOfertaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerOfertaPayload>
          }
          aggregate: {
            args: Prisma.BannerOfertaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBannerOferta>
          }
          groupBy: {
            args: Prisma.BannerOfertaGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannerOfertaGroupByOutputType>[]
          }
          count: {
            args: Prisma.BannerOfertaCountArgs<ExtArgs>
            result: $Utils.Optional<BannerOfertaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    dulce?: DulceOmit
    pedido?: PedidoOmit
    cierreDiario?: CierreDiarioOmit
    cierreSemanal?: CierreSemanalOmit
    cierreMensual?: CierreMensualOmit
    bannerOferta?: BannerOfertaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Dulce
   */

  export type AggregateDulce = {
    _count: DulceCountAggregateOutputType | null
    _avg: DulceAvgAggregateOutputType | null
    _sum: DulceSumAggregateOutputType | null
    _min: DulceMinAggregateOutputType | null
    _max: DulceMaxAggregateOutputType | null
  }

  export type DulceAvgAggregateOutputType = {
    precio: number | null
  }

  export type DulceSumAggregateOutputType = {
    precio: number | null
  }

  export type DulceMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    categoria: string | null
    imagen: string | null
    artesanal: boolean | null
    createdAt: Date | null
  }

  export type DulceMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    categoria: string | null
    imagen: string | null
    artesanal: boolean | null
    createdAt: Date | null
  }

  export type DulceCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    precio: number
    categoria: number
    imagen: number
    artesanal: number
    ingredientes: number
    createdAt: number
    _all: number
  }


  export type DulceAvgAggregateInputType = {
    precio?: true
  }

  export type DulceSumAggregateInputType = {
    precio?: true
  }

  export type DulceMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    categoria?: true
    imagen?: true
    artesanal?: true
    createdAt?: true
  }

  export type DulceMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    categoria?: true
    imagen?: true
    artesanal?: true
    createdAt?: true
  }

  export type DulceCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    categoria?: true
    imagen?: true
    artesanal?: true
    ingredientes?: true
    createdAt?: true
    _all?: true
  }

  export type DulceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dulce to aggregate.
     */
    where?: DulceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dulces to fetch.
     */
    orderBy?: DulceOrderByWithRelationInput | DulceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DulceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dulces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dulces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dulces
    **/
    _count?: true | DulceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DulceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DulceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DulceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DulceMaxAggregateInputType
  }

  export type GetDulceAggregateType<T extends DulceAggregateArgs> = {
        [P in keyof T & keyof AggregateDulce]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDulce[P]>
      : GetScalarType<T[P], AggregateDulce[P]>
  }




  export type DulceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DulceWhereInput
    orderBy?: DulceOrderByWithAggregationInput | DulceOrderByWithAggregationInput[]
    by: DulceScalarFieldEnum[] | DulceScalarFieldEnum
    having?: DulceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DulceCountAggregateInputType | true
    _avg?: DulceAvgAggregateInputType
    _sum?: DulceSumAggregateInputType
    _min?: DulceMinAggregateInputType
    _max?: DulceMaxAggregateInputType
  }

  export type DulceGroupByOutputType = {
    id: string
    nombre: string
    descripcion: string | null
    precio: number
    categoria: string | null
    imagen: string | null
    artesanal: boolean
    ingredientes: string[]
    createdAt: Date
    _count: DulceCountAggregateOutputType | null
    _avg: DulceAvgAggregateOutputType | null
    _sum: DulceSumAggregateOutputType | null
    _min: DulceMinAggregateOutputType | null
    _max: DulceMaxAggregateOutputType | null
  }

  type GetDulceGroupByPayload<T extends DulceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DulceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DulceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DulceGroupByOutputType[P]>
            : GetScalarType<T[P], DulceGroupByOutputType[P]>
        }
      >
    >


  export type DulceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    categoria?: boolean
    imagen?: boolean
    artesanal?: boolean
    ingredientes?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dulce"]>

  export type DulceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    categoria?: boolean
    imagen?: boolean
    artesanal?: boolean
    ingredientes?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dulce"]>

  export type DulceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    categoria?: boolean
    imagen?: boolean
    artesanal?: boolean
    ingredientes?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dulce"]>

  export type DulceSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    categoria?: boolean
    imagen?: boolean
    artesanal?: boolean
    ingredientes?: boolean
    createdAt?: boolean
  }

  export type DulceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio" | "categoria" | "imagen" | "artesanal" | "ingredientes" | "createdAt", ExtArgs["result"]["dulce"]>

  export type $DulcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dulce"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      descripcion: string | null
      precio: number
      categoria: string | null
      imagen: string | null
      artesanal: boolean
      ingredientes: string[]
      createdAt: Date
    }, ExtArgs["result"]["dulce"]>
    composites: {}
  }

  type DulceGetPayload<S extends boolean | null | undefined | DulceDefaultArgs> = $Result.GetResult<Prisma.$DulcePayload, S>

  type DulceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DulceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DulceCountAggregateInputType | true
    }

  export interface DulceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dulce'], meta: { name: 'Dulce' } }
    /**
     * Find zero or one Dulce that matches the filter.
     * @param {DulceFindUniqueArgs} args - Arguments to find a Dulce
     * @example
     * // Get one Dulce
     * const dulce = await prisma.dulce.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DulceFindUniqueArgs>(args: SelectSubset<T, DulceFindUniqueArgs<ExtArgs>>): Prisma__DulceClient<$Result.GetResult<Prisma.$DulcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dulce that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DulceFindUniqueOrThrowArgs} args - Arguments to find a Dulce
     * @example
     * // Get one Dulce
     * const dulce = await prisma.dulce.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DulceFindUniqueOrThrowArgs>(args: SelectSubset<T, DulceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DulceClient<$Result.GetResult<Prisma.$DulcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dulce that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DulceFindFirstArgs} args - Arguments to find a Dulce
     * @example
     * // Get one Dulce
     * const dulce = await prisma.dulce.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DulceFindFirstArgs>(args?: SelectSubset<T, DulceFindFirstArgs<ExtArgs>>): Prisma__DulceClient<$Result.GetResult<Prisma.$DulcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dulce that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DulceFindFirstOrThrowArgs} args - Arguments to find a Dulce
     * @example
     * // Get one Dulce
     * const dulce = await prisma.dulce.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DulceFindFirstOrThrowArgs>(args?: SelectSubset<T, DulceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DulceClient<$Result.GetResult<Prisma.$DulcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dulces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DulceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dulces
     * const dulces = await prisma.dulce.findMany()
     * 
     * // Get first 10 Dulces
     * const dulces = await prisma.dulce.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dulceWithIdOnly = await prisma.dulce.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DulceFindManyArgs>(args?: SelectSubset<T, DulceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DulcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dulce.
     * @param {DulceCreateArgs} args - Arguments to create a Dulce.
     * @example
     * // Create one Dulce
     * const Dulce = await prisma.dulce.create({
     *   data: {
     *     // ... data to create a Dulce
     *   }
     * })
     * 
     */
    create<T extends DulceCreateArgs>(args: SelectSubset<T, DulceCreateArgs<ExtArgs>>): Prisma__DulceClient<$Result.GetResult<Prisma.$DulcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dulces.
     * @param {DulceCreateManyArgs} args - Arguments to create many Dulces.
     * @example
     * // Create many Dulces
     * const dulce = await prisma.dulce.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DulceCreateManyArgs>(args?: SelectSubset<T, DulceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dulces and returns the data saved in the database.
     * @param {DulceCreateManyAndReturnArgs} args - Arguments to create many Dulces.
     * @example
     * // Create many Dulces
     * const dulce = await prisma.dulce.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dulces and only return the `id`
     * const dulceWithIdOnly = await prisma.dulce.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DulceCreateManyAndReturnArgs>(args?: SelectSubset<T, DulceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DulcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dulce.
     * @param {DulceDeleteArgs} args - Arguments to delete one Dulce.
     * @example
     * // Delete one Dulce
     * const Dulce = await prisma.dulce.delete({
     *   where: {
     *     // ... filter to delete one Dulce
     *   }
     * })
     * 
     */
    delete<T extends DulceDeleteArgs>(args: SelectSubset<T, DulceDeleteArgs<ExtArgs>>): Prisma__DulceClient<$Result.GetResult<Prisma.$DulcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dulce.
     * @param {DulceUpdateArgs} args - Arguments to update one Dulce.
     * @example
     * // Update one Dulce
     * const dulce = await prisma.dulce.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DulceUpdateArgs>(args: SelectSubset<T, DulceUpdateArgs<ExtArgs>>): Prisma__DulceClient<$Result.GetResult<Prisma.$DulcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dulces.
     * @param {DulceDeleteManyArgs} args - Arguments to filter Dulces to delete.
     * @example
     * // Delete a few Dulces
     * const { count } = await prisma.dulce.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DulceDeleteManyArgs>(args?: SelectSubset<T, DulceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dulces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DulceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dulces
     * const dulce = await prisma.dulce.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DulceUpdateManyArgs>(args: SelectSubset<T, DulceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dulces and returns the data updated in the database.
     * @param {DulceUpdateManyAndReturnArgs} args - Arguments to update many Dulces.
     * @example
     * // Update many Dulces
     * const dulce = await prisma.dulce.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dulces and only return the `id`
     * const dulceWithIdOnly = await prisma.dulce.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DulceUpdateManyAndReturnArgs>(args: SelectSubset<T, DulceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DulcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dulce.
     * @param {DulceUpsertArgs} args - Arguments to update or create a Dulce.
     * @example
     * // Update or create a Dulce
     * const dulce = await prisma.dulce.upsert({
     *   create: {
     *     // ... data to create a Dulce
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dulce we want to update
     *   }
     * })
     */
    upsert<T extends DulceUpsertArgs>(args: SelectSubset<T, DulceUpsertArgs<ExtArgs>>): Prisma__DulceClient<$Result.GetResult<Prisma.$DulcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dulces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DulceCountArgs} args - Arguments to filter Dulces to count.
     * @example
     * // Count the number of Dulces
     * const count = await prisma.dulce.count({
     *   where: {
     *     // ... the filter for the Dulces we want to count
     *   }
     * })
    **/
    count<T extends DulceCountArgs>(
      args?: Subset<T, DulceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DulceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dulce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DulceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DulceAggregateArgs>(args: Subset<T, DulceAggregateArgs>): Prisma.PrismaPromise<GetDulceAggregateType<T>>

    /**
     * Group by Dulce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DulceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DulceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DulceGroupByArgs['orderBy'] }
        : { orderBy?: DulceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DulceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDulceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dulce model
   */
  readonly fields: DulceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dulce.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DulceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dulce model
   */
  interface DulceFieldRefs {
    readonly id: FieldRef<"Dulce", 'String'>
    readonly nombre: FieldRef<"Dulce", 'String'>
    readonly descripcion: FieldRef<"Dulce", 'String'>
    readonly precio: FieldRef<"Dulce", 'Float'>
    readonly categoria: FieldRef<"Dulce", 'String'>
    readonly imagen: FieldRef<"Dulce", 'String'>
    readonly artesanal: FieldRef<"Dulce", 'Boolean'>
    readonly ingredientes: FieldRef<"Dulce", 'String[]'>
    readonly createdAt: FieldRef<"Dulce", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dulce findUnique
   */
  export type DulceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dulce
     */
    select?: DulceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dulce
     */
    omit?: DulceOmit<ExtArgs> | null
    /**
     * Filter, which Dulce to fetch.
     */
    where: DulceWhereUniqueInput
  }

  /**
   * Dulce findUniqueOrThrow
   */
  export type DulceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dulce
     */
    select?: DulceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dulce
     */
    omit?: DulceOmit<ExtArgs> | null
    /**
     * Filter, which Dulce to fetch.
     */
    where: DulceWhereUniqueInput
  }

  /**
   * Dulce findFirst
   */
  export type DulceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dulce
     */
    select?: DulceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dulce
     */
    omit?: DulceOmit<ExtArgs> | null
    /**
     * Filter, which Dulce to fetch.
     */
    where?: DulceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dulces to fetch.
     */
    orderBy?: DulceOrderByWithRelationInput | DulceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dulces.
     */
    cursor?: DulceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dulces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dulces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dulces.
     */
    distinct?: DulceScalarFieldEnum | DulceScalarFieldEnum[]
  }

  /**
   * Dulce findFirstOrThrow
   */
  export type DulceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dulce
     */
    select?: DulceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dulce
     */
    omit?: DulceOmit<ExtArgs> | null
    /**
     * Filter, which Dulce to fetch.
     */
    where?: DulceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dulces to fetch.
     */
    orderBy?: DulceOrderByWithRelationInput | DulceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dulces.
     */
    cursor?: DulceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dulces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dulces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dulces.
     */
    distinct?: DulceScalarFieldEnum | DulceScalarFieldEnum[]
  }

  /**
   * Dulce findMany
   */
  export type DulceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dulce
     */
    select?: DulceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dulce
     */
    omit?: DulceOmit<ExtArgs> | null
    /**
     * Filter, which Dulces to fetch.
     */
    where?: DulceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dulces to fetch.
     */
    orderBy?: DulceOrderByWithRelationInput | DulceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dulces.
     */
    cursor?: DulceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dulces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dulces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dulces.
     */
    distinct?: DulceScalarFieldEnum | DulceScalarFieldEnum[]
  }

  /**
   * Dulce create
   */
  export type DulceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dulce
     */
    select?: DulceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dulce
     */
    omit?: DulceOmit<ExtArgs> | null
    /**
     * The data needed to create a Dulce.
     */
    data: XOR<DulceCreateInput, DulceUncheckedCreateInput>
  }

  /**
   * Dulce createMany
   */
  export type DulceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dulces.
     */
    data: DulceCreateManyInput | DulceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dulce createManyAndReturn
   */
  export type DulceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dulce
     */
    select?: DulceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dulce
     */
    omit?: DulceOmit<ExtArgs> | null
    /**
     * The data used to create many Dulces.
     */
    data: DulceCreateManyInput | DulceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dulce update
   */
  export type DulceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dulce
     */
    select?: DulceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dulce
     */
    omit?: DulceOmit<ExtArgs> | null
    /**
     * The data needed to update a Dulce.
     */
    data: XOR<DulceUpdateInput, DulceUncheckedUpdateInput>
    /**
     * Choose, which Dulce to update.
     */
    where: DulceWhereUniqueInput
  }

  /**
   * Dulce updateMany
   */
  export type DulceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dulces.
     */
    data: XOR<DulceUpdateManyMutationInput, DulceUncheckedUpdateManyInput>
    /**
     * Filter which Dulces to update
     */
    where?: DulceWhereInput
    /**
     * Limit how many Dulces to update.
     */
    limit?: number
  }

  /**
   * Dulce updateManyAndReturn
   */
  export type DulceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dulce
     */
    select?: DulceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dulce
     */
    omit?: DulceOmit<ExtArgs> | null
    /**
     * The data used to update Dulces.
     */
    data: XOR<DulceUpdateManyMutationInput, DulceUncheckedUpdateManyInput>
    /**
     * Filter which Dulces to update
     */
    where?: DulceWhereInput
    /**
     * Limit how many Dulces to update.
     */
    limit?: number
  }

  /**
   * Dulce upsert
   */
  export type DulceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dulce
     */
    select?: DulceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dulce
     */
    omit?: DulceOmit<ExtArgs> | null
    /**
     * The filter to search for the Dulce to update in case it exists.
     */
    where: DulceWhereUniqueInput
    /**
     * In case the Dulce found by the `where` argument doesn't exist, create a new Dulce with this data.
     */
    create: XOR<DulceCreateInput, DulceUncheckedCreateInput>
    /**
     * In case the Dulce was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DulceUpdateInput, DulceUncheckedUpdateInput>
  }

  /**
   * Dulce delete
   */
  export type DulceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dulce
     */
    select?: DulceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dulce
     */
    omit?: DulceOmit<ExtArgs> | null
    /**
     * Filter which Dulce to delete.
     */
    where: DulceWhereUniqueInput
  }

  /**
   * Dulce deleteMany
   */
  export type DulceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dulces to delete
     */
    where?: DulceWhereInput
    /**
     * Limit how many Dulces to delete.
     */
    limit?: number
  }

  /**
   * Dulce without action
   */
  export type DulceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dulce
     */
    select?: DulceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dulce
     */
    omit?: DulceOmit<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    total: number | null
  }

  export type PedidoSumAggregateOutputType = {
    total: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    apellidos: string | null
    email: string | null
    telefono: string | null
    direccion: string | null
    ciudad: string | null
    productos: string | null
    total: number | null
    estado: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    apellidos: string | null
    email: string | null
    telefono: string | null
    direccion: string | null
    ciudad: string | null
    productos: string | null
    total: number | null
    estado: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    nombre: number
    apellidos: number
    email: number
    telefono: number
    direccion: number
    ciudad: number
    productos: number
    total: number
    estado: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    total?: true
  }

  export type PedidoSumAggregateInputType = {
    total?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    nombre?: true
    apellidos?: true
    email?: true
    telefono?: true
    direccion?: true
    ciudad?: true
    productos?: true
    total?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellidos?: true
    email?: true
    telefono?: true
    direccion?: true
    ciudad?: true
    productos?: true
    total?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    nombre?: true
    apellidos?: true
    email?: true
    telefono?: true
    direccion?: true
    ciudad?: true
    productos?: true
    total?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: string
    nombre: string
    apellidos: string
    email: string
    telefono: string
    direccion: string
    ciudad: string | null
    productos: string
    total: number
    estado: string
    createdAt: Date
    updatedAt: Date
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellidos?: boolean
    email?: boolean
    telefono?: boolean
    direccion?: boolean
    ciudad?: boolean
    productos?: boolean
    total?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellidos?: boolean
    email?: boolean
    telefono?: boolean
    direccion?: boolean
    ciudad?: boolean
    productos?: boolean
    total?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellidos?: boolean
    email?: boolean
    telefono?: boolean
    direccion?: boolean
    ciudad?: boolean
    productos?: boolean
    total?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellidos?: boolean
    email?: boolean
    telefono?: boolean
    direccion?: boolean
    ciudad?: boolean
    productos?: boolean
    total?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "apellidos" | "email" | "telefono" | "direccion" | "ciudad" | "productos" | "total" | "estado" | "createdAt" | "updatedAt", ExtArgs["result"]["pedido"]>

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      apellidos: string
      email: string
      telefono: string
      direccion: string
      ciudad: string | null
      productos: string
      total: number
      estado: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {PedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {PedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'String'>
    readonly nombre: FieldRef<"Pedido", 'String'>
    readonly apellidos: FieldRef<"Pedido", 'String'>
    readonly email: FieldRef<"Pedido", 'String'>
    readonly telefono: FieldRef<"Pedido", 'String'>
    readonly direccion: FieldRef<"Pedido", 'String'>
    readonly ciudad: FieldRef<"Pedido", 'String'>
    readonly productos: FieldRef<"Pedido", 'String'>
    readonly total: FieldRef<"Pedido", 'Float'>
    readonly estado: FieldRef<"Pedido", 'String'>
    readonly createdAt: FieldRef<"Pedido", 'DateTime'>
    readonly updatedAt: FieldRef<"Pedido", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido createManyAndReturn
   */
  export type PedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido updateManyAndReturn
   */
  export type PedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
  }


  /**
   * Model CierreDiario
   */

  export type AggregateCierreDiario = {
    _count: CierreDiarioCountAggregateOutputType | null
    _avg: CierreDiarioAvgAggregateOutputType | null
    _sum: CierreDiarioSumAggregateOutputType | null
    _min: CierreDiarioMinAggregateOutputType | null
    _max: CierreDiarioMaxAggregateOutputType | null
  }

  export type CierreDiarioAvgAggregateOutputType = {
    totalVentas: number | null
    numPedidos: number | null
  }

  export type CierreDiarioSumAggregateOutputType = {
    totalVentas: number | null
    numPedidos: number | null
  }

  export type CierreDiarioMinAggregateOutputType = {
    id: string | null
    fecha: Date | null
    totalVentas: number | null
    numPedidos: number | null
    pedidosJson: string | null
    createdAt: Date | null
  }

  export type CierreDiarioMaxAggregateOutputType = {
    id: string | null
    fecha: Date | null
    totalVentas: number | null
    numPedidos: number | null
    pedidosJson: string | null
    createdAt: Date | null
  }

  export type CierreDiarioCountAggregateOutputType = {
    id: number
    fecha: number
    totalVentas: number
    numPedidos: number
    pedidosJson: number
    createdAt: number
    _all: number
  }


  export type CierreDiarioAvgAggregateInputType = {
    totalVentas?: true
    numPedidos?: true
  }

  export type CierreDiarioSumAggregateInputType = {
    totalVentas?: true
    numPedidos?: true
  }

  export type CierreDiarioMinAggregateInputType = {
    id?: true
    fecha?: true
    totalVentas?: true
    numPedidos?: true
    pedidosJson?: true
    createdAt?: true
  }

  export type CierreDiarioMaxAggregateInputType = {
    id?: true
    fecha?: true
    totalVentas?: true
    numPedidos?: true
    pedidosJson?: true
    createdAt?: true
  }

  export type CierreDiarioCountAggregateInputType = {
    id?: true
    fecha?: true
    totalVentas?: true
    numPedidos?: true
    pedidosJson?: true
    createdAt?: true
    _all?: true
  }

  export type CierreDiarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CierreDiario to aggregate.
     */
    where?: CierreDiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CierreDiarios to fetch.
     */
    orderBy?: CierreDiarioOrderByWithRelationInput | CierreDiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CierreDiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CierreDiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CierreDiarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CierreDiarios
    **/
    _count?: true | CierreDiarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CierreDiarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CierreDiarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CierreDiarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CierreDiarioMaxAggregateInputType
  }

  export type GetCierreDiarioAggregateType<T extends CierreDiarioAggregateArgs> = {
        [P in keyof T & keyof AggregateCierreDiario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCierreDiario[P]>
      : GetScalarType<T[P], AggregateCierreDiario[P]>
  }




  export type CierreDiarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CierreDiarioWhereInput
    orderBy?: CierreDiarioOrderByWithAggregationInput | CierreDiarioOrderByWithAggregationInput[]
    by: CierreDiarioScalarFieldEnum[] | CierreDiarioScalarFieldEnum
    having?: CierreDiarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CierreDiarioCountAggregateInputType | true
    _avg?: CierreDiarioAvgAggregateInputType
    _sum?: CierreDiarioSumAggregateInputType
    _min?: CierreDiarioMinAggregateInputType
    _max?: CierreDiarioMaxAggregateInputType
  }

  export type CierreDiarioGroupByOutputType = {
    id: string
    fecha: Date
    totalVentas: number
    numPedidos: number
    pedidosJson: string
    createdAt: Date
    _count: CierreDiarioCountAggregateOutputType | null
    _avg: CierreDiarioAvgAggregateOutputType | null
    _sum: CierreDiarioSumAggregateOutputType | null
    _min: CierreDiarioMinAggregateOutputType | null
    _max: CierreDiarioMaxAggregateOutputType | null
  }

  type GetCierreDiarioGroupByPayload<T extends CierreDiarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CierreDiarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CierreDiarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CierreDiarioGroupByOutputType[P]>
            : GetScalarType<T[P], CierreDiarioGroupByOutputType[P]>
        }
      >
    >


  export type CierreDiarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    totalVentas?: boolean
    numPedidos?: boolean
    pedidosJson?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cierreDiario"]>

  export type CierreDiarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    totalVentas?: boolean
    numPedidos?: boolean
    pedidosJson?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cierreDiario"]>

  export type CierreDiarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    totalVentas?: boolean
    numPedidos?: boolean
    pedidosJson?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cierreDiario"]>

  export type CierreDiarioSelectScalar = {
    id?: boolean
    fecha?: boolean
    totalVentas?: boolean
    numPedidos?: boolean
    pedidosJson?: boolean
    createdAt?: boolean
  }

  export type CierreDiarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "totalVentas" | "numPedidos" | "pedidosJson" | "createdAt", ExtArgs["result"]["cierreDiario"]>

  export type $CierreDiarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CierreDiario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fecha: Date
      totalVentas: number
      numPedidos: number
      pedidosJson: string
      createdAt: Date
    }, ExtArgs["result"]["cierreDiario"]>
    composites: {}
  }

  type CierreDiarioGetPayload<S extends boolean | null | undefined | CierreDiarioDefaultArgs> = $Result.GetResult<Prisma.$CierreDiarioPayload, S>

  type CierreDiarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CierreDiarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CierreDiarioCountAggregateInputType | true
    }

  export interface CierreDiarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CierreDiario'], meta: { name: 'CierreDiario' } }
    /**
     * Find zero or one CierreDiario that matches the filter.
     * @param {CierreDiarioFindUniqueArgs} args - Arguments to find a CierreDiario
     * @example
     * // Get one CierreDiario
     * const cierreDiario = await prisma.cierreDiario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CierreDiarioFindUniqueArgs>(args: SelectSubset<T, CierreDiarioFindUniqueArgs<ExtArgs>>): Prisma__CierreDiarioClient<$Result.GetResult<Prisma.$CierreDiarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CierreDiario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CierreDiarioFindUniqueOrThrowArgs} args - Arguments to find a CierreDiario
     * @example
     * // Get one CierreDiario
     * const cierreDiario = await prisma.cierreDiario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CierreDiarioFindUniqueOrThrowArgs>(args: SelectSubset<T, CierreDiarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CierreDiarioClient<$Result.GetResult<Prisma.$CierreDiarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CierreDiario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreDiarioFindFirstArgs} args - Arguments to find a CierreDiario
     * @example
     * // Get one CierreDiario
     * const cierreDiario = await prisma.cierreDiario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CierreDiarioFindFirstArgs>(args?: SelectSubset<T, CierreDiarioFindFirstArgs<ExtArgs>>): Prisma__CierreDiarioClient<$Result.GetResult<Prisma.$CierreDiarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CierreDiario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreDiarioFindFirstOrThrowArgs} args - Arguments to find a CierreDiario
     * @example
     * // Get one CierreDiario
     * const cierreDiario = await prisma.cierreDiario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CierreDiarioFindFirstOrThrowArgs>(args?: SelectSubset<T, CierreDiarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__CierreDiarioClient<$Result.GetResult<Prisma.$CierreDiarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CierreDiarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreDiarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CierreDiarios
     * const cierreDiarios = await prisma.cierreDiario.findMany()
     * 
     * // Get first 10 CierreDiarios
     * const cierreDiarios = await prisma.cierreDiario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cierreDiarioWithIdOnly = await prisma.cierreDiario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CierreDiarioFindManyArgs>(args?: SelectSubset<T, CierreDiarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CierreDiarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CierreDiario.
     * @param {CierreDiarioCreateArgs} args - Arguments to create a CierreDiario.
     * @example
     * // Create one CierreDiario
     * const CierreDiario = await prisma.cierreDiario.create({
     *   data: {
     *     // ... data to create a CierreDiario
     *   }
     * })
     * 
     */
    create<T extends CierreDiarioCreateArgs>(args: SelectSubset<T, CierreDiarioCreateArgs<ExtArgs>>): Prisma__CierreDiarioClient<$Result.GetResult<Prisma.$CierreDiarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CierreDiarios.
     * @param {CierreDiarioCreateManyArgs} args - Arguments to create many CierreDiarios.
     * @example
     * // Create many CierreDiarios
     * const cierreDiario = await prisma.cierreDiario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CierreDiarioCreateManyArgs>(args?: SelectSubset<T, CierreDiarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CierreDiarios and returns the data saved in the database.
     * @param {CierreDiarioCreateManyAndReturnArgs} args - Arguments to create many CierreDiarios.
     * @example
     * // Create many CierreDiarios
     * const cierreDiario = await prisma.cierreDiario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CierreDiarios and only return the `id`
     * const cierreDiarioWithIdOnly = await prisma.cierreDiario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CierreDiarioCreateManyAndReturnArgs>(args?: SelectSubset<T, CierreDiarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CierreDiarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CierreDiario.
     * @param {CierreDiarioDeleteArgs} args - Arguments to delete one CierreDiario.
     * @example
     * // Delete one CierreDiario
     * const CierreDiario = await prisma.cierreDiario.delete({
     *   where: {
     *     // ... filter to delete one CierreDiario
     *   }
     * })
     * 
     */
    delete<T extends CierreDiarioDeleteArgs>(args: SelectSubset<T, CierreDiarioDeleteArgs<ExtArgs>>): Prisma__CierreDiarioClient<$Result.GetResult<Prisma.$CierreDiarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CierreDiario.
     * @param {CierreDiarioUpdateArgs} args - Arguments to update one CierreDiario.
     * @example
     * // Update one CierreDiario
     * const cierreDiario = await prisma.cierreDiario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CierreDiarioUpdateArgs>(args: SelectSubset<T, CierreDiarioUpdateArgs<ExtArgs>>): Prisma__CierreDiarioClient<$Result.GetResult<Prisma.$CierreDiarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CierreDiarios.
     * @param {CierreDiarioDeleteManyArgs} args - Arguments to filter CierreDiarios to delete.
     * @example
     * // Delete a few CierreDiarios
     * const { count } = await prisma.cierreDiario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CierreDiarioDeleteManyArgs>(args?: SelectSubset<T, CierreDiarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CierreDiarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreDiarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CierreDiarios
     * const cierreDiario = await prisma.cierreDiario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CierreDiarioUpdateManyArgs>(args: SelectSubset<T, CierreDiarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CierreDiarios and returns the data updated in the database.
     * @param {CierreDiarioUpdateManyAndReturnArgs} args - Arguments to update many CierreDiarios.
     * @example
     * // Update many CierreDiarios
     * const cierreDiario = await prisma.cierreDiario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CierreDiarios and only return the `id`
     * const cierreDiarioWithIdOnly = await prisma.cierreDiario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CierreDiarioUpdateManyAndReturnArgs>(args: SelectSubset<T, CierreDiarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CierreDiarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CierreDiario.
     * @param {CierreDiarioUpsertArgs} args - Arguments to update or create a CierreDiario.
     * @example
     * // Update or create a CierreDiario
     * const cierreDiario = await prisma.cierreDiario.upsert({
     *   create: {
     *     // ... data to create a CierreDiario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CierreDiario we want to update
     *   }
     * })
     */
    upsert<T extends CierreDiarioUpsertArgs>(args: SelectSubset<T, CierreDiarioUpsertArgs<ExtArgs>>): Prisma__CierreDiarioClient<$Result.GetResult<Prisma.$CierreDiarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CierreDiarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreDiarioCountArgs} args - Arguments to filter CierreDiarios to count.
     * @example
     * // Count the number of CierreDiarios
     * const count = await prisma.cierreDiario.count({
     *   where: {
     *     // ... the filter for the CierreDiarios we want to count
     *   }
     * })
    **/
    count<T extends CierreDiarioCountArgs>(
      args?: Subset<T, CierreDiarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CierreDiarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CierreDiario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreDiarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CierreDiarioAggregateArgs>(args: Subset<T, CierreDiarioAggregateArgs>): Prisma.PrismaPromise<GetCierreDiarioAggregateType<T>>

    /**
     * Group by CierreDiario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreDiarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CierreDiarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CierreDiarioGroupByArgs['orderBy'] }
        : { orderBy?: CierreDiarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CierreDiarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCierreDiarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CierreDiario model
   */
  readonly fields: CierreDiarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CierreDiario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CierreDiarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CierreDiario model
   */
  interface CierreDiarioFieldRefs {
    readonly id: FieldRef<"CierreDiario", 'String'>
    readonly fecha: FieldRef<"CierreDiario", 'DateTime'>
    readonly totalVentas: FieldRef<"CierreDiario", 'Float'>
    readonly numPedidos: FieldRef<"CierreDiario", 'Int'>
    readonly pedidosJson: FieldRef<"CierreDiario", 'String'>
    readonly createdAt: FieldRef<"CierreDiario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CierreDiario findUnique
   */
  export type CierreDiarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreDiario
     */
    select?: CierreDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreDiario
     */
    omit?: CierreDiarioOmit<ExtArgs> | null
    /**
     * Filter, which CierreDiario to fetch.
     */
    where: CierreDiarioWhereUniqueInput
  }

  /**
   * CierreDiario findUniqueOrThrow
   */
  export type CierreDiarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreDiario
     */
    select?: CierreDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreDiario
     */
    omit?: CierreDiarioOmit<ExtArgs> | null
    /**
     * Filter, which CierreDiario to fetch.
     */
    where: CierreDiarioWhereUniqueInput
  }

  /**
   * CierreDiario findFirst
   */
  export type CierreDiarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreDiario
     */
    select?: CierreDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreDiario
     */
    omit?: CierreDiarioOmit<ExtArgs> | null
    /**
     * Filter, which CierreDiario to fetch.
     */
    where?: CierreDiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CierreDiarios to fetch.
     */
    orderBy?: CierreDiarioOrderByWithRelationInput | CierreDiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CierreDiarios.
     */
    cursor?: CierreDiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CierreDiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CierreDiarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CierreDiarios.
     */
    distinct?: CierreDiarioScalarFieldEnum | CierreDiarioScalarFieldEnum[]
  }

  /**
   * CierreDiario findFirstOrThrow
   */
  export type CierreDiarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreDiario
     */
    select?: CierreDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreDiario
     */
    omit?: CierreDiarioOmit<ExtArgs> | null
    /**
     * Filter, which CierreDiario to fetch.
     */
    where?: CierreDiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CierreDiarios to fetch.
     */
    orderBy?: CierreDiarioOrderByWithRelationInput | CierreDiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CierreDiarios.
     */
    cursor?: CierreDiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CierreDiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CierreDiarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CierreDiarios.
     */
    distinct?: CierreDiarioScalarFieldEnum | CierreDiarioScalarFieldEnum[]
  }

  /**
   * CierreDiario findMany
   */
  export type CierreDiarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreDiario
     */
    select?: CierreDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreDiario
     */
    omit?: CierreDiarioOmit<ExtArgs> | null
    /**
     * Filter, which CierreDiarios to fetch.
     */
    where?: CierreDiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CierreDiarios to fetch.
     */
    orderBy?: CierreDiarioOrderByWithRelationInput | CierreDiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CierreDiarios.
     */
    cursor?: CierreDiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CierreDiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CierreDiarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CierreDiarios.
     */
    distinct?: CierreDiarioScalarFieldEnum | CierreDiarioScalarFieldEnum[]
  }

  /**
   * CierreDiario create
   */
  export type CierreDiarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreDiario
     */
    select?: CierreDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreDiario
     */
    omit?: CierreDiarioOmit<ExtArgs> | null
    /**
     * The data needed to create a CierreDiario.
     */
    data: XOR<CierreDiarioCreateInput, CierreDiarioUncheckedCreateInput>
  }

  /**
   * CierreDiario createMany
   */
  export type CierreDiarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CierreDiarios.
     */
    data: CierreDiarioCreateManyInput | CierreDiarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CierreDiario createManyAndReturn
   */
  export type CierreDiarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreDiario
     */
    select?: CierreDiarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CierreDiario
     */
    omit?: CierreDiarioOmit<ExtArgs> | null
    /**
     * The data used to create many CierreDiarios.
     */
    data: CierreDiarioCreateManyInput | CierreDiarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CierreDiario update
   */
  export type CierreDiarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreDiario
     */
    select?: CierreDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreDiario
     */
    omit?: CierreDiarioOmit<ExtArgs> | null
    /**
     * The data needed to update a CierreDiario.
     */
    data: XOR<CierreDiarioUpdateInput, CierreDiarioUncheckedUpdateInput>
    /**
     * Choose, which CierreDiario to update.
     */
    where: CierreDiarioWhereUniqueInput
  }

  /**
   * CierreDiario updateMany
   */
  export type CierreDiarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CierreDiarios.
     */
    data: XOR<CierreDiarioUpdateManyMutationInput, CierreDiarioUncheckedUpdateManyInput>
    /**
     * Filter which CierreDiarios to update
     */
    where?: CierreDiarioWhereInput
    /**
     * Limit how many CierreDiarios to update.
     */
    limit?: number
  }

  /**
   * CierreDiario updateManyAndReturn
   */
  export type CierreDiarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreDiario
     */
    select?: CierreDiarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CierreDiario
     */
    omit?: CierreDiarioOmit<ExtArgs> | null
    /**
     * The data used to update CierreDiarios.
     */
    data: XOR<CierreDiarioUpdateManyMutationInput, CierreDiarioUncheckedUpdateManyInput>
    /**
     * Filter which CierreDiarios to update
     */
    where?: CierreDiarioWhereInput
    /**
     * Limit how many CierreDiarios to update.
     */
    limit?: number
  }

  /**
   * CierreDiario upsert
   */
  export type CierreDiarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreDiario
     */
    select?: CierreDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreDiario
     */
    omit?: CierreDiarioOmit<ExtArgs> | null
    /**
     * The filter to search for the CierreDiario to update in case it exists.
     */
    where: CierreDiarioWhereUniqueInput
    /**
     * In case the CierreDiario found by the `where` argument doesn't exist, create a new CierreDiario with this data.
     */
    create: XOR<CierreDiarioCreateInput, CierreDiarioUncheckedCreateInput>
    /**
     * In case the CierreDiario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CierreDiarioUpdateInput, CierreDiarioUncheckedUpdateInput>
  }

  /**
   * CierreDiario delete
   */
  export type CierreDiarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreDiario
     */
    select?: CierreDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreDiario
     */
    omit?: CierreDiarioOmit<ExtArgs> | null
    /**
     * Filter which CierreDiario to delete.
     */
    where: CierreDiarioWhereUniqueInput
  }

  /**
   * CierreDiario deleteMany
   */
  export type CierreDiarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CierreDiarios to delete
     */
    where?: CierreDiarioWhereInput
    /**
     * Limit how many CierreDiarios to delete.
     */
    limit?: number
  }

  /**
   * CierreDiario without action
   */
  export type CierreDiarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreDiario
     */
    select?: CierreDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreDiario
     */
    omit?: CierreDiarioOmit<ExtArgs> | null
  }


  /**
   * Model CierreSemanal
   */

  export type AggregateCierreSemanal = {
    _count: CierreSemanalCountAggregateOutputType | null
    _avg: CierreSemanalAvgAggregateOutputType | null
    _sum: CierreSemanalSumAggregateOutputType | null
    _min: CierreSemanalMinAggregateOutputType | null
    _max: CierreSemanalMaxAggregateOutputType | null
  }

  export type CierreSemanalAvgAggregateOutputType = {
    numeroSemana: number | null
    totalVentas: number | null
    numPedidos: number | null
  }

  export type CierreSemanalSumAggregateOutputType = {
    numeroSemana: number | null
    totalVentas: number | null
    numPedidos: number | null
  }

  export type CierreSemanalMinAggregateOutputType = {
    id: string | null
    numeroSemana: number | null
    mesAnio: string | null
    totalVentas: number | null
    numPedidos: number | null
    cierresJson: string | null
    cerradoMan: boolean | null
    createdAt: Date | null
  }

  export type CierreSemanalMaxAggregateOutputType = {
    id: string | null
    numeroSemana: number | null
    mesAnio: string | null
    totalVentas: number | null
    numPedidos: number | null
    cierresJson: string | null
    cerradoMan: boolean | null
    createdAt: Date | null
  }

  export type CierreSemanalCountAggregateOutputType = {
    id: number
    numeroSemana: number
    mesAnio: number
    totalVentas: number
    numPedidos: number
    cierresJson: number
    cerradoMan: number
    createdAt: number
    _all: number
  }


  export type CierreSemanalAvgAggregateInputType = {
    numeroSemana?: true
    totalVentas?: true
    numPedidos?: true
  }

  export type CierreSemanalSumAggregateInputType = {
    numeroSemana?: true
    totalVentas?: true
    numPedidos?: true
  }

  export type CierreSemanalMinAggregateInputType = {
    id?: true
    numeroSemana?: true
    mesAnio?: true
    totalVentas?: true
    numPedidos?: true
    cierresJson?: true
    cerradoMan?: true
    createdAt?: true
  }

  export type CierreSemanalMaxAggregateInputType = {
    id?: true
    numeroSemana?: true
    mesAnio?: true
    totalVentas?: true
    numPedidos?: true
    cierresJson?: true
    cerradoMan?: true
    createdAt?: true
  }

  export type CierreSemanalCountAggregateInputType = {
    id?: true
    numeroSemana?: true
    mesAnio?: true
    totalVentas?: true
    numPedidos?: true
    cierresJson?: true
    cerradoMan?: true
    createdAt?: true
    _all?: true
  }

  export type CierreSemanalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CierreSemanal to aggregate.
     */
    where?: CierreSemanalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CierreSemanals to fetch.
     */
    orderBy?: CierreSemanalOrderByWithRelationInput | CierreSemanalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CierreSemanalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CierreSemanals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CierreSemanals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CierreSemanals
    **/
    _count?: true | CierreSemanalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CierreSemanalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CierreSemanalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CierreSemanalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CierreSemanalMaxAggregateInputType
  }

  export type GetCierreSemanalAggregateType<T extends CierreSemanalAggregateArgs> = {
        [P in keyof T & keyof AggregateCierreSemanal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCierreSemanal[P]>
      : GetScalarType<T[P], AggregateCierreSemanal[P]>
  }




  export type CierreSemanalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CierreSemanalWhereInput
    orderBy?: CierreSemanalOrderByWithAggregationInput | CierreSemanalOrderByWithAggregationInput[]
    by: CierreSemanalScalarFieldEnum[] | CierreSemanalScalarFieldEnum
    having?: CierreSemanalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CierreSemanalCountAggregateInputType | true
    _avg?: CierreSemanalAvgAggregateInputType
    _sum?: CierreSemanalSumAggregateInputType
    _min?: CierreSemanalMinAggregateInputType
    _max?: CierreSemanalMaxAggregateInputType
  }

  export type CierreSemanalGroupByOutputType = {
    id: string
    numeroSemana: number
    mesAnio: string
    totalVentas: number
    numPedidos: number
    cierresJson: string
    cerradoMan: boolean
    createdAt: Date
    _count: CierreSemanalCountAggregateOutputType | null
    _avg: CierreSemanalAvgAggregateOutputType | null
    _sum: CierreSemanalSumAggregateOutputType | null
    _min: CierreSemanalMinAggregateOutputType | null
    _max: CierreSemanalMaxAggregateOutputType | null
  }

  type GetCierreSemanalGroupByPayload<T extends CierreSemanalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CierreSemanalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CierreSemanalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CierreSemanalGroupByOutputType[P]>
            : GetScalarType<T[P], CierreSemanalGroupByOutputType[P]>
        }
      >
    >


  export type CierreSemanalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroSemana?: boolean
    mesAnio?: boolean
    totalVentas?: boolean
    numPedidos?: boolean
    cierresJson?: boolean
    cerradoMan?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cierreSemanal"]>

  export type CierreSemanalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroSemana?: boolean
    mesAnio?: boolean
    totalVentas?: boolean
    numPedidos?: boolean
    cierresJson?: boolean
    cerradoMan?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cierreSemanal"]>

  export type CierreSemanalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroSemana?: boolean
    mesAnio?: boolean
    totalVentas?: boolean
    numPedidos?: boolean
    cierresJson?: boolean
    cerradoMan?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cierreSemanal"]>

  export type CierreSemanalSelectScalar = {
    id?: boolean
    numeroSemana?: boolean
    mesAnio?: boolean
    totalVentas?: boolean
    numPedidos?: boolean
    cierresJson?: boolean
    cerradoMan?: boolean
    createdAt?: boolean
  }

  export type CierreSemanalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numeroSemana" | "mesAnio" | "totalVentas" | "numPedidos" | "cierresJson" | "cerradoMan" | "createdAt", ExtArgs["result"]["cierreSemanal"]>

  export type $CierreSemanalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CierreSemanal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      numeroSemana: number
      mesAnio: string
      totalVentas: number
      numPedidos: number
      cierresJson: string
      cerradoMan: boolean
      createdAt: Date
    }, ExtArgs["result"]["cierreSemanal"]>
    composites: {}
  }

  type CierreSemanalGetPayload<S extends boolean | null | undefined | CierreSemanalDefaultArgs> = $Result.GetResult<Prisma.$CierreSemanalPayload, S>

  type CierreSemanalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CierreSemanalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CierreSemanalCountAggregateInputType | true
    }

  export interface CierreSemanalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CierreSemanal'], meta: { name: 'CierreSemanal' } }
    /**
     * Find zero or one CierreSemanal that matches the filter.
     * @param {CierreSemanalFindUniqueArgs} args - Arguments to find a CierreSemanal
     * @example
     * // Get one CierreSemanal
     * const cierreSemanal = await prisma.cierreSemanal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CierreSemanalFindUniqueArgs>(args: SelectSubset<T, CierreSemanalFindUniqueArgs<ExtArgs>>): Prisma__CierreSemanalClient<$Result.GetResult<Prisma.$CierreSemanalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CierreSemanal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CierreSemanalFindUniqueOrThrowArgs} args - Arguments to find a CierreSemanal
     * @example
     * // Get one CierreSemanal
     * const cierreSemanal = await prisma.cierreSemanal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CierreSemanalFindUniqueOrThrowArgs>(args: SelectSubset<T, CierreSemanalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CierreSemanalClient<$Result.GetResult<Prisma.$CierreSemanalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CierreSemanal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreSemanalFindFirstArgs} args - Arguments to find a CierreSemanal
     * @example
     * // Get one CierreSemanal
     * const cierreSemanal = await prisma.cierreSemanal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CierreSemanalFindFirstArgs>(args?: SelectSubset<T, CierreSemanalFindFirstArgs<ExtArgs>>): Prisma__CierreSemanalClient<$Result.GetResult<Prisma.$CierreSemanalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CierreSemanal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreSemanalFindFirstOrThrowArgs} args - Arguments to find a CierreSemanal
     * @example
     * // Get one CierreSemanal
     * const cierreSemanal = await prisma.cierreSemanal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CierreSemanalFindFirstOrThrowArgs>(args?: SelectSubset<T, CierreSemanalFindFirstOrThrowArgs<ExtArgs>>): Prisma__CierreSemanalClient<$Result.GetResult<Prisma.$CierreSemanalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CierreSemanals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreSemanalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CierreSemanals
     * const cierreSemanals = await prisma.cierreSemanal.findMany()
     * 
     * // Get first 10 CierreSemanals
     * const cierreSemanals = await prisma.cierreSemanal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cierreSemanalWithIdOnly = await prisma.cierreSemanal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CierreSemanalFindManyArgs>(args?: SelectSubset<T, CierreSemanalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CierreSemanalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CierreSemanal.
     * @param {CierreSemanalCreateArgs} args - Arguments to create a CierreSemanal.
     * @example
     * // Create one CierreSemanal
     * const CierreSemanal = await prisma.cierreSemanal.create({
     *   data: {
     *     // ... data to create a CierreSemanal
     *   }
     * })
     * 
     */
    create<T extends CierreSemanalCreateArgs>(args: SelectSubset<T, CierreSemanalCreateArgs<ExtArgs>>): Prisma__CierreSemanalClient<$Result.GetResult<Prisma.$CierreSemanalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CierreSemanals.
     * @param {CierreSemanalCreateManyArgs} args - Arguments to create many CierreSemanals.
     * @example
     * // Create many CierreSemanals
     * const cierreSemanal = await prisma.cierreSemanal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CierreSemanalCreateManyArgs>(args?: SelectSubset<T, CierreSemanalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CierreSemanals and returns the data saved in the database.
     * @param {CierreSemanalCreateManyAndReturnArgs} args - Arguments to create many CierreSemanals.
     * @example
     * // Create many CierreSemanals
     * const cierreSemanal = await prisma.cierreSemanal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CierreSemanals and only return the `id`
     * const cierreSemanalWithIdOnly = await prisma.cierreSemanal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CierreSemanalCreateManyAndReturnArgs>(args?: SelectSubset<T, CierreSemanalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CierreSemanalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CierreSemanal.
     * @param {CierreSemanalDeleteArgs} args - Arguments to delete one CierreSemanal.
     * @example
     * // Delete one CierreSemanal
     * const CierreSemanal = await prisma.cierreSemanal.delete({
     *   where: {
     *     // ... filter to delete one CierreSemanal
     *   }
     * })
     * 
     */
    delete<T extends CierreSemanalDeleteArgs>(args: SelectSubset<T, CierreSemanalDeleteArgs<ExtArgs>>): Prisma__CierreSemanalClient<$Result.GetResult<Prisma.$CierreSemanalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CierreSemanal.
     * @param {CierreSemanalUpdateArgs} args - Arguments to update one CierreSemanal.
     * @example
     * // Update one CierreSemanal
     * const cierreSemanal = await prisma.cierreSemanal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CierreSemanalUpdateArgs>(args: SelectSubset<T, CierreSemanalUpdateArgs<ExtArgs>>): Prisma__CierreSemanalClient<$Result.GetResult<Prisma.$CierreSemanalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CierreSemanals.
     * @param {CierreSemanalDeleteManyArgs} args - Arguments to filter CierreSemanals to delete.
     * @example
     * // Delete a few CierreSemanals
     * const { count } = await prisma.cierreSemanal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CierreSemanalDeleteManyArgs>(args?: SelectSubset<T, CierreSemanalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CierreSemanals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreSemanalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CierreSemanals
     * const cierreSemanal = await prisma.cierreSemanal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CierreSemanalUpdateManyArgs>(args: SelectSubset<T, CierreSemanalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CierreSemanals and returns the data updated in the database.
     * @param {CierreSemanalUpdateManyAndReturnArgs} args - Arguments to update many CierreSemanals.
     * @example
     * // Update many CierreSemanals
     * const cierreSemanal = await prisma.cierreSemanal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CierreSemanals and only return the `id`
     * const cierreSemanalWithIdOnly = await prisma.cierreSemanal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CierreSemanalUpdateManyAndReturnArgs>(args: SelectSubset<T, CierreSemanalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CierreSemanalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CierreSemanal.
     * @param {CierreSemanalUpsertArgs} args - Arguments to update or create a CierreSemanal.
     * @example
     * // Update or create a CierreSemanal
     * const cierreSemanal = await prisma.cierreSemanal.upsert({
     *   create: {
     *     // ... data to create a CierreSemanal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CierreSemanal we want to update
     *   }
     * })
     */
    upsert<T extends CierreSemanalUpsertArgs>(args: SelectSubset<T, CierreSemanalUpsertArgs<ExtArgs>>): Prisma__CierreSemanalClient<$Result.GetResult<Prisma.$CierreSemanalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CierreSemanals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreSemanalCountArgs} args - Arguments to filter CierreSemanals to count.
     * @example
     * // Count the number of CierreSemanals
     * const count = await prisma.cierreSemanal.count({
     *   where: {
     *     // ... the filter for the CierreSemanals we want to count
     *   }
     * })
    **/
    count<T extends CierreSemanalCountArgs>(
      args?: Subset<T, CierreSemanalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CierreSemanalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CierreSemanal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreSemanalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CierreSemanalAggregateArgs>(args: Subset<T, CierreSemanalAggregateArgs>): Prisma.PrismaPromise<GetCierreSemanalAggregateType<T>>

    /**
     * Group by CierreSemanal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreSemanalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CierreSemanalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CierreSemanalGroupByArgs['orderBy'] }
        : { orderBy?: CierreSemanalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CierreSemanalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCierreSemanalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CierreSemanal model
   */
  readonly fields: CierreSemanalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CierreSemanal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CierreSemanalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CierreSemanal model
   */
  interface CierreSemanalFieldRefs {
    readonly id: FieldRef<"CierreSemanal", 'String'>
    readonly numeroSemana: FieldRef<"CierreSemanal", 'Int'>
    readonly mesAnio: FieldRef<"CierreSemanal", 'String'>
    readonly totalVentas: FieldRef<"CierreSemanal", 'Float'>
    readonly numPedidos: FieldRef<"CierreSemanal", 'Int'>
    readonly cierresJson: FieldRef<"CierreSemanal", 'String'>
    readonly cerradoMan: FieldRef<"CierreSemanal", 'Boolean'>
    readonly createdAt: FieldRef<"CierreSemanal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CierreSemanal findUnique
   */
  export type CierreSemanalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreSemanal
     */
    select?: CierreSemanalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreSemanal
     */
    omit?: CierreSemanalOmit<ExtArgs> | null
    /**
     * Filter, which CierreSemanal to fetch.
     */
    where: CierreSemanalWhereUniqueInput
  }

  /**
   * CierreSemanal findUniqueOrThrow
   */
  export type CierreSemanalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreSemanal
     */
    select?: CierreSemanalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreSemanal
     */
    omit?: CierreSemanalOmit<ExtArgs> | null
    /**
     * Filter, which CierreSemanal to fetch.
     */
    where: CierreSemanalWhereUniqueInput
  }

  /**
   * CierreSemanal findFirst
   */
  export type CierreSemanalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreSemanal
     */
    select?: CierreSemanalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreSemanal
     */
    omit?: CierreSemanalOmit<ExtArgs> | null
    /**
     * Filter, which CierreSemanal to fetch.
     */
    where?: CierreSemanalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CierreSemanals to fetch.
     */
    orderBy?: CierreSemanalOrderByWithRelationInput | CierreSemanalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CierreSemanals.
     */
    cursor?: CierreSemanalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CierreSemanals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CierreSemanals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CierreSemanals.
     */
    distinct?: CierreSemanalScalarFieldEnum | CierreSemanalScalarFieldEnum[]
  }

  /**
   * CierreSemanal findFirstOrThrow
   */
  export type CierreSemanalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreSemanal
     */
    select?: CierreSemanalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreSemanal
     */
    omit?: CierreSemanalOmit<ExtArgs> | null
    /**
     * Filter, which CierreSemanal to fetch.
     */
    where?: CierreSemanalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CierreSemanals to fetch.
     */
    orderBy?: CierreSemanalOrderByWithRelationInput | CierreSemanalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CierreSemanals.
     */
    cursor?: CierreSemanalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CierreSemanals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CierreSemanals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CierreSemanals.
     */
    distinct?: CierreSemanalScalarFieldEnum | CierreSemanalScalarFieldEnum[]
  }

  /**
   * CierreSemanal findMany
   */
  export type CierreSemanalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreSemanal
     */
    select?: CierreSemanalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreSemanal
     */
    omit?: CierreSemanalOmit<ExtArgs> | null
    /**
     * Filter, which CierreSemanals to fetch.
     */
    where?: CierreSemanalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CierreSemanals to fetch.
     */
    orderBy?: CierreSemanalOrderByWithRelationInput | CierreSemanalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CierreSemanals.
     */
    cursor?: CierreSemanalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CierreSemanals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CierreSemanals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CierreSemanals.
     */
    distinct?: CierreSemanalScalarFieldEnum | CierreSemanalScalarFieldEnum[]
  }

  /**
   * CierreSemanal create
   */
  export type CierreSemanalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreSemanal
     */
    select?: CierreSemanalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreSemanal
     */
    omit?: CierreSemanalOmit<ExtArgs> | null
    /**
     * The data needed to create a CierreSemanal.
     */
    data: XOR<CierreSemanalCreateInput, CierreSemanalUncheckedCreateInput>
  }

  /**
   * CierreSemanal createMany
   */
  export type CierreSemanalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CierreSemanals.
     */
    data: CierreSemanalCreateManyInput | CierreSemanalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CierreSemanal createManyAndReturn
   */
  export type CierreSemanalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreSemanal
     */
    select?: CierreSemanalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CierreSemanal
     */
    omit?: CierreSemanalOmit<ExtArgs> | null
    /**
     * The data used to create many CierreSemanals.
     */
    data: CierreSemanalCreateManyInput | CierreSemanalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CierreSemanal update
   */
  export type CierreSemanalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreSemanal
     */
    select?: CierreSemanalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreSemanal
     */
    omit?: CierreSemanalOmit<ExtArgs> | null
    /**
     * The data needed to update a CierreSemanal.
     */
    data: XOR<CierreSemanalUpdateInput, CierreSemanalUncheckedUpdateInput>
    /**
     * Choose, which CierreSemanal to update.
     */
    where: CierreSemanalWhereUniqueInput
  }

  /**
   * CierreSemanal updateMany
   */
  export type CierreSemanalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CierreSemanals.
     */
    data: XOR<CierreSemanalUpdateManyMutationInput, CierreSemanalUncheckedUpdateManyInput>
    /**
     * Filter which CierreSemanals to update
     */
    where?: CierreSemanalWhereInput
    /**
     * Limit how many CierreSemanals to update.
     */
    limit?: number
  }

  /**
   * CierreSemanal updateManyAndReturn
   */
  export type CierreSemanalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreSemanal
     */
    select?: CierreSemanalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CierreSemanal
     */
    omit?: CierreSemanalOmit<ExtArgs> | null
    /**
     * The data used to update CierreSemanals.
     */
    data: XOR<CierreSemanalUpdateManyMutationInput, CierreSemanalUncheckedUpdateManyInput>
    /**
     * Filter which CierreSemanals to update
     */
    where?: CierreSemanalWhereInput
    /**
     * Limit how many CierreSemanals to update.
     */
    limit?: number
  }

  /**
   * CierreSemanal upsert
   */
  export type CierreSemanalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreSemanal
     */
    select?: CierreSemanalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreSemanal
     */
    omit?: CierreSemanalOmit<ExtArgs> | null
    /**
     * The filter to search for the CierreSemanal to update in case it exists.
     */
    where: CierreSemanalWhereUniqueInput
    /**
     * In case the CierreSemanal found by the `where` argument doesn't exist, create a new CierreSemanal with this data.
     */
    create: XOR<CierreSemanalCreateInput, CierreSemanalUncheckedCreateInput>
    /**
     * In case the CierreSemanal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CierreSemanalUpdateInput, CierreSemanalUncheckedUpdateInput>
  }

  /**
   * CierreSemanal delete
   */
  export type CierreSemanalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreSemanal
     */
    select?: CierreSemanalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreSemanal
     */
    omit?: CierreSemanalOmit<ExtArgs> | null
    /**
     * Filter which CierreSemanal to delete.
     */
    where: CierreSemanalWhereUniqueInput
  }

  /**
   * CierreSemanal deleteMany
   */
  export type CierreSemanalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CierreSemanals to delete
     */
    where?: CierreSemanalWhereInput
    /**
     * Limit how many CierreSemanals to delete.
     */
    limit?: number
  }

  /**
   * CierreSemanal without action
   */
  export type CierreSemanalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreSemanal
     */
    select?: CierreSemanalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreSemanal
     */
    omit?: CierreSemanalOmit<ExtArgs> | null
  }


  /**
   * Model CierreMensual
   */

  export type AggregateCierreMensual = {
    _count: CierreMensualCountAggregateOutputType | null
    _avg: CierreMensualAvgAggregateOutputType | null
    _sum: CierreMensualSumAggregateOutputType | null
    _min: CierreMensualMinAggregateOutputType | null
    _max: CierreMensualMaxAggregateOutputType | null
  }

  export type CierreMensualAvgAggregateOutputType = {
    totalVentas: number | null
    numCierres: number | null
  }

  export type CierreMensualSumAggregateOutputType = {
    totalVentas: number | null
    numCierres: number | null
  }

  export type CierreMensualMinAggregateOutputType = {
    id: string | null
    mesAnio: string | null
    totalVentas: number | null
    numCierres: number | null
    cierresJson: string | null
    createdAt: Date | null
  }

  export type CierreMensualMaxAggregateOutputType = {
    id: string | null
    mesAnio: string | null
    totalVentas: number | null
    numCierres: number | null
    cierresJson: string | null
    createdAt: Date | null
  }

  export type CierreMensualCountAggregateOutputType = {
    id: number
    mesAnio: number
    totalVentas: number
    numCierres: number
    cierresJson: number
    createdAt: number
    _all: number
  }


  export type CierreMensualAvgAggregateInputType = {
    totalVentas?: true
    numCierres?: true
  }

  export type CierreMensualSumAggregateInputType = {
    totalVentas?: true
    numCierres?: true
  }

  export type CierreMensualMinAggregateInputType = {
    id?: true
    mesAnio?: true
    totalVentas?: true
    numCierres?: true
    cierresJson?: true
    createdAt?: true
  }

  export type CierreMensualMaxAggregateInputType = {
    id?: true
    mesAnio?: true
    totalVentas?: true
    numCierres?: true
    cierresJson?: true
    createdAt?: true
  }

  export type CierreMensualCountAggregateInputType = {
    id?: true
    mesAnio?: true
    totalVentas?: true
    numCierres?: true
    cierresJson?: true
    createdAt?: true
    _all?: true
  }

  export type CierreMensualAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CierreMensual to aggregate.
     */
    where?: CierreMensualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CierreMensuals to fetch.
     */
    orderBy?: CierreMensualOrderByWithRelationInput | CierreMensualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CierreMensualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CierreMensuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CierreMensuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CierreMensuals
    **/
    _count?: true | CierreMensualCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CierreMensualAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CierreMensualSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CierreMensualMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CierreMensualMaxAggregateInputType
  }

  export type GetCierreMensualAggregateType<T extends CierreMensualAggregateArgs> = {
        [P in keyof T & keyof AggregateCierreMensual]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCierreMensual[P]>
      : GetScalarType<T[P], AggregateCierreMensual[P]>
  }




  export type CierreMensualGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CierreMensualWhereInput
    orderBy?: CierreMensualOrderByWithAggregationInput | CierreMensualOrderByWithAggregationInput[]
    by: CierreMensualScalarFieldEnum[] | CierreMensualScalarFieldEnum
    having?: CierreMensualScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CierreMensualCountAggregateInputType | true
    _avg?: CierreMensualAvgAggregateInputType
    _sum?: CierreMensualSumAggregateInputType
    _min?: CierreMensualMinAggregateInputType
    _max?: CierreMensualMaxAggregateInputType
  }

  export type CierreMensualGroupByOutputType = {
    id: string
    mesAnio: string
    totalVentas: number
    numCierres: number
    cierresJson: string
    createdAt: Date
    _count: CierreMensualCountAggregateOutputType | null
    _avg: CierreMensualAvgAggregateOutputType | null
    _sum: CierreMensualSumAggregateOutputType | null
    _min: CierreMensualMinAggregateOutputType | null
    _max: CierreMensualMaxAggregateOutputType | null
  }

  type GetCierreMensualGroupByPayload<T extends CierreMensualGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CierreMensualGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CierreMensualGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CierreMensualGroupByOutputType[P]>
            : GetScalarType<T[P], CierreMensualGroupByOutputType[P]>
        }
      >
    >


  export type CierreMensualSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mesAnio?: boolean
    totalVentas?: boolean
    numCierres?: boolean
    cierresJson?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cierreMensual"]>

  export type CierreMensualSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mesAnio?: boolean
    totalVentas?: boolean
    numCierres?: boolean
    cierresJson?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cierreMensual"]>

  export type CierreMensualSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mesAnio?: boolean
    totalVentas?: boolean
    numCierres?: boolean
    cierresJson?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cierreMensual"]>

  export type CierreMensualSelectScalar = {
    id?: boolean
    mesAnio?: boolean
    totalVentas?: boolean
    numCierres?: boolean
    cierresJson?: boolean
    createdAt?: boolean
  }

  export type CierreMensualOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mesAnio" | "totalVentas" | "numCierres" | "cierresJson" | "createdAt", ExtArgs["result"]["cierreMensual"]>

  export type $CierreMensualPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CierreMensual"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mesAnio: string
      totalVentas: number
      numCierres: number
      cierresJson: string
      createdAt: Date
    }, ExtArgs["result"]["cierreMensual"]>
    composites: {}
  }

  type CierreMensualGetPayload<S extends boolean | null | undefined | CierreMensualDefaultArgs> = $Result.GetResult<Prisma.$CierreMensualPayload, S>

  type CierreMensualCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CierreMensualFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CierreMensualCountAggregateInputType | true
    }

  export interface CierreMensualDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CierreMensual'], meta: { name: 'CierreMensual' } }
    /**
     * Find zero or one CierreMensual that matches the filter.
     * @param {CierreMensualFindUniqueArgs} args - Arguments to find a CierreMensual
     * @example
     * // Get one CierreMensual
     * const cierreMensual = await prisma.cierreMensual.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CierreMensualFindUniqueArgs>(args: SelectSubset<T, CierreMensualFindUniqueArgs<ExtArgs>>): Prisma__CierreMensualClient<$Result.GetResult<Prisma.$CierreMensualPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CierreMensual that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CierreMensualFindUniqueOrThrowArgs} args - Arguments to find a CierreMensual
     * @example
     * // Get one CierreMensual
     * const cierreMensual = await prisma.cierreMensual.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CierreMensualFindUniqueOrThrowArgs>(args: SelectSubset<T, CierreMensualFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CierreMensualClient<$Result.GetResult<Prisma.$CierreMensualPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CierreMensual that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreMensualFindFirstArgs} args - Arguments to find a CierreMensual
     * @example
     * // Get one CierreMensual
     * const cierreMensual = await prisma.cierreMensual.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CierreMensualFindFirstArgs>(args?: SelectSubset<T, CierreMensualFindFirstArgs<ExtArgs>>): Prisma__CierreMensualClient<$Result.GetResult<Prisma.$CierreMensualPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CierreMensual that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreMensualFindFirstOrThrowArgs} args - Arguments to find a CierreMensual
     * @example
     * // Get one CierreMensual
     * const cierreMensual = await prisma.cierreMensual.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CierreMensualFindFirstOrThrowArgs>(args?: SelectSubset<T, CierreMensualFindFirstOrThrowArgs<ExtArgs>>): Prisma__CierreMensualClient<$Result.GetResult<Prisma.$CierreMensualPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CierreMensuals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreMensualFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CierreMensuals
     * const cierreMensuals = await prisma.cierreMensual.findMany()
     * 
     * // Get first 10 CierreMensuals
     * const cierreMensuals = await prisma.cierreMensual.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cierreMensualWithIdOnly = await prisma.cierreMensual.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CierreMensualFindManyArgs>(args?: SelectSubset<T, CierreMensualFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CierreMensualPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CierreMensual.
     * @param {CierreMensualCreateArgs} args - Arguments to create a CierreMensual.
     * @example
     * // Create one CierreMensual
     * const CierreMensual = await prisma.cierreMensual.create({
     *   data: {
     *     // ... data to create a CierreMensual
     *   }
     * })
     * 
     */
    create<T extends CierreMensualCreateArgs>(args: SelectSubset<T, CierreMensualCreateArgs<ExtArgs>>): Prisma__CierreMensualClient<$Result.GetResult<Prisma.$CierreMensualPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CierreMensuals.
     * @param {CierreMensualCreateManyArgs} args - Arguments to create many CierreMensuals.
     * @example
     * // Create many CierreMensuals
     * const cierreMensual = await prisma.cierreMensual.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CierreMensualCreateManyArgs>(args?: SelectSubset<T, CierreMensualCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CierreMensuals and returns the data saved in the database.
     * @param {CierreMensualCreateManyAndReturnArgs} args - Arguments to create many CierreMensuals.
     * @example
     * // Create many CierreMensuals
     * const cierreMensual = await prisma.cierreMensual.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CierreMensuals and only return the `id`
     * const cierreMensualWithIdOnly = await prisma.cierreMensual.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CierreMensualCreateManyAndReturnArgs>(args?: SelectSubset<T, CierreMensualCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CierreMensualPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CierreMensual.
     * @param {CierreMensualDeleteArgs} args - Arguments to delete one CierreMensual.
     * @example
     * // Delete one CierreMensual
     * const CierreMensual = await prisma.cierreMensual.delete({
     *   where: {
     *     // ... filter to delete one CierreMensual
     *   }
     * })
     * 
     */
    delete<T extends CierreMensualDeleteArgs>(args: SelectSubset<T, CierreMensualDeleteArgs<ExtArgs>>): Prisma__CierreMensualClient<$Result.GetResult<Prisma.$CierreMensualPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CierreMensual.
     * @param {CierreMensualUpdateArgs} args - Arguments to update one CierreMensual.
     * @example
     * // Update one CierreMensual
     * const cierreMensual = await prisma.cierreMensual.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CierreMensualUpdateArgs>(args: SelectSubset<T, CierreMensualUpdateArgs<ExtArgs>>): Prisma__CierreMensualClient<$Result.GetResult<Prisma.$CierreMensualPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CierreMensuals.
     * @param {CierreMensualDeleteManyArgs} args - Arguments to filter CierreMensuals to delete.
     * @example
     * // Delete a few CierreMensuals
     * const { count } = await prisma.cierreMensual.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CierreMensualDeleteManyArgs>(args?: SelectSubset<T, CierreMensualDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CierreMensuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreMensualUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CierreMensuals
     * const cierreMensual = await prisma.cierreMensual.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CierreMensualUpdateManyArgs>(args: SelectSubset<T, CierreMensualUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CierreMensuals and returns the data updated in the database.
     * @param {CierreMensualUpdateManyAndReturnArgs} args - Arguments to update many CierreMensuals.
     * @example
     * // Update many CierreMensuals
     * const cierreMensual = await prisma.cierreMensual.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CierreMensuals and only return the `id`
     * const cierreMensualWithIdOnly = await prisma.cierreMensual.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CierreMensualUpdateManyAndReturnArgs>(args: SelectSubset<T, CierreMensualUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CierreMensualPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CierreMensual.
     * @param {CierreMensualUpsertArgs} args - Arguments to update or create a CierreMensual.
     * @example
     * // Update or create a CierreMensual
     * const cierreMensual = await prisma.cierreMensual.upsert({
     *   create: {
     *     // ... data to create a CierreMensual
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CierreMensual we want to update
     *   }
     * })
     */
    upsert<T extends CierreMensualUpsertArgs>(args: SelectSubset<T, CierreMensualUpsertArgs<ExtArgs>>): Prisma__CierreMensualClient<$Result.GetResult<Prisma.$CierreMensualPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CierreMensuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreMensualCountArgs} args - Arguments to filter CierreMensuals to count.
     * @example
     * // Count the number of CierreMensuals
     * const count = await prisma.cierreMensual.count({
     *   where: {
     *     // ... the filter for the CierreMensuals we want to count
     *   }
     * })
    **/
    count<T extends CierreMensualCountArgs>(
      args?: Subset<T, CierreMensualCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CierreMensualCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CierreMensual.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreMensualAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CierreMensualAggregateArgs>(args: Subset<T, CierreMensualAggregateArgs>): Prisma.PrismaPromise<GetCierreMensualAggregateType<T>>

    /**
     * Group by CierreMensual.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreMensualGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CierreMensualGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CierreMensualGroupByArgs['orderBy'] }
        : { orderBy?: CierreMensualGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CierreMensualGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCierreMensualGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CierreMensual model
   */
  readonly fields: CierreMensualFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CierreMensual.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CierreMensualClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CierreMensual model
   */
  interface CierreMensualFieldRefs {
    readonly id: FieldRef<"CierreMensual", 'String'>
    readonly mesAnio: FieldRef<"CierreMensual", 'String'>
    readonly totalVentas: FieldRef<"CierreMensual", 'Float'>
    readonly numCierres: FieldRef<"CierreMensual", 'Int'>
    readonly cierresJson: FieldRef<"CierreMensual", 'String'>
    readonly createdAt: FieldRef<"CierreMensual", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CierreMensual findUnique
   */
  export type CierreMensualFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreMensual
     */
    select?: CierreMensualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreMensual
     */
    omit?: CierreMensualOmit<ExtArgs> | null
    /**
     * Filter, which CierreMensual to fetch.
     */
    where: CierreMensualWhereUniqueInput
  }

  /**
   * CierreMensual findUniqueOrThrow
   */
  export type CierreMensualFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreMensual
     */
    select?: CierreMensualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreMensual
     */
    omit?: CierreMensualOmit<ExtArgs> | null
    /**
     * Filter, which CierreMensual to fetch.
     */
    where: CierreMensualWhereUniqueInput
  }

  /**
   * CierreMensual findFirst
   */
  export type CierreMensualFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreMensual
     */
    select?: CierreMensualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreMensual
     */
    omit?: CierreMensualOmit<ExtArgs> | null
    /**
     * Filter, which CierreMensual to fetch.
     */
    where?: CierreMensualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CierreMensuals to fetch.
     */
    orderBy?: CierreMensualOrderByWithRelationInput | CierreMensualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CierreMensuals.
     */
    cursor?: CierreMensualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CierreMensuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CierreMensuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CierreMensuals.
     */
    distinct?: CierreMensualScalarFieldEnum | CierreMensualScalarFieldEnum[]
  }

  /**
   * CierreMensual findFirstOrThrow
   */
  export type CierreMensualFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreMensual
     */
    select?: CierreMensualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreMensual
     */
    omit?: CierreMensualOmit<ExtArgs> | null
    /**
     * Filter, which CierreMensual to fetch.
     */
    where?: CierreMensualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CierreMensuals to fetch.
     */
    orderBy?: CierreMensualOrderByWithRelationInput | CierreMensualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CierreMensuals.
     */
    cursor?: CierreMensualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CierreMensuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CierreMensuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CierreMensuals.
     */
    distinct?: CierreMensualScalarFieldEnum | CierreMensualScalarFieldEnum[]
  }

  /**
   * CierreMensual findMany
   */
  export type CierreMensualFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreMensual
     */
    select?: CierreMensualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreMensual
     */
    omit?: CierreMensualOmit<ExtArgs> | null
    /**
     * Filter, which CierreMensuals to fetch.
     */
    where?: CierreMensualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CierreMensuals to fetch.
     */
    orderBy?: CierreMensualOrderByWithRelationInput | CierreMensualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CierreMensuals.
     */
    cursor?: CierreMensualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CierreMensuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CierreMensuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CierreMensuals.
     */
    distinct?: CierreMensualScalarFieldEnum | CierreMensualScalarFieldEnum[]
  }

  /**
   * CierreMensual create
   */
  export type CierreMensualCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreMensual
     */
    select?: CierreMensualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreMensual
     */
    omit?: CierreMensualOmit<ExtArgs> | null
    /**
     * The data needed to create a CierreMensual.
     */
    data: XOR<CierreMensualCreateInput, CierreMensualUncheckedCreateInput>
  }

  /**
   * CierreMensual createMany
   */
  export type CierreMensualCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CierreMensuals.
     */
    data: CierreMensualCreateManyInput | CierreMensualCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CierreMensual createManyAndReturn
   */
  export type CierreMensualCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreMensual
     */
    select?: CierreMensualSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CierreMensual
     */
    omit?: CierreMensualOmit<ExtArgs> | null
    /**
     * The data used to create many CierreMensuals.
     */
    data: CierreMensualCreateManyInput | CierreMensualCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CierreMensual update
   */
  export type CierreMensualUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreMensual
     */
    select?: CierreMensualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreMensual
     */
    omit?: CierreMensualOmit<ExtArgs> | null
    /**
     * The data needed to update a CierreMensual.
     */
    data: XOR<CierreMensualUpdateInput, CierreMensualUncheckedUpdateInput>
    /**
     * Choose, which CierreMensual to update.
     */
    where: CierreMensualWhereUniqueInput
  }

  /**
   * CierreMensual updateMany
   */
  export type CierreMensualUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CierreMensuals.
     */
    data: XOR<CierreMensualUpdateManyMutationInput, CierreMensualUncheckedUpdateManyInput>
    /**
     * Filter which CierreMensuals to update
     */
    where?: CierreMensualWhereInput
    /**
     * Limit how many CierreMensuals to update.
     */
    limit?: number
  }

  /**
   * CierreMensual updateManyAndReturn
   */
  export type CierreMensualUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreMensual
     */
    select?: CierreMensualSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CierreMensual
     */
    omit?: CierreMensualOmit<ExtArgs> | null
    /**
     * The data used to update CierreMensuals.
     */
    data: XOR<CierreMensualUpdateManyMutationInput, CierreMensualUncheckedUpdateManyInput>
    /**
     * Filter which CierreMensuals to update
     */
    where?: CierreMensualWhereInput
    /**
     * Limit how many CierreMensuals to update.
     */
    limit?: number
  }

  /**
   * CierreMensual upsert
   */
  export type CierreMensualUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreMensual
     */
    select?: CierreMensualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreMensual
     */
    omit?: CierreMensualOmit<ExtArgs> | null
    /**
     * The filter to search for the CierreMensual to update in case it exists.
     */
    where: CierreMensualWhereUniqueInput
    /**
     * In case the CierreMensual found by the `where` argument doesn't exist, create a new CierreMensual with this data.
     */
    create: XOR<CierreMensualCreateInput, CierreMensualUncheckedCreateInput>
    /**
     * In case the CierreMensual was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CierreMensualUpdateInput, CierreMensualUncheckedUpdateInput>
  }

  /**
   * CierreMensual delete
   */
  export type CierreMensualDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreMensual
     */
    select?: CierreMensualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreMensual
     */
    omit?: CierreMensualOmit<ExtArgs> | null
    /**
     * Filter which CierreMensual to delete.
     */
    where: CierreMensualWhereUniqueInput
  }

  /**
   * CierreMensual deleteMany
   */
  export type CierreMensualDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CierreMensuals to delete
     */
    where?: CierreMensualWhereInput
    /**
     * Limit how many CierreMensuals to delete.
     */
    limit?: number
  }

  /**
   * CierreMensual without action
   */
  export type CierreMensualDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreMensual
     */
    select?: CierreMensualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreMensual
     */
    omit?: CierreMensualOmit<ExtArgs> | null
  }


  /**
   * Model BannerOferta
   */

  export type AggregateBannerOferta = {
    _count: BannerOfertaCountAggregateOutputType | null
    _min: BannerOfertaMinAggregateOutputType | null
    _max: BannerOfertaMaxAggregateOutputType | null
  }

  export type BannerOfertaMinAggregateOutputType = {
    id: string | null
    imagen: string | null
    descripcion: string | null
    vigencia: Date | null
    createdAt: Date | null
  }

  export type BannerOfertaMaxAggregateOutputType = {
    id: string | null
    imagen: string | null
    descripcion: string | null
    vigencia: Date | null
    createdAt: Date | null
  }

  export type BannerOfertaCountAggregateOutputType = {
    id: number
    imagen: number
    descripcion: number
    vigencia: number
    metodosPago: number
    createdAt: number
    _all: number
  }


  export type BannerOfertaMinAggregateInputType = {
    id?: true
    imagen?: true
    descripcion?: true
    vigencia?: true
    createdAt?: true
  }

  export type BannerOfertaMaxAggregateInputType = {
    id?: true
    imagen?: true
    descripcion?: true
    vigencia?: true
    createdAt?: true
  }

  export type BannerOfertaCountAggregateInputType = {
    id?: true
    imagen?: true
    descripcion?: true
    vigencia?: true
    metodosPago?: true
    createdAt?: true
    _all?: true
  }

  export type BannerOfertaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BannerOferta to aggregate.
     */
    where?: BannerOfertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BannerOfertas to fetch.
     */
    orderBy?: BannerOfertaOrderByWithRelationInput | BannerOfertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BannerOfertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BannerOfertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BannerOfertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BannerOfertas
    **/
    _count?: true | BannerOfertaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerOfertaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerOfertaMaxAggregateInputType
  }

  export type GetBannerOfertaAggregateType<T extends BannerOfertaAggregateArgs> = {
        [P in keyof T & keyof AggregateBannerOferta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBannerOferta[P]>
      : GetScalarType<T[P], AggregateBannerOferta[P]>
  }




  export type BannerOfertaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerOfertaWhereInput
    orderBy?: BannerOfertaOrderByWithAggregationInput | BannerOfertaOrderByWithAggregationInput[]
    by: BannerOfertaScalarFieldEnum[] | BannerOfertaScalarFieldEnum
    having?: BannerOfertaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerOfertaCountAggregateInputType | true
    _min?: BannerOfertaMinAggregateInputType
    _max?: BannerOfertaMaxAggregateInputType
  }

  export type BannerOfertaGroupByOutputType = {
    id: string
    imagen: string
    descripcion: string
    vigencia: Date
    metodosPago: string[]
    createdAt: Date
    _count: BannerOfertaCountAggregateOutputType | null
    _min: BannerOfertaMinAggregateOutputType | null
    _max: BannerOfertaMaxAggregateOutputType | null
  }

  type GetBannerOfertaGroupByPayload<T extends BannerOfertaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannerOfertaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerOfertaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerOfertaGroupByOutputType[P]>
            : GetScalarType<T[P], BannerOfertaGroupByOutputType[P]>
        }
      >
    >


  export type BannerOfertaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imagen?: boolean
    descripcion?: boolean
    vigencia?: boolean
    metodosPago?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["bannerOferta"]>

  export type BannerOfertaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imagen?: boolean
    descripcion?: boolean
    vigencia?: boolean
    metodosPago?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["bannerOferta"]>

  export type BannerOfertaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imagen?: boolean
    descripcion?: boolean
    vigencia?: boolean
    metodosPago?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["bannerOferta"]>

  export type BannerOfertaSelectScalar = {
    id?: boolean
    imagen?: boolean
    descripcion?: boolean
    vigencia?: boolean
    metodosPago?: boolean
    createdAt?: boolean
  }

  export type BannerOfertaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imagen" | "descripcion" | "vigencia" | "metodosPago" | "createdAt", ExtArgs["result"]["bannerOferta"]>

  export type $BannerOfertaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BannerOferta"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imagen: string
      descripcion: string
      vigencia: Date
      metodosPago: string[]
      createdAt: Date
    }, ExtArgs["result"]["bannerOferta"]>
    composites: {}
  }

  type BannerOfertaGetPayload<S extends boolean | null | undefined | BannerOfertaDefaultArgs> = $Result.GetResult<Prisma.$BannerOfertaPayload, S>

  type BannerOfertaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BannerOfertaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BannerOfertaCountAggregateInputType | true
    }

  export interface BannerOfertaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BannerOferta'], meta: { name: 'BannerOferta' } }
    /**
     * Find zero or one BannerOferta that matches the filter.
     * @param {BannerOfertaFindUniqueArgs} args - Arguments to find a BannerOferta
     * @example
     * // Get one BannerOferta
     * const bannerOferta = await prisma.bannerOferta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannerOfertaFindUniqueArgs>(args: SelectSubset<T, BannerOfertaFindUniqueArgs<ExtArgs>>): Prisma__BannerOfertaClient<$Result.GetResult<Prisma.$BannerOfertaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BannerOferta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BannerOfertaFindUniqueOrThrowArgs} args - Arguments to find a BannerOferta
     * @example
     * // Get one BannerOferta
     * const bannerOferta = await prisma.bannerOferta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannerOfertaFindUniqueOrThrowArgs>(args: SelectSubset<T, BannerOfertaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BannerOfertaClient<$Result.GetResult<Prisma.$BannerOfertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BannerOferta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerOfertaFindFirstArgs} args - Arguments to find a BannerOferta
     * @example
     * // Get one BannerOferta
     * const bannerOferta = await prisma.bannerOferta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannerOfertaFindFirstArgs>(args?: SelectSubset<T, BannerOfertaFindFirstArgs<ExtArgs>>): Prisma__BannerOfertaClient<$Result.GetResult<Prisma.$BannerOfertaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BannerOferta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerOfertaFindFirstOrThrowArgs} args - Arguments to find a BannerOferta
     * @example
     * // Get one BannerOferta
     * const bannerOferta = await prisma.bannerOferta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannerOfertaFindFirstOrThrowArgs>(args?: SelectSubset<T, BannerOfertaFindFirstOrThrowArgs<ExtArgs>>): Prisma__BannerOfertaClient<$Result.GetResult<Prisma.$BannerOfertaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BannerOfertas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerOfertaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BannerOfertas
     * const bannerOfertas = await prisma.bannerOferta.findMany()
     * 
     * // Get first 10 BannerOfertas
     * const bannerOfertas = await prisma.bannerOferta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannerOfertaWithIdOnly = await prisma.bannerOferta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BannerOfertaFindManyArgs>(args?: SelectSubset<T, BannerOfertaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerOfertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BannerOferta.
     * @param {BannerOfertaCreateArgs} args - Arguments to create a BannerOferta.
     * @example
     * // Create one BannerOferta
     * const BannerOferta = await prisma.bannerOferta.create({
     *   data: {
     *     // ... data to create a BannerOferta
     *   }
     * })
     * 
     */
    create<T extends BannerOfertaCreateArgs>(args: SelectSubset<T, BannerOfertaCreateArgs<ExtArgs>>): Prisma__BannerOfertaClient<$Result.GetResult<Prisma.$BannerOfertaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BannerOfertas.
     * @param {BannerOfertaCreateManyArgs} args - Arguments to create many BannerOfertas.
     * @example
     * // Create many BannerOfertas
     * const bannerOferta = await prisma.bannerOferta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BannerOfertaCreateManyArgs>(args?: SelectSubset<T, BannerOfertaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BannerOfertas and returns the data saved in the database.
     * @param {BannerOfertaCreateManyAndReturnArgs} args - Arguments to create many BannerOfertas.
     * @example
     * // Create many BannerOfertas
     * const bannerOferta = await prisma.bannerOferta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BannerOfertas and only return the `id`
     * const bannerOfertaWithIdOnly = await prisma.bannerOferta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BannerOfertaCreateManyAndReturnArgs>(args?: SelectSubset<T, BannerOfertaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerOfertaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BannerOferta.
     * @param {BannerOfertaDeleteArgs} args - Arguments to delete one BannerOferta.
     * @example
     * // Delete one BannerOferta
     * const BannerOferta = await prisma.bannerOferta.delete({
     *   where: {
     *     // ... filter to delete one BannerOferta
     *   }
     * })
     * 
     */
    delete<T extends BannerOfertaDeleteArgs>(args: SelectSubset<T, BannerOfertaDeleteArgs<ExtArgs>>): Prisma__BannerOfertaClient<$Result.GetResult<Prisma.$BannerOfertaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BannerOferta.
     * @param {BannerOfertaUpdateArgs} args - Arguments to update one BannerOferta.
     * @example
     * // Update one BannerOferta
     * const bannerOferta = await prisma.bannerOferta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BannerOfertaUpdateArgs>(args: SelectSubset<T, BannerOfertaUpdateArgs<ExtArgs>>): Prisma__BannerOfertaClient<$Result.GetResult<Prisma.$BannerOfertaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BannerOfertas.
     * @param {BannerOfertaDeleteManyArgs} args - Arguments to filter BannerOfertas to delete.
     * @example
     * // Delete a few BannerOfertas
     * const { count } = await prisma.bannerOferta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BannerOfertaDeleteManyArgs>(args?: SelectSubset<T, BannerOfertaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BannerOfertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerOfertaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BannerOfertas
     * const bannerOferta = await prisma.bannerOferta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BannerOfertaUpdateManyArgs>(args: SelectSubset<T, BannerOfertaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BannerOfertas and returns the data updated in the database.
     * @param {BannerOfertaUpdateManyAndReturnArgs} args - Arguments to update many BannerOfertas.
     * @example
     * // Update many BannerOfertas
     * const bannerOferta = await prisma.bannerOferta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BannerOfertas and only return the `id`
     * const bannerOfertaWithIdOnly = await prisma.bannerOferta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BannerOfertaUpdateManyAndReturnArgs>(args: SelectSubset<T, BannerOfertaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerOfertaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BannerOferta.
     * @param {BannerOfertaUpsertArgs} args - Arguments to update or create a BannerOferta.
     * @example
     * // Update or create a BannerOferta
     * const bannerOferta = await prisma.bannerOferta.upsert({
     *   create: {
     *     // ... data to create a BannerOferta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BannerOferta we want to update
     *   }
     * })
     */
    upsert<T extends BannerOfertaUpsertArgs>(args: SelectSubset<T, BannerOfertaUpsertArgs<ExtArgs>>): Prisma__BannerOfertaClient<$Result.GetResult<Prisma.$BannerOfertaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BannerOfertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerOfertaCountArgs} args - Arguments to filter BannerOfertas to count.
     * @example
     * // Count the number of BannerOfertas
     * const count = await prisma.bannerOferta.count({
     *   where: {
     *     // ... the filter for the BannerOfertas we want to count
     *   }
     * })
    **/
    count<T extends BannerOfertaCountArgs>(
      args?: Subset<T, BannerOfertaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerOfertaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BannerOferta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerOfertaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BannerOfertaAggregateArgs>(args: Subset<T, BannerOfertaAggregateArgs>): Prisma.PrismaPromise<GetBannerOfertaAggregateType<T>>

    /**
     * Group by BannerOferta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerOfertaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BannerOfertaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannerOfertaGroupByArgs['orderBy'] }
        : { orderBy?: BannerOfertaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BannerOfertaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerOfertaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BannerOferta model
   */
  readonly fields: BannerOfertaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BannerOferta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BannerOfertaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BannerOferta model
   */
  interface BannerOfertaFieldRefs {
    readonly id: FieldRef<"BannerOferta", 'String'>
    readonly imagen: FieldRef<"BannerOferta", 'String'>
    readonly descripcion: FieldRef<"BannerOferta", 'String'>
    readonly vigencia: FieldRef<"BannerOferta", 'DateTime'>
    readonly metodosPago: FieldRef<"BannerOferta", 'String[]'>
    readonly createdAt: FieldRef<"BannerOferta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BannerOferta findUnique
   */
  export type BannerOfertaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerOferta
     */
    select?: BannerOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerOferta
     */
    omit?: BannerOfertaOmit<ExtArgs> | null
    /**
     * Filter, which BannerOferta to fetch.
     */
    where: BannerOfertaWhereUniqueInput
  }

  /**
   * BannerOferta findUniqueOrThrow
   */
  export type BannerOfertaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerOferta
     */
    select?: BannerOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerOferta
     */
    omit?: BannerOfertaOmit<ExtArgs> | null
    /**
     * Filter, which BannerOferta to fetch.
     */
    where: BannerOfertaWhereUniqueInput
  }

  /**
   * BannerOferta findFirst
   */
  export type BannerOfertaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerOferta
     */
    select?: BannerOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerOferta
     */
    omit?: BannerOfertaOmit<ExtArgs> | null
    /**
     * Filter, which BannerOferta to fetch.
     */
    where?: BannerOfertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BannerOfertas to fetch.
     */
    orderBy?: BannerOfertaOrderByWithRelationInput | BannerOfertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BannerOfertas.
     */
    cursor?: BannerOfertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BannerOfertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BannerOfertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BannerOfertas.
     */
    distinct?: BannerOfertaScalarFieldEnum | BannerOfertaScalarFieldEnum[]
  }

  /**
   * BannerOferta findFirstOrThrow
   */
  export type BannerOfertaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerOferta
     */
    select?: BannerOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerOferta
     */
    omit?: BannerOfertaOmit<ExtArgs> | null
    /**
     * Filter, which BannerOferta to fetch.
     */
    where?: BannerOfertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BannerOfertas to fetch.
     */
    orderBy?: BannerOfertaOrderByWithRelationInput | BannerOfertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BannerOfertas.
     */
    cursor?: BannerOfertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BannerOfertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BannerOfertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BannerOfertas.
     */
    distinct?: BannerOfertaScalarFieldEnum | BannerOfertaScalarFieldEnum[]
  }

  /**
   * BannerOferta findMany
   */
  export type BannerOfertaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerOferta
     */
    select?: BannerOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerOferta
     */
    omit?: BannerOfertaOmit<ExtArgs> | null
    /**
     * Filter, which BannerOfertas to fetch.
     */
    where?: BannerOfertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BannerOfertas to fetch.
     */
    orderBy?: BannerOfertaOrderByWithRelationInput | BannerOfertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BannerOfertas.
     */
    cursor?: BannerOfertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BannerOfertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BannerOfertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BannerOfertas.
     */
    distinct?: BannerOfertaScalarFieldEnum | BannerOfertaScalarFieldEnum[]
  }

  /**
   * BannerOferta create
   */
  export type BannerOfertaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerOferta
     */
    select?: BannerOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerOferta
     */
    omit?: BannerOfertaOmit<ExtArgs> | null
    /**
     * The data needed to create a BannerOferta.
     */
    data: XOR<BannerOfertaCreateInput, BannerOfertaUncheckedCreateInput>
  }

  /**
   * BannerOferta createMany
   */
  export type BannerOfertaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BannerOfertas.
     */
    data: BannerOfertaCreateManyInput | BannerOfertaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BannerOferta createManyAndReturn
   */
  export type BannerOfertaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerOferta
     */
    select?: BannerOfertaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BannerOferta
     */
    omit?: BannerOfertaOmit<ExtArgs> | null
    /**
     * The data used to create many BannerOfertas.
     */
    data: BannerOfertaCreateManyInput | BannerOfertaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BannerOferta update
   */
  export type BannerOfertaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerOferta
     */
    select?: BannerOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerOferta
     */
    omit?: BannerOfertaOmit<ExtArgs> | null
    /**
     * The data needed to update a BannerOferta.
     */
    data: XOR<BannerOfertaUpdateInput, BannerOfertaUncheckedUpdateInput>
    /**
     * Choose, which BannerOferta to update.
     */
    where: BannerOfertaWhereUniqueInput
  }

  /**
   * BannerOferta updateMany
   */
  export type BannerOfertaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BannerOfertas.
     */
    data: XOR<BannerOfertaUpdateManyMutationInput, BannerOfertaUncheckedUpdateManyInput>
    /**
     * Filter which BannerOfertas to update
     */
    where?: BannerOfertaWhereInput
    /**
     * Limit how many BannerOfertas to update.
     */
    limit?: number
  }

  /**
   * BannerOferta updateManyAndReturn
   */
  export type BannerOfertaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerOferta
     */
    select?: BannerOfertaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BannerOferta
     */
    omit?: BannerOfertaOmit<ExtArgs> | null
    /**
     * The data used to update BannerOfertas.
     */
    data: XOR<BannerOfertaUpdateManyMutationInput, BannerOfertaUncheckedUpdateManyInput>
    /**
     * Filter which BannerOfertas to update
     */
    where?: BannerOfertaWhereInput
    /**
     * Limit how many BannerOfertas to update.
     */
    limit?: number
  }

  /**
   * BannerOferta upsert
   */
  export type BannerOfertaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerOferta
     */
    select?: BannerOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerOferta
     */
    omit?: BannerOfertaOmit<ExtArgs> | null
    /**
     * The filter to search for the BannerOferta to update in case it exists.
     */
    where: BannerOfertaWhereUniqueInput
    /**
     * In case the BannerOferta found by the `where` argument doesn't exist, create a new BannerOferta with this data.
     */
    create: XOR<BannerOfertaCreateInput, BannerOfertaUncheckedCreateInput>
    /**
     * In case the BannerOferta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannerOfertaUpdateInput, BannerOfertaUncheckedUpdateInput>
  }

  /**
   * BannerOferta delete
   */
  export type BannerOfertaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerOferta
     */
    select?: BannerOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerOferta
     */
    omit?: BannerOfertaOmit<ExtArgs> | null
    /**
     * Filter which BannerOferta to delete.
     */
    where: BannerOfertaWhereUniqueInput
  }

  /**
   * BannerOferta deleteMany
   */
  export type BannerOfertaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BannerOfertas to delete
     */
    where?: BannerOfertaWhereInput
    /**
     * Limit how many BannerOfertas to delete.
     */
    limit?: number
  }

  /**
   * BannerOferta without action
   */
  export type BannerOfertaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerOferta
     */
    select?: BannerOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerOferta
     */
    omit?: BannerOfertaOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DulceScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    categoria: 'categoria',
    imagen: 'imagen',
    artesanal: 'artesanal',
    ingredientes: 'ingredientes',
    createdAt: 'createdAt'
  };

  export type DulceScalarFieldEnum = (typeof DulceScalarFieldEnum)[keyof typeof DulceScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellidos: 'apellidos',
    email: 'email',
    telefono: 'telefono',
    direccion: 'direccion',
    ciudad: 'ciudad',
    productos: 'productos',
    total: 'total',
    estado: 'estado',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const CierreDiarioScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    totalVentas: 'totalVentas',
    numPedidos: 'numPedidos',
    pedidosJson: 'pedidosJson',
    createdAt: 'createdAt'
  };

  export type CierreDiarioScalarFieldEnum = (typeof CierreDiarioScalarFieldEnum)[keyof typeof CierreDiarioScalarFieldEnum]


  export const CierreSemanalScalarFieldEnum: {
    id: 'id',
    numeroSemana: 'numeroSemana',
    mesAnio: 'mesAnio',
    totalVentas: 'totalVentas',
    numPedidos: 'numPedidos',
    cierresJson: 'cierresJson',
    cerradoMan: 'cerradoMan',
    createdAt: 'createdAt'
  };

  export type CierreSemanalScalarFieldEnum = (typeof CierreSemanalScalarFieldEnum)[keyof typeof CierreSemanalScalarFieldEnum]


  export const CierreMensualScalarFieldEnum: {
    id: 'id',
    mesAnio: 'mesAnio',
    totalVentas: 'totalVentas',
    numCierres: 'numCierres',
    cierresJson: 'cierresJson',
    createdAt: 'createdAt'
  };

  export type CierreMensualScalarFieldEnum = (typeof CierreMensualScalarFieldEnum)[keyof typeof CierreMensualScalarFieldEnum]


  export const BannerOfertaScalarFieldEnum: {
    id: 'id',
    imagen: 'imagen',
    descripcion: 'descripcion',
    vigencia: 'vigencia',
    metodosPago: 'metodosPago',
    createdAt: 'createdAt'
  };

  export type BannerOfertaScalarFieldEnum = (typeof BannerOfertaScalarFieldEnum)[keyof typeof BannerOfertaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type DulceWhereInput = {
    AND?: DulceWhereInput | DulceWhereInput[]
    OR?: DulceWhereInput[]
    NOT?: DulceWhereInput | DulceWhereInput[]
    id?: StringFilter<"Dulce"> | string
    nombre?: StringFilter<"Dulce"> | string
    descripcion?: StringNullableFilter<"Dulce"> | string | null
    precio?: FloatFilter<"Dulce"> | number
    categoria?: StringNullableFilter<"Dulce"> | string | null
    imagen?: StringNullableFilter<"Dulce"> | string | null
    artesanal?: BoolFilter<"Dulce"> | boolean
    ingredientes?: StringNullableListFilter<"Dulce">
    createdAt?: DateTimeFilter<"Dulce"> | Date | string
  }

  export type DulceOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    categoria?: SortOrderInput | SortOrder
    imagen?: SortOrderInput | SortOrder
    artesanal?: SortOrder
    ingredientes?: SortOrder
    createdAt?: SortOrder
  }

  export type DulceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DulceWhereInput | DulceWhereInput[]
    OR?: DulceWhereInput[]
    NOT?: DulceWhereInput | DulceWhereInput[]
    nombre?: StringFilter<"Dulce"> | string
    descripcion?: StringNullableFilter<"Dulce"> | string | null
    precio?: FloatFilter<"Dulce"> | number
    categoria?: StringNullableFilter<"Dulce"> | string | null
    imagen?: StringNullableFilter<"Dulce"> | string | null
    artesanal?: BoolFilter<"Dulce"> | boolean
    ingredientes?: StringNullableListFilter<"Dulce">
    createdAt?: DateTimeFilter<"Dulce"> | Date | string
  }, "id">

  export type DulceOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    categoria?: SortOrderInput | SortOrder
    imagen?: SortOrderInput | SortOrder
    artesanal?: SortOrder
    ingredientes?: SortOrder
    createdAt?: SortOrder
    _count?: DulceCountOrderByAggregateInput
    _avg?: DulceAvgOrderByAggregateInput
    _max?: DulceMaxOrderByAggregateInput
    _min?: DulceMinOrderByAggregateInput
    _sum?: DulceSumOrderByAggregateInput
  }

  export type DulceScalarWhereWithAggregatesInput = {
    AND?: DulceScalarWhereWithAggregatesInput | DulceScalarWhereWithAggregatesInput[]
    OR?: DulceScalarWhereWithAggregatesInput[]
    NOT?: DulceScalarWhereWithAggregatesInput | DulceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dulce"> | string
    nombre?: StringWithAggregatesFilter<"Dulce"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Dulce"> | string | null
    precio?: FloatWithAggregatesFilter<"Dulce"> | number
    categoria?: StringNullableWithAggregatesFilter<"Dulce"> | string | null
    imagen?: StringNullableWithAggregatesFilter<"Dulce"> | string | null
    artesanal?: BoolWithAggregatesFilter<"Dulce"> | boolean
    ingredientes?: StringNullableListFilter<"Dulce">
    createdAt?: DateTimeWithAggregatesFilter<"Dulce"> | Date | string
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: StringFilter<"Pedido"> | string
    nombre?: StringFilter<"Pedido"> | string
    apellidos?: StringFilter<"Pedido"> | string
    email?: StringFilter<"Pedido"> | string
    telefono?: StringFilter<"Pedido"> | string
    direccion?: StringFilter<"Pedido"> | string
    ciudad?: StringNullableFilter<"Pedido"> | string | null
    productos?: StringFilter<"Pedido"> | string
    total?: FloatFilter<"Pedido"> | number
    estado?: StringFilter<"Pedido"> | string
    createdAt?: DateTimeFilter<"Pedido"> | Date | string
    updatedAt?: DateTimeFilter<"Pedido"> | Date | string
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellidos?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    ciudad?: SortOrderInput | SortOrder
    productos?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    nombre?: StringFilter<"Pedido"> | string
    apellidos?: StringFilter<"Pedido"> | string
    email?: StringFilter<"Pedido"> | string
    telefono?: StringFilter<"Pedido"> | string
    direccion?: StringFilter<"Pedido"> | string
    ciudad?: StringNullableFilter<"Pedido"> | string | null
    productos?: StringFilter<"Pedido"> | string
    total?: FloatFilter<"Pedido"> | number
    estado?: StringFilter<"Pedido"> | string
    createdAt?: DateTimeFilter<"Pedido"> | Date | string
    updatedAt?: DateTimeFilter<"Pedido"> | Date | string
  }, "id">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellidos?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    ciudad?: SortOrderInput | SortOrder
    productos?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pedido"> | string
    nombre?: StringWithAggregatesFilter<"Pedido"> | string
    apellidos?: StringWithAggregatesFilter<"Pedido"> | string
    email?: StringWithAggregatesFilter<"Pedido"> | string
    telefono?: StringWithAggregatesFilter<"Pedido"> | string
    direccion?: StringWithAggregatesFilter<"Pedido"> | string
    ciudad?: StringNullableWithAggregatesFilter<"Pedido"> | string | null
    productos?: StringWithAggregatesFilter<"Pedido"> | string
    total?: FloatWithAggregatesFilter<"Pedido"> | number
    estado?: StringWithAggregatesFilter<"Pedido"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
  }

  export type CierreDiarioWhereInput = {
    AND?: CierreDiarioWhereInput | CierreDiarioWhereInput[]
    OR?: CierreDiarioWhereInput[]
    NOT?: CierreDiarioWhereInput | CierreDiarioWhereInput[]
    id?: StringFilter<"CierreDiario"> | string
    fecha?: DateTimeFilter<"CierreDiario"> | Date | string
    totalVentas?: FloatFilter<"CierreDiario"> | number
    numPedidos?: IntFilter<"CierreDiario"> | number
    pedidosJson?: StringFilter<"CierreDiario"> | string
    createdAt?: DateTimeFilter<"CierreDiario"> | Date | string
  }

  export type CierreDiarioOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    totalVentas?: SortOrder
    numPedidos?: SortOrder
    pedidosJson?: SortOrder
    createdAt?: SortOrder
  }

  export type CierreDiarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CierreDiarioWhereInput | CierreDiarioWhereInput[]
    OR?: CierreDiarioWhereInput[]
    NOT?: CierreDiarioWhereInput | CierreDiarioWhereInput[]
    fecha?: DateTimeFilter<"CierreDiario"> | Date | string
    totalVentas?: FloatFilter<"CierreDiario"> | number
    numPedidos?: IntFilter<"CierreDiario"> | number
    pedidosJson?: StringFilter<"CierreDiario"> | string
    createdAt?: DateTimeFilter<"CierreDiario"> | Date | string
  }, "id">

  export type CierreDiarioOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    totalVentas?: SortOrder
    numPedidos?: SortOrder
    pedidosJson?: SortOrder
    createdAt?: SortOrder
    _count?: CierreDiarioCountOrderByAggregateInput
    _avg?: CierreDiarioAvgOrderByAggregateInput
    _max?: CierreDiarioMaxOrderByAggregateInput
    _min?: CierreDiarioMinOrderByAggregateInput
    _sum?: CierreDiarioSumOrderByAggregateInput
  }

  export type CierreDiarioScalarWhereWithAggregatesInput = {
    AND?: CierreDiarioScalarWhereWithAggregatesInput | CierreDiarioScalarWhereWithAggregatesInput[]
    OR?: CierreDiarioScalarWhereWithAggregatesInput[]
    NOT?: CierreDiarioScalarWhereWithAggregatesInput | CierreDiarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CierreDiario"> | string
    fecha?: DateTimeWithAggregatesFilter<"CierreDiario"> | Date | string
    totalVentas?: FloatWithAggregatesFilter<"CierreDiario"> | number
    numPedidos?: IntWithAggregatesFilter<"CierreDiario"> | number
    pedidosJson?: StringWithAggregatesFilter<"CierreDiario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CierreDiario"> | Date | string
  }

  export type CierreSemanalWhereInput = {
    AND?: CierreSemanalWhereInput | CierreSemanalWhereInput[]
    OR?: CierreSemanalWhereInput[]
    NOT?: CierreSemanalWhereInput | CierreSemanalWhereInput[]
    id?: StringFilter<"CierreSemanal"> | string
    numeroSemana?: IntFilter<"CierreSemanal"> | number
    mesAnio?: StringFilter<"CierreSemanal"> | string
    totalVentas?: FloatFilter<"CierreSemanal"> | number
    numPedidos?: IntFilter<"CierreSemanal"> | number
    cierresJson?: StringFilter<"CierreSemanal"> | string
    cerradoMan?: BoolFilter<"CierreSemanal"> | boolean
    createdAt?: DateTimeFilter<"CierreSemanal"> | Date | string
  }

  export type CierreSemanalOrderByWithRelationInput = {
    id?: SortOrder
    numeroSemana?: SortOrder
    mesAnio?: SortOrder
    totalVentas?: SortOrder
    numPedidos?: SortOrder
    cierresJson?: SortOrder
    cerradoMan?: SortOrder
    createdAt?: SortOrder
  }

  export type CierreSemanalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CierreSemanalWhereInput | CierreSemanalWhereInput[]
    OR?: CierreSemanalWhereInput[]
    NOT?: CierreSemanalWhereInput | CierreSemanalWhereInput[]
    numeroSemana?: IntFilter<"CierreSemanal"> | number
    mesAnio?: StringFilter<"CierreSemanal"> | string
    totalVentas?: FloatFilter<"CierreSemanal"> | number
    numPedidos?: IntFilter<"CierreSemanal"> | number
    cierresJson?: StringFilter<"CierreSemanal"> | string
    cerradoMan?: BoolFilter<"CierreSemanal"> | boolean
    createdAt?: DateTimeFilter<"CierreSemanal"> | Date | string
  }, "id">

  export type CierreSemanalOrderByWithAggregationInput = {
    id?: SortOrder
    numeroSemana?: SortOrder
    mesAnio?: SortOrder
    totalVentas?: SortOrder
    numPedidos?: SortOrder
    cierresJson?: SortOrder
    cerradoMan?: SortOrder
    createdAt?: SortOrder
    _count?: CierreSemanalCountOrderByAggregateInput
    _avg?: CierreSemanalAvgOrderByAggregateInput
    _max?: CierreSemanalMaxOrderByAggregateInput
    _min?: CierreSemanalMinOrderByAggregateInput
    _sum?: CierreSemanalSumOrderByAggregateInput
  }

  export type CierreSemanalScalarWhereWithAggregatesInput = {
    AND?: CierreSemanalScalarWhereWithAggregatesInput | CierreSemanalScalarWhereWithAggregatesInput[]
    OR?: CierreSemanalScalarWhereWithAggregatesInput[]
    NOT?: CierreSemanalScalarWhereWithAggregatesInput | CierreSemanalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CierreSemanal"> | string
    numeroSemana?: IntWithAggregatesFilter<"CierreSemanal"> | number
    mesAnio?: StringWithAggregatesFilter<"CierreSemanal"> | string
    totalVentas?: FloatWithAggregatesFilter<"CierreSemanal"> | number
    numPedidos?: IntWithAggregatesFilter<"CierreSemanal"> | number
    cierresJson?: StringWithAggregatesFilter<"CierreSemanal"> | string
    cerradoMan?: BoolWithAggregatesFilter<"CierreSemanal"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CierreSemanal"> | Date | string
  }

  export type CierreMensualWhereInput = {
    AND?: CierreMensualWhereInput | CierreMensualWhereInput[]
    OR?: CierreMensualWhereInput[]
    NOT?: CierreMensualWhereInput | CierreMensualWhereInput[]
    id?: StringFilter<"CierreMensual"> | string
    mesAnio?: StringFilter<"CierreMensual"> | string
    totalVentas?: FloatFilter<"CierreMensual"> | number
    numCierres?: IntFilter<"CierreMensual"> | number
    cierresJson?: StringFilter<"CierreMensual"> | string
    createdAt?: DateTimeFilter<"CierreMensual"> | Date | string
  }

  export type CierreMensualOrderByWithRelationInput = {
    id?: SortOrder
    mesAnio?: SortOrder
    totalVentas?: SortOrder
    numCierres?: SortOrder
    cierresJson?: SortOrder
    createdAt?: SortOrder
  }

  export type CierreMensualWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CierreMensualWhereInput | CierreMensualWhereInput[]
    OR?: CierreMensualWhereInput[]
    NOT?: CierreMensualWhereInput | CierreMensualWhereInput[]
    mesAnio?: StringFilter<"CierreMensual"> | string
    totalVentas?: FloatFilter<"CierreMensual"> | number
    numCierres?: IntFilter<"CierreMensual"> | number
    cierresJson?: StringFilter<"CierreMensual"> | string
    createdAt?: DateTimeFilter<"CierreMensual"> | Date | string
  }, "id">

  export type CierreMensualOrderByWithAggregationInput = {
    id?: SortOrder
    mesAnio?: SortOrder
    totalVentas?: SortOrder
    numCierres?: SortOrder
    cierresJson?: SortOrder
    createdAt?: SortOrder
    _count?: CierreMensualCountOrderByAggregateInput
    _avg?: CierreMensualAvgOrderByAggregateInput
    _max?: CierreMensualMaxOrderByAggregateInput
    _min?: CierreMensualMinOrderByAggregateInput
    _sum?: CierreMensualSumOrderByAggregateInput
  }

  export type CierreMensualScalarWhereWithAggregatesInput = {
    AND?: CierreMensualScalarWhereWithAggregatesInput | CierreMensualScalarWhereWithAggregatesInput[]
    OR?: CierreMensualScalarWhereWithAggregatesInput[]
    NOT?: CierreMensualScalarWhereWithAggregatesInput | CierreMensualScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CierreMensual"> | string
    mesAnio?: StringWithAggregatesFilter<"CierreMensual"> | string
    totalVentas?: FloatWithAggregatesFilter<"CierreMensual"> | number
    numCierres?: IntWithAggregatesFilter<"CierreMensual"> | number
    cierresJson?: StringWithAggregatesFilter<"CierreMensual"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CierreMensual"> | Date | string
  }

  export type BannerOfertaWhereInput = {
    AND?: BannerOfertaWhereInput | BannerOfertaWhereInput[]
    OR?: BannerOfertaWhereInput[]
    NOT?: BannerOfertaWhereInput | BannerOfertaWhereInput[]
    id?: StringFilter<"BannerOferta"> | string
    imagen?: StringFilter<"BannerOferta"> | string
    descripcion?: StringFilter<"BannerOferta"> | string
    vigencia?: DateTimeFilter<"BannerOferta"> | Date | string
    metodosPago?: StringNullableListFilter<"BannerOferta">
    createdAt?: DateTimeFilter<"BannerOferta"> | Date | string
  }

  export type BannerOfertaOrderByWithRelationInput = {
    id?: SortOrder
    imagen?: SortOrder
    descripcion?: SortOrder
    vigencia?: SortOrder
    metodosPago?: SortOrder
    createdAt?: SortOrder
  }

  export type BannerOfertaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BannerOfertaWhereInput | BannerOfertaWhereInput[]
    OR?: BannerOfertaWhereInput[]
    NOT?: BannerOfertaWhereInput | BannerOfertaWhereInput[]
    imagen?: StringFilter<"BannerOferta"> | string
    descripcion?: StringFilter<"BannerOferta"> | string
    vigencia?: DateTimeFilter<"BannerOferta"> | Date | string
    metodosPago?: StringNullableListFilter<"BannerOferta">
    createdAt?: DateTimeFilter<"BannerOferta"> | Date | string
  }, "id">

  export type BannerOfertaOrderByWithAggregationInput = {
    id?: SortOrder
    imagen?: SortOrder
    descripcion?: SortOrder
    vigencia?: SortOrder
    metodosPago?: SortOrder
    createdAt?: SortOrder
    _count?: BannerOfertaCountOrderByAggregateInput
    _max?: BannerOfertaMaxOrderByAggregateInput
    _min?: BannerOfertaMinOrderByAggregateInput
  }

  export type BannerOfertaScalarWhereWithAggregatesInput = {
    AND?: BannerOfertaScalarWhereWithAggregatesInput | BannerOfertaScalarWhereWithAggregatesInput[]
    OR?: BannerOfertaScalarWhereWithAggregatesInput[]
    NOT?: BannerOfertaScalarWhereWithAggregatesInput | BannerOfertaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BannerOferta"> | string
    imagen?: StringWithAggregatesFilter<"BannerOferta"> | string
    descripcion?: StringWithAggregatesFilter<"BannerOferta"> | string
    vigencia?: DateTimeWithAggregatesFilter<"BannerOferta"> | Date | string
    metodosPago?: StringNullableListFilter<"BannerOferta">
    createdAt?: DateTimeWithAggregatesFilter<"BannerOferta"> | Date | string
  }

  export type DulceCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    precio: number
    categoria?: string | null
    imagen?: string | null
    artesanal?: boolean
    ingredientes?: DulceCreateingredientesInput | string[]
    createdAt?: Date | string
  }

  export type DulceUncheckedCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    precio: number
    categoria?: string | null
    imagen?: string | null
    artesanal?: boolean
    ingredientes?: DulceCreateingredientesInput | string[]
    createdAt?: Date | string
  }

  export type DulceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    artesanal?: BoolFieldUpdateOperationsInput | boolean
    ingredientes?: DulceUpdateingredientesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DulceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    artesanal?: BoolFieldUpdateOperationsInput | boolean
    ingredientes?: DulceUpdateingredientesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DulceCreateManyInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    precio: number
    categoria?: string | null
    imagen?: string | null
    artesanal?: boolean
    ingredientes?: DulceCreateingredientesInput | string[]
    createdAt?: Date | string
  }

  export type DulceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    artesanal?: BoolFieldUpdateOperationsInput | boolean
    ingredientes?: DulceUpdateingredientesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DulceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    artesanal?: BoolFieldUpdateOperationsInput | boolean
    ingredientes?: DulceUpdateingredientesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoCreateInput = {
    id?: string
    nombre: string
    apellidos: string
    email: string
    telefono: string
    direccion: string
    ciudad?: string | null
    productos: string
    total: number
    estado?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PedidoUncheckedCreateInput = {
    id?: string
    nombre: string
    apellidos: string
    email: string
    telefono: string
    direccion: string
    ciudad?: string | null
    productos: string
    total: number
    estado?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PedidoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    productos?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    productos?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoCreateManyInput = {
    id?: string
    nombre: string
    apellidos: string
    email: string
    telefono: string
    direccion: string
    ciudad?: string | null
    productos: string
    total: number
    estado?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PedidoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    productos?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    productos?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CierreDiarioCreateInput = {
    id?: string
    fecha?: Date | string
    totalVentas: number
    numPedidos: number
    pedidosJson: string
    createdAt?: Date | string
  }

  export type CierreDiarioUncheckedCreateInput = {
    id?: string
    fecha?: Date | string
    totalVentas: number
    numPedidos: number
    pedidosJson: string
    createdAt?: Date | string
  }

  export type CierreDiarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    totalVentas?: FloatFieldUpdateOperationsInput | number
    numPedidos?: IntFieldUpdateOperationsInput | number
    pedidosJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CierreDiarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    totalVentas?: FloatFieldUpdateOperationsInput | number
    numPedidos?: IntFieldUpdateOperationsInput | number
    pedidosJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CierreDiarioCreateManyInput = {
    id?: string
    fecha?: Date | string
    totalVentas: number
    numPedidos: number
    pedidosJson: string
    createdAt?: Date | string
  }

  export type CierreDiarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    totalVentas?: FloatFieldUpdateOperationsInput | number
    numPedidos?: IntFieldUpdateOperationsInput | number
    pedidosJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CierreDiarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    totalVentas?: FloatFieldUpdateOperationsInput | number
    numPedidos?: IntFieldUpdateOperationsInput | number
    pedidosJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CierreSemanalCreateInput = {
    id?: string
    numeroSemana: number
    mesAnio: string
    totalVentas: number
    numPedidos: number
    cierresJson: string
    cerradoMan?: boolean
    createdAt?: Date | string
  }

  export type CierreSemanalUncheckedCreateInput = {
    id?: string
    numeroSemana: number
    mesAnio: string
    totalVentas: number
    numPedidos: number
    cierresJson: string
    cerradoMan?: boolean
    createdAt?: Date | string
  }

  export type CierreSemanalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroSemana?: IntFieldUpdateOperationsInput | number
    mesAnio?: StringFieldUpdateOperationsInput | string
    totalVentas?: FloatFieldUpdateOperationsInput | number
    numPedidos?: IntFieldUpdateOperationsInput | number
    cierresJson?: StringFieldUpdateOperationsInput | string
    cerradoMan?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CierreSemanalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroSemana?: IntFieldUpdateOperationsInput | number
    mesAnio?: StringFieldUpdateOperationsInput | string
    totalVentas?: FloatFieldUpdateOperationsInput | number
    numPedidos?: IntFieldUpdateOperationsInput | number
    cierresJson?: StringFieldUpdateOperationsInput | string
    cerradoMan?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CierreSemanalCreateManyInput = {
    id?: string
    numeroSemana: number
    mesAnio: string
    totalVentas: number
    numPedidos: number
    cierresJson: string
    cerradoMan?: boolean
    createdAt?: Date | string
  }

  export type CierreSemanalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroSemana?: IntFieldUpdateOperationsInput | number
    mesAnio?: StringFieldUpdateOperationsInput | string
    totalVentas?: FloatFieldUpdateOperationsInput | number
    numPedidos?: IntFieldUpdateOperationsInput | number
    cierresJson?: StringFieldUpdateOperationsInput | string
    cerradoMan?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CierreSemanalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroSemana?: IntFieldUpdateOperationsInput | number
    mesAnio?: StringFieldUpdateOperationsInput | string
    totalVentas?: FloatFieldUpdateOperationsInput | number
    numPedidos?: IntFieldUpdateOperationsInput | number
    cierresJson?: StringFieldUpdateOperationsInput | string
    cerradoMan?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CierreMensualCreateInput = {
    id?: string
    mesAnio: string
    totalVentas: number
    numCierres: number
    cierresJson: string
    createdAt?: Date | string
  }

  export type CierreMensualUncheckedCreateInput = {
    id?: string
    mesAnio: string
    totalVentas: number
    numCierres: number
    cierresJson: string
    createdAt?: Date | string
  }

  export type CierreMensualUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesAnio?: StringFieldUpdateOperationsInput | string
    totalVentas?: FloatFieldUpdateOperationsInput | number
    numCierres?: IntFieldUpdateOperationsInput | number
    cierresJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CierreMensualUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesAnio?: StringFieldUpdateOperationsInput | string
    totalVentas?: FloatFieldUpdateOperationsInput | number
    numCierres?: IntFieldUpdateOperationsInput | number
    cierresJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CierreMensualCreateManyInput = {
    id?: string
    mesAnio: string
    totalVentas: number
    numCierres: number
    cierresJson: string
    createdAt?: Date | string
  }

  export type CierreMensualUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesAnio?: StringFieldUpdateOperationsInput | string
    totalVentas?: FloatFieldUpdateOperationsInput | number
    numCierres?: IntFieldUpdateOperationsInput | number
    cierresJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CierreMensualUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesAnio?: StringFieldUpdateOperationsInput | string
    totalVentas?: FloatFieldUpdateOperationsInput | number
    numCierres?: IntFieldUpdateOperationsInput | number
    cierresJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerOfertaCreateInput = {
    id?: string
    imagen: string
    descripcion: string
    vigencia: Date | string
    metodosPago?: BannerOfertaCreatemetodosPagoInput | string[]
    createdAt?: Date | string
  }

  export type BannerOfertaUncheckedCreateInput = {
    id?: string
    imagen: string
    descripcion: string
    vigencia: Date | string
    metodosPago?: BannerOfertaCreatemetodosPagoInput | string[]
    createdAt?: Date | string
  }

  export type BannerOfertaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    vigencia?: DateTimeFieldUpdateOperationsInput | Date | string
    metodosPago?: BannerOfertaUpdatemetodosPagoInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerOfertaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    vigencia?: DateTimeFieldUpdateOperationsInput | Date | string
    metodosPago?: BannerOfertaUpdatemetodosPagoInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerOfertaCreateManyInput = {
    id?: string
    imagen: string
    descripcion: string
    vigencia: Date | string
    metodosPago?: BannerOfertaCreatemetodosPagoInput | string[]
    createdAt?: Date | string
  }

  export type BannerOfertaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    vigencia?: DateTimeFieldUpdateOperationsInput | Date | string
    metodosPago?: BannerOfertaUpdatemetodosPagoInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerOfertaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    vigencia?: DateTimeFieldUpdateOperationsInput | Date | string
    metodosPago?: BannerOfertaUpdatemetodosPagoInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DulceCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    categoria?: SortOrder
    imagen?: SortOrder
    artesanal?: SortOrder
    ingredientes?: SortOrder
    createdAt?: SortOrder
  }

  export type DulceAvgOrderByAggregateInput = {
    precio?: SortOrder
  }

  export type DulceMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    categoria?: SortOrder
    imagen?: SortOrder
    artesanal?: SortOrder
    createdAt?: SortOrder
  }

  export type DulceMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    categoria?: SortOrder
    imagen?: SortOrder
    artesanal?: SortOrder
    createdAt?: SortOrder
  }

  export type DulceSumOrderByAggregateInput = {
    precio?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellidos?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    ciudad?: SortOrder
    productos?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellidos?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    ciudad?: SortOrder
    productos?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellidos?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    ciudad?: SortOrder
    productos?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CierreDiarioCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    totalVentas?: SortOrder
    numPedidos?: SortOrder
    pedidosJson?: SortOrder
    createdAt?: SortOrder
  }

  export type CierreDiarioAvgOrderByAggregateInput = {
    totalVentas?: SortOrder
    numPedidos?: SortOrder
  }

  export type CierreDiarioMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    totalVentas?: SortOrder
    numPedidos?: SortOrder
    pedidosJson?: SortOrder
    createdAt?: SortOrder
  }

  export type CierreDiarioMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    totalVentas?: SortOrder
    numPedidos?: SortOrder
    pedidosJson?: SortOrder
    createdAt?: SortOrder
  }

  export type CierreDiarioSumOrderByAggregateInput = {
    totalVentas?: SortOrder
    numPedidos?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CierreSemanalCountOrderByAggregateInput = {
    id?: SortOrder
    numeroSemana?: SortOrder
    mesAnio?: SortOrder
    totalVentas?: SortOrder
    numPedidos?: SortOrder
    cierresJson?: SortOrder
    cerradoMan?: SortOrder
    createdAt?: SortOrder
  }

  export type CierreSemanalAvgOrderByAggregateInput = {
    numeroSemana?: SortOrder
    totalVentas?: SortOrder
    numPedidos?: SortOrder
  }

  export type CierreSemanalMaxOrderByAggregateInput = {
    id?: SortOrder
    numeroSemana?: SortOrder
    mesAnio?: SortOrder
    totalVentas?: SortOrder
    numPedidos?: SortOrder
    cierresJson?: SortOrder
    cerradoMan?: SortOrder
    createdAt?: SortOrder
  }

  export type CierreSemanalMinOrderByAggregateInput = {
    id?: SortOrder
    numeroSemana?: SortOrder
    mesAnio?: SortOrder
    totalVentas?: SortOrder
    numPedidos?: SortOrder
    cierresJson?: SortOrder
    cerradoMan?: SortOrder
    createdAt?: SortOrder
  }

  export type CierreSemanalSumOrderByAggregateInput = {
    numeroSemana?: SortOrder
    totalVentas?: SortOrder
    numPedidos?: SortOrder
  }

  export type CierreMensualCountOrderByAggregateInput = {
    id?: SortOrder
    mesAnio?: SortOrder
    totalVentas?: SortOrder
    numCierres?: SortOrder
    cierresJson?: SortOrder
    createdAt?: SortOrder
  }

  export type CierreMensualAvgOrderByAggregateInput = {
    totalVentas?: SortOrder
    numCierres?: SortOrder
  }

  export type CierreMensualMaxOrderByAggregateInput = {
    id?: SortOrder
    mesAnio?: SortOrder
    totalVentas?: SortOrder
    numCierres?: SortOrder
    cierresJson?: SortOrder
    createdAt?: SortOrder
  }

  export type CierreMensualMinOrderByAggregateInput = {
    id?: SortOrder
    mesAnio?: SortOrder
    totalVentas?: SortOrder
    numCierres?: SortOrder
    cierresJson?: SortOrder
    createdAt?: SortOrder
  }

  export type CierreMensualSumOrderByAggregateInput = {
    totalVentas?: SortOrder
    numCierres?: SortOrder
  }

  export type BannerOfertaCountOrderByAggregateInput = {
    id?: SortOrder
    imagen?: SortOrder
    descripcion?: SortOrder
    vigencia?: SortOrder
    metodosPago?: SortOrder
    createdAt?: SortOrder
  }

  export type BannerOfertaMaxOrderByAggregateInput = {
    id?: SortOrder
    imagen?: SortOrder
    descripcion?: SortOrder
    vigencia?: SortOrder
    createdAt?: SortOrder
  }

  export type BannerOfertaMinOrderByAggregateInput = {
    id?: SortOrder
    imagen?: SortOrder
    descripcion?: SortOrder
    vigencia?: SortOrder
    createdAt?: SortOrder
  }

  export type DulceCreateingredientesInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DulceUpdateingredientesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BannerOfertaCreatemetodosPagoInput = {
    set: string[]
  }

  export type BannerOfertaUpdatemetodosPagoInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}