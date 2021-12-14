import { Option } from './types';

export const equalsOrLocal = (value: string) => (option: Option) => option.info === value || option.info === 'local';
export const valueEquals = (value: string) => (option: Option) => option.value === value;

export const isAuto = (value: string): boolean => value === 'auto'
