import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

export default {
  preset: "ts-jest", // 테스트를 위한 기본 설정을 ts-jest 패키지에서 가져와 사용
  testEnvironment: "node", // Node.js 환경에서 테스트 실행
  roots: ["<rootDir>/src"], // 테스트할 파일과 소스는 src 디렉토리 내에 위치
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"], // 어떤 파일이 테스트 파일로 간주할지 이름 패턴 지정
  collectCoverageFrom: ["src/**/*.ts", "!src/**/*.d.ts"], // 커버리지 수집 대상 파일 지정 (타입 선언 파일 제외) // 커버리지 : 테스트가 코드의 어느 부분을 실행했는지에 대한 정보
  transform: { // 특정 패턴의 파일을 테스트 전에 어떻게 변환(compile)할지 지정 // jest는 기본적으로 자바스크립트만 이해하므로, ts-jest를 사용해 TypeScript 파일을 자바스크립트로 변환
    '^.+\\.ts$': ['ts-jest', { // .ts 확장자를 가진 모든 파일에 대해 ts-jest를 사용하여 변환
      useESM: true,  // ESM(ECMAScript Module) 형식 사용하기 위함 // Node.js의 최신 모듈 시스템
      tsconfig: { // 테스트를 실행할 때만 적용할 별도의 타입스크립트 컴파일러 옵션 지정 // 기존 tsconfig.json 파일을 덮어씀
        module: 'esnext',
        target: 'esnext',
        moduleResolution: 'node',
        verbatimModuleSyntax: false 
      }
    }]
  },
  moduleNameMapper: { // 모듈 경로를 매핑하는 규칙 지정 // 예: src 디렉토리를 @로 매핑
    '^@/(.*)$': '<rootDir>/src/$1' // src 디렉토리를 @로 매핑
  }, 
  extensionsToTreatAsEsm: ['.ts'] // .ts 파일을 ESM(ECMAScript Module)로 처리
};