import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

export default {
  preset: "ts-jest", // 테스트를 위한 기본 설정을 ts-jest 패키지에서 가져와 사용
  testEnvironment: "node", // Node.js 환경에서 테스트 실행
  roots: ["<rootDir>/src"], // 테스트할 파일과 소스는 src 디렉토리 내에 위치
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
  collectCoverageFrom: ["src/**/*.ts", "!src/**/*.d.ts"],
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      useESM: true,
      tsconfig: {
        module: 'esnext',
        target: 'esnext',
        moduleResolution: 'node',
        verbatimModuleSyntax: false
      }
    }]
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1' // src 디렉토리를 @로 매핑
  },
  extensionsToTreatAsEsm: ['.ts']
};