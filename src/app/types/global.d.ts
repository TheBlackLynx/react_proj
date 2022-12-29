declare module '*.scss' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
  }

  declare module "\*.svg" {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
  }

  declare module "\*.jpg" {
    const content: string;
    export default content;
  }
  
  declare module "\*.png" {
    const content: string;
    export default content;
  }
  
  declare module "\*.json" {
    const content: string;
    export default content;
  }

declare const __IS_DEV__: boolean;
declare const __API__: string;