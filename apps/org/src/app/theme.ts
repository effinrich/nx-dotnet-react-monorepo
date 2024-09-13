import {
  createSystem,
  defaultBaseConfig,
  defineConfig,
  mergeConfigs,
} from '@chakra-ui/react';

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          500: { value: '#ff9900' },
        },
      },
    },
  },
});

const config = mergeConfigs(defaultBaseConfig, customConfig);

export const system = createSystem(config);
