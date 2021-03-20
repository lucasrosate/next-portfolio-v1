///<reference types="next" />
///<reference types="next/types/global" />
///<reference types="next-images" />

// declaration.d.ts
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}