import type Entity from "@ant-design/cssinjs/lib/Cache";

declare global {
  namespace Vike {
    interface Config {
      _antdCache?: Entity;
    }
  }
}

export {};
