type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = []
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    Object.entries(mods)
      .filter(([clascsname, value]) => Boolean(value))
      .map(([clascsname, vlaue]) => clascsname),
  ].join(" ");
}
