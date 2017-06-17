import * as fs from "async-file";
import TJSON from "tjson-js";

/** AES-SIV test vectors */
export class AesSivExample {
  static readonly DEFAULT_EXAMPLES_PATH = "../vectors/aes_siv.tjson";

  public readonly name: string;
  public readonly key: Uint8Array;
  public readonly ad: Uint8Array[];
  public readonly plaintext: Uint8Array;
  public readonly output: Uint8Array;

  static async loadAll(): Promise<AesSivExample[]> {
    return AesSivExample.loadFromFile(AesSivExample.DEFAULT_EXAMPLES_PATH);
  }

  static async loadFromFile(filename: string): Promise<AesSivExample[]> {
    let tjson = TJSON.parse(await fs.readFile(filename, "utf8"));
    return tjson["examples"].map((ex: any) => {
      let obj = Object.create(AesSivExample.prototype);
      return Object.assign(obj, ex);
    });
  }
}

/** AES (raw block function) test vectors */
export class AesExample {
  static readonly DEFAULT_EXAMPLES_PATH = "../vectors/aes.tjson";

  public readonly key: Uint8Array;
  public readonly src: Uint8Array;
  public readonly dst: Uint8Array;

  static async loadAll(): Promise<AesExample[]> {
    return AesExample.loadFromFile(AesExample.DEFAULT_EXAMPLES_PATH);
  }

  static async loadFromFile(filename: string): Promise<AesExample[]> {
    let tjson = TJSON.parse(await fs.readFile(filename, "utf8"));
    return tjson["examples"].map((ex: any) => {
      let obj = Object.create(AesExample.prototype);
      return Object.assign(obj, ex);
    });
  }
}

/** AES-CTR test vectors */
export class AesCtrExample {
  static readonly DEFAULT_EXAMPLES_PATH = "../vectors/aes_ctr.tjson";

  public readonly key: Uint8Array;
  public readonly iv: Uint8Array;
  public readonly src: Uint8Array[];
  public readonly dst: Uint8Array[];

  static async loadAll(): Promise<AesCtrExample[]> {
    return AesCtrExample.loadFromFile(AesCtrExample.DEFAULT_EXAMPLES_PATH);
  }

  static async loadFromFile(filename: string): Promise<AesCtrExample[]> {
    let tjson = TJSON.parse(await fs.readFile(filename, "utf8"));
    return tjson["examples"].map((ex: any) => {
      let obj = Object.create(AesCtrExample.prototype);
      return Object.assign(obj, ex);
    });
  }
}

/** AES-CMAC test vectors */
export class AesCmacExample {
  static readonly DEFAULT_EXAMPLES_PATH = "../vectors/aes_cmac.tjson";

  public readonly key: Uint8Array;
  public readonly input: Uint8Array;
  public readonly result: Uint8Array;

  static async loadAll(): Promise<AesCmacExample[]> {
    return AesCmacExample.loadFromFile(AesCmacExample.DEFAULT_EXAMPLES_PATH);
  }

  static async loadFromFile(filename: string): Promise<AesCmacExample[]> {
    let tjson = TJSON.parse(await fs.readFile(filename, "utf8"));
    return tjson["examples"].map((ex: any) => {
      let obj = Object.create(AesCmacExample.prototype);
      return Object.assign(obj, ex);
    });
  }
}
