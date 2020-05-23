import * as path from 'path';
import * as fs from 'fs';

/**
 * validate exist path template
 * @param config - object config
 * @returns file template
 */
export const setPathHtmlTemplate = ({ template }: { template: string }) => {
  const templateExternal = template && path.resolve(process.cwd(), template);
  const templateInternal = path.resolve(__dirname, '../../public/index.html');
  if (!/\.html/.test(templateExternal) || !fs.existsSync(templateExternal)) {
    return templateInternal;
  }
  return templateExternal;
};

export const stringArr = (value: string | string[]): string[] => {
  if (Array.isArray(value)) return value;
  return typeof value === 'string' ? [value] : [];
}