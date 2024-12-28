import type Entity from "@ant-design/cssinjs/lib/Cache";

declare global {
  namespace Vike {
    interface PageContext {
      antdCache?: Entity;
    }
  }
}

export {};
